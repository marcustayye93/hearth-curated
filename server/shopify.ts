/**
 * Shopify Storefront API client
 * Handles all GraphQL queries to the Shopify Storefront API.
 */

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN ?? "";
const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN ?? "";
const API_VERSION = "2024-01";

interface ShopifyResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/${API_VERSION}/graphql.json`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as ShopifyResponse<T>;

  if (json.errors?.length) {
    throw new Error(`Shopify GraphQL error: ${json.errors.map((e) => e.message).join(", ")}`);
  }

  return json.data;
}

// ── GraphQL Fragments ────────────────────────────────────────────────

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    tags
    productType
    vendor
    availableForSale
    priceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    compareAtPriceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    images(first: 10) {
      edges {
        node {
          id
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 50) {
      edges {
        node {
          id
          title
          availableForSale
          price { amount currencyCode }
          compareAtPrice { amount currencyCode }
          selectedOptions { name value }
          image {
            id
            url
            altText
            width
            height
          }
        }
      }
    }
    seo {
      title
      description
    }
  }
`;

const COLLECTION_FRAGMENT = `
  fragment CollectionFields on Collection {
    id
    handle
    title
    description
    descriptionHtml
    image {
      id
      url
      altText
      width
      height
    }
    seo {
      title
      description
    }
  }
`;

// ── Product Queries ──────────────────────────────────────────────────

export async function getProducts(first = 50, after?: string) {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProducts($first: Int!, $after: String) {
      products(first: $first, after: $after) {
        edges {
          cursor
          node { ...ProductFields }
        }
        pageInfo { hasNextPage endCursor }
      }
    }
  `;

  const data = await shopifyFetch<{
    products: {
      edges: Array<{ cursor: string; node: ShopifyProduct }>;
      pageInfo: { hasNextPage: boolean; endCursor: string | null };
    };
  }>(query, { first, after });

  return {
    products: data.products.edges.map((e) => normalizeProduct(e.node)),
    pageInfo: data.products.pageInfo,
  };
}

export async function getProductByHandle(handle: string) {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProductByHandle($handle: String!) {
      productByHandle(handle: $handle) { ...ProductFields }
    }
  `;

  const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>(query, { handle });

  if (!data.productByHandle) return null;
  return normalizeProduct(data.productByHandle);
}

export async function getProductRecommendations(productId: string) {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetRecommendations($productId: ID!) {
      productRecommendations(productId: $productId) { ...ProductFields }
    }
  `;

  const data = await shopifyFetch<{ productRecommendations: ShopifyProduct[] }>(query, { productId });

  return (data.productRecommendations ?? []).map(normalizeProduct);
}

// ── Collection Queries ───────────────────────────────────────────────

export async function getCollections() {
  const query = `
    ${COLLECTION_FRAGMENT}
    query GetCollections {
      collections(first: 20) {
        edges {
          node { ...CollectionFields }
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    collections: { edges: Array<{ node: ShopifyCollection }> };
  }>(query);

  return data.collections.edges.map((e) => normalizeCollection(e.node));
}

export async function getCollectionByHandle(handle: string, productCount = 50) {
  const query = `
    ${COLLECTION_FRAGMENT}
    ${PRODUCT_FRAGMENT}
    query GetCollectionByHandle($handle: String!, $productCount: Int!) {
      collectionByHandle(handle: $handle) {
        ...CollectionFields
        products(first: $productCount) {
          edges {
            node { ...ProductFields }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    collectionByHandle: (ShopifyCollection & { products: { edges: Array<{ node: ShopifyProduct }> } }) | null;
  }>(query, { handle, productCount });

  if (!data.collectionByHandle) return null;

  const collection = normalizeCollection(data.collectionByHandle);
  const products = data.collectionByHandle.products.edges.map((e) => normalizeProduct(e.node));

  return { ...collection, products };
}

// ── Cart Mutations ───────────────────────────────────────────────────

const CART_FRAGMENT = `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      totalAmount { amount currencyCode }
      subtotalAmount { amount currencyCode }
      totalTaxAmount { amount currencyCode }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount { amount currencyCode }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              price { amount currencyCode }
              product {
                id
                handle
                title
                images(first: 1) {
                  edges {
                    node { url altText }
                  }
                }
              }
              selectedOptions { name value }
              image { url altText }
            }
          }
        }
      }
    }
  }
