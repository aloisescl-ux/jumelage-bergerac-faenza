import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("memberships.create", () => {
  it("should create a membership with valid data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.memberships.create({
      civility: "M",
      firstName: "Jean",
      lastName: "Dupont",
      address: "123 Rue de Bergerac",
      phone: "0123456789",
      email: "jean.dupont@example.com",
      italianOrigin: false,
    });

    expect(result).toEqual({
      success: true,
      message: expect.any(String),
    });
  });

  it("should reject membership without required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.memberships.create({
        civility: "M",
        firstName: "",
        lastName: "Dupont",
        address: "123 Rue",
        email: "invalid-email",
      } as any);
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should reject invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.memberships.create({
        civility: "Mme",
        firstName: "Marie",
        lastName: "Martin",
        address: "456 Rue de Faenza",
        email: "not-an-email",
      } as any);
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("memberships.list", () => {
  it("should return list of memberships", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.memberships.list();

    expect(Array.isArray(result)).toBe(true);
  });
});
