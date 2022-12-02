import { Menu } from "@grammyjs/menu";
import { MyContext } from "../../types";
import { MENUS_ID } from "../../helpers";

export const menuCommand = new Menu<MyContext>(MENUS_ID.COMMAND_MENU)
  .text(
    (ctx) => ctx.t("infoByVin"),
    (ctx) => ctx.reply(ctx.t("pasteVin"))
  )
  .row();

const handlerSelectLanguage = async (ctx: MyContext): Promise<void> => {
  await ctx.reply(ctx.t("checkLang"));
  await ctx.reply(ctx.t("do"), { reply_markup: menuCommand });
}

export const menuLanguage = new Menu<MyContext>(MENUS_ID.LANGUAGE_MENU)
  .text(
    (ctx) => ctx.t("en"),
    async (ctx) => {
      await ctx.i18n.setLocale("en");
      await handlerSelectLanguage(ctx);
    }
  )
  .text(
    (ctx) => ctx.t("uk"),
    async (ctx) => {
      await ctx.i18n.setLocale("uk");
      await handlerSelectLanguage(ctx);
    }
  );
