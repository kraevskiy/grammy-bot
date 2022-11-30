import { I18n, I18nFlavor } from "@grammyjs/i18n";
import { Context } from "grammy";
export type MyContext = Context & I18nFlavor;

export const i18n = new I18n<MyContext>({
  defaultLocale: "en", // see below for more information
  directory: "locales", // Load all translation files from locales/
});
