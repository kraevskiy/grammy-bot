import { menuCommand, menuLanguage } from "../../core/menus";
import { MyContext } from "../../types";
import { Composer } from "grammy";

export const help = new Composer<MyContext>();

help.command("help", async (ctx: MyContext): Promise<void> => {
  await ctx.reply(ctx.t("do"), { reply_markup: menuCommand });
  await ctx.reply(ctx.t("or"), { reply_markup: menuLanguage });
});
