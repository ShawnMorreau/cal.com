import Stripe from "stripe";

import { type Container, createModule, ModuleLoader } from "@calcom/features/di/di";
import getStripe from "@calcom/features/ee/payments/server/stripe";

import { DI_TOKENS } from "../tokens";

export const stripeClientModule = createModule();
const token = DI_TOKENS.STRIPE_CLIENT;

const apiKey = process.env.STRIPE_PRIVATE_KEY;

let client: Stripe;

if (apiKey) {
  client = getStripe(apiKey)!;
} else {
  console.warn("STRIPE_PRIVATE_KEY is missing. Stripe features will be disabled.");
  client = new Proxy({} as Stripe, {
    get: (target, prop) => {
      throw new Error(
        `Stripe is not configured. Cannot access Stripe.${String(prop)}. Please set STRIPE_PRIVATE_KEY.`
      );
    },
  });
}

stripeClientModule.bind(token).toValue(client);

export const stripeClientModuleLoader: ModuleLoader = {
  token,
  loadModule: (container: Container) => {
    container.load(token, stripeClientModule);
  },
};
