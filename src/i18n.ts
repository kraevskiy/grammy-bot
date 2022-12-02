import { I18n } from "@grammyjs/i18n";
import { MyContext } from "./types";

export const i18n = new I18n<MyContext>({
  defaultLocale: "en",
  useSession: true, // whether to store user language in session
  directory: "./src/locales", // Load all translation files from locales/.
  localeNegotiator: (ctx) =>
    ctx.session.__language_code ?? ctx.from?.language_code ?? "en",
});
