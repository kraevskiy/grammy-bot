import { session as gSession } from "grammy";

export const session = gSession({
  initial: () => {
    return {};
  }
})
