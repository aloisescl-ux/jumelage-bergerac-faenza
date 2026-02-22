import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createMembership, getMemberships, getUpcomingEvents, getGalleryItems } from "./db";
import { notifyOwner } from "./_core/notification";
import { CONTACT } from "@shared/constants";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  /**
   * Adhésions
   */
  memberships: router({
    create: publicProcedure
      .input(
        z.object({
          civility: z.enum(["M", "Mme", "Mlle"]),
          firstName: z.string().min(1),
          lastName: z.string().min(1),
          address: z.string().min(1),
          phone: z.string().optional(),
          email: z.string().email(),
          italianOrigin: z.boolean().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const result = await createMembership({
            civility: input.civility,
            firstName: input.firstName,
            lastName: input.lastName,
            address: input.address,
            phone: input.phone,
            email: input.email,
            italianOrigin: input.italianOrigin || false,
            status: "pending",
          });

          // Envoyer une notification au président
          await notifyOwner({
            title: "Nouvelle demande d'adhésion",
            content: `${input.civility} ${input.firstName} ${input.lastName} a soumis une demande d'adhésion.\n\nEmail: ${input.email}\nAdresse: ${input.address}\nTéléphone: ${input.phone || "Non fourni"}\nOrigine italienne: ${input.italianOrigin ? "Oui" : "Non"}`,
          });

          return {
            success: true,
            message: "Votre demande a été envoyée avec succès!",
          };
        } catch (error) {
          console.error("Error creating membership:", error);
          throw new Error("Erreur lors de la création de l'adhésion");
        }
      }),

    list: publicProcedure.query(async () => {
      return await getMemberships();
    }),
  }),

  /**
   * Événements
   */
  events: router({
    list: publicProcedure.query(async () => {
      return await getUpcomingEvents();
    }),
  }),

  /**
   * Galerie
   */
  gallery: router({
    list: publicProcedure.query(async () => {
      return await getGalleryItems();
    }),
  }),
});

export type AppRouter = typeof appRouter;
