import { MyContext } from "../../types";
import { menuLanguage } from "../../core/menus";
import { Composer } from "grammy";

export const language = new Composer<MyContext>();

language.command("language", async (ctx: MyContext): Promise<void> => {
  await ctx.reply(ctx.t("chooseLang"), { reply_markup: menuLanguage });
});
