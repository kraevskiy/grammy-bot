import { menuLanguage } from "../../core/menus";
import { MyContext } from "../../types";
import { Composer } from "grammy";

export const hello = new Composer<MyContext>();

hello.command("hello", async (ctx: MyContext): Promise<void> => {
  await ctx.reply(ctx.t("hi"));
  await ctx.reply(ctx.t("chooseLang"), { reply_markup: menuLanguage });
});