`;

export async function createCart(lines?: Array<{ merchandiseId: string; quantity: number }>) {
  const query = `
    ${CART_FRAGMENT}
    mutation CreateCart($lines: [CartLineInput!]) {
      cartCreate(input: { lines: $lines }) {
        cart { ...CartFields }
        userErrors { field message }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartCreate: { cart: ShopifyCart; userErrors: Array<{ field: string[]; message: string }> };
  }>(query, { lines });

  if (data.cartCreate.userErrors.length) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartCreate.cart);
}

export async function addToCart(cartId: string, lines: Array<{ merchandiseId: string; quantity: number }>) {
  const query = `
    ${CART_FRAGMENT}
    mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ...CartFields }
        userErrors { field message }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesAdd: { cart: ShopifyCart; userErrors: Array<{ field: string[]; message: string }> };
  }>(query, { cartId, lines });

  if (data.cartLinesAdd.userErrors.length) {
    throw new Error(data.cartLinesAdd.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartLinesAdd.cart);
}

export async function updateCartLines(cartId: string, lines: Array<{ id: string; quantity: number }>) {
  const query = `
    ${CART_FRAGMENT}
    mutation UpdateCartLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart { ...CartFields }
        userErrors { field message }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: ShopifyCart; userErrors: Array<{ field: string[]; message: string }> };
  }>(query, { cartId, lines });

  if (data.cartLinesUpdate.userErrors.length) {
    throw new Error(data.cartLinesUpdate.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartLinesUpdate.cart);
}

