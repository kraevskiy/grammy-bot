import { MyContext } from "../../types";
import { menuLanguage } from "../../core/menus";
import { Composer } from "grammy";

export const start = new Composer<MyContext>();

start.command("start", async (ctx: MyContext): Promise<void> => {
  ctx.session.chatId = ctx.message?.chat.id;
  await ctx.reply(ctx.t("hi"));
  await ctx.reply(ctx.t("chooseLang"), { reply_markup: menuLanguage });
});
