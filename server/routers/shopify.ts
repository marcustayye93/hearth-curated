import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import {
  getProducts,
  getProductByHandle,
  getProductRecommendations,
  getCollections,
  getCollectionByHandle,
  getInventoryByHandle,
  createCart,
  addToCart,
  updateCartLines,
  removeFromCart,
} from "../shopify";
import { createNewsletterCustomer } from "../shopify-customers";
import { notifyOwner } from "../_core/notification";

export const shopifyRouter = router({
  // ── Products ─────────────────────────────────────────────────────

  products: publicProcedure
    .input(
      z.object({
        first: z.number().min(1).max(250).default(50),
        after: z.string().optional(),
      }).optional()
    )
    .query(async ({ input }) => {
      return getProducts(input?.first ?? 50, input?.after);
    }),

  productByHandle: publicProcedure
    .input(z.object({ handle: z.string() }))
    .query(async ({ input }) => {
      return getProductByHandle(input.handle);
    }),

  productRecommendations: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(async ({ input }) => {
      return getProductRecommendations(input.productId);
    }),

  // ── Inventory ───────────────────────────────────────────────────

  inventory: publicProcedure
    .input(z.object({ handle: z.string() }))
    .query(async ({ input }) => {
      return getInventoryByHandle(input.handle);
    }),

  // ── Collections ──────────────────────────────────────────────────

  collections: publicProcedure.query(async () => {
    return getCollections();
  }),

  collectionByHandle: publicProcedure
    .input(
      z.object({
        handle: z.string(),
        productCount: z.number().min(1).max(250).default(50),
      })
    )
    .query(async ({ input }) => {
      return getCollectionByHandle(input.handle, input.productCount);
    }),

  // ── Cart ─────────────────────────────────────────────────────────

  cartCreate: publicProcedure
    .input(
      z.object({
        lines: z
          .array(
            z.object({
              merchandiseId: z.string(),
              quantity: z.number().min(1),
            })
          )
          .optional(),
      }).optional()
    )
    .mutation(async ({ input }) => {
      return createCart(input?.lines);
    }),

  cartAdd: publicProcedure
    .input(
      z.object({
        cartId: z.string(),
        lines: z.array(
          z.object({
            merchandiseId: z.string(),
            quantity: z.number().min(1),
          })
        ),
      })
    )
    .mutation(async ({ input }) => {
      return addToCart(input.cartId, input.lines);
    }),

  cartUpdate: publicProcedure
    .input(
      z.object({
        cartId: z.string(),
        lines: z.array(
          z.object({
            id: z.string(),
            quantity: z.number().min(0),
          })
        ),
      })
    )
    .mutation(async ({ input }) => {
      return updateCartLines(input.cartId, input.lines);
    }),

  cartRemove: publicProcedure
    .input(
      z.object({
        cartId: z.string(),
        lineIds: z.array(z.string()),
      })
    )
    .mutation(async ({ input }) => {
      return removeFromCart(input.cartId, input.lineIds);
    }),

  // ── Newsletter ──────────────────────────────────────────────────

  newsletterSubscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const result = await createNewsletterCustomer(input.email);

      // Notify owner of new subscriber (fire-and-forget)
      if (result.success) {
        notifyOwner({
          title: result.isNew
            ? `New subscriber: ${input.email}`
            : `Returning subscriber: ${input.email}`,
          content: result.isNew
            ? `${input.email} just subscribed to the Hearth Curated newsletter. They've been added to Shopify Customers with the "newsletter" tag and will receive the WELCOME10 discount code.`
            : `${input.email} submitted the newsletter form again. They were already in your Shopify Customers list.`,
        }).catch(() => {});
      }

      return result;
    }),
});
