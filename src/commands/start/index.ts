import { MyContext } from "../../types";
import { menuLanguage } from "../../core/menus";

const start = async (ctx: MyContext): Promise<void> => {
  await ctx.reply(ctx.t("hi"));
  await ctx.reply(ctx.t("chooseLang"), { reply_markup: menuLanguage });
};

export default start;