export async function removeFromCart(cartId: string, lineIds: string[]) {
  const query = `
    ${CART_FRAGMENT}
    mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ...CartFields }
        userErrors { field message }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesRemove: { cart: ShopifyCart; userErrors: Array<{ field: string[]; message: string }> };
  }>(query, { cartId, lineIds });

  if (data.cartLinesRemove.userErrors.length) {
    throw new Error(data.cartLinesRemove.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartLinesRemove.cart);
}

// ── Raw Shopify Types ────────────────────────────────────────────────

interface ShopifyMoney {
  amount: string;
  currencyCode: string;
}

interface ShopifyImage {
  id?: string;
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
}

interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  tags: string[];
  productType: string;
  vendor: string;
  availableForSale: boolean;
  priceRange: { minVariantPrice: ShopifyMoney; maxVariantPrice: ShopifyMoney };
  compareAtPriceRange: { minVariantPrice: ShopifyMoney; maxVariantPrice: ShopifyMoney };
  images: { edges: Array<{ node: ShopifyImage }> };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        quantityAvailable: number | null;
        price: ShopifyMoney;
        compareAtPrice: ShopifyMoney | null;
        selectedOptions: Array<{ name: string; value: string }>;
        image: ShopifyImage | null;
      };
    }>;
  };
  seo: { title: string | null; description: string | null };
}

interface ShopifyCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  image: ShopifyImage | null;
  seo: { title: string | null; description: string | null };
}

interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: ShopifyMoney;
    subtotalAmount: ShopifyMoney;
    totalTaxAmount: ShopifyMoney | null;
  };
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        cost: { totalAmount: ShopifyMoney };
        merchandise: {
          id: string;
          title: string;
          price: ShopifyMoney;
          product: {
            id: string;
            handle: string;
            title: string;
            images: { edges: Array<{ node: { url: string; altText: string | null } }> };
          };
          selectedOptions: Array<{ name: string; value: string }>;
          image: { url: string; altText: string | null } | null;
        };
      };
    }>;
  };
}

// ── Normalization ────────────────────────────────────────────────────

export interface NormalizedProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  tags: string[];
  productType: string;
  vendor: string;
  availableForSale: boolean;
  priceRange: { min: number; max: number; currencyCode: string };
  images: Array<{ url: string; altText: string | null; width?: number; height?: number }>;
  variants: Array<{
    id: string;
    title: string;
    availableForSale: boolean;
    quantityAvailable: number | null;
    price: number;
    compareAtPrice: number | null;
    currencyCode: string;
    selectedOptions: Array<{ name: string; value: string }>;
    image: { url: string; altText: string | null } | null;
  }>;
  seo: { title: string | null; description: string | null };
}

export interface NormalizedCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  image: { url: string; altText: string | null } | null;
  seo: { title: string | null; description: string | null };
}

export interface NormalizedCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    total: number;
    subtotal: number;
    tax: number;
    currencyCode: string;
  };
  lines: Array<{
    id: string;
    quantity: number;
    totalAmount: number;
    variant: {
      id: string;
      title: string;
      price: number;
      selectedOptions: Array<{ name: string; value: string }>;
      image: { url: string; altText: string | null } | null;
    };
    product: {
      id: string;
      handle: string;
      title: string;
      image: { url: string; altText: string | null } | null;
    };
  }>;
}

function normalizeProduct(raw: ShopifyProduct): NormalizedProduct {
  return {
    id: raw.id,
    handle: raw.handle,
    title: raw.title,
    description: raw.description,
    descriptionHtml: raw.descriptionHtml,
    tags: raw.tags,
    productType: raw.productType,
    vendor: raw.vendor,
    availableForSale: raw.availableForSale,
    priceRange: {
      min: parseFloat(raw.priceRange.minVariantPrice.amount),
      max: parseFloat(raw.priceRange.maxVariantPrice.amount),
      currencyCode: raw.priceRange.minVariantPrice.currencyCode,
    },
    images: raw.images.edges.map((e) => ({
      url: e.node.url,
      altText: e.node.altText,
      width: e.node.width,
      height: e.node.height,
    })),
    variants: raw.variants.edges.map((e) => ({
      id: e.node.id,
      title: e.node.title,
      availableForSale: e.node.availableForSale,
      quantityAvailable: e.node.quantityAvailable,
      price: parseFloat(e.node.price.amount),
      compareAtPrice: e.node.compareAtPrice ? parseFloat(e.node.compareAtPrice.amount) : null,
      currencyCode: e.node.price.currencyCode,
      selectedOptions: e.node.selectedOptions,
      image: e.node.image ? { url: e.node.image.url, altText: e.node.image.altText } : null,
    })),
    seo: raw.seo,
  };
}

function normalizeCollection(raw: ShopifyCollection): NormalizedCollection {
  return {
    id: raw.id,
    handle: raw.handle,
    title: raw.title,
    description: raw.description,
    descriptionHtml: raw.descriptionHtml,
    image: raw.image ? { url: raw.image.url, altText: raw.image.altText } : null,
    seo: raw.seo,
  };
}

function normalizeCart(raw: ShopifyCart): NormalizedCart {
  return {
    id: raw.id,
    checkoutUrl: raw.checkoutUrl,
    totalQuantity: raw.totalQuantity,
    cost: {
      total: parseFloat(raw.cost.totalAmount.amount),
      subtotal: parseFloat(raw.cost.subtotalAmount.amount),
      tax: raw.cost.totalTaxAmount ? parseFloat(raw.cost.totalTaxAmount.amount) : 0,
      currencyCode: raw.cost.totalAmount.currencyCode,
    },
    lines: raw.lines.edges.map((e) => ({
      id: e.node.id,
      quantity: e.node.quantity,
      totalAmount: parseFloat(e.node.cost.totalAmount.amount),
      variant: {
        id: e.node.merchandise.id,
        title: e.node.merchandise.title,
        price: parseFloat(e.node.merchandise.price.amount),
        selectedOptions: e.node.merchandise.selectedOptions,
        image: e.node.merchandise.image,
      },
      product: {
        id: e.node.merchandise.product.id,
        handle: e.node.merchandise.product.handle,
        title: e.node.merchandise.product.title,
        image: e.node.merchandise.product.images.edges[0]?.node ?? null,
      },
    })),
  };
}
