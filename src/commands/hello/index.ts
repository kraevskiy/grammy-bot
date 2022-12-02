import { menuLanguage } from "../../core/menus";
import { MyContext } from "../../types";

const hello = async (ctx: MyContext): Promise<void> => {
  await ctx.reply(ctx.t("hi"));
  await ctx.reply(ctx.t("chooseLang"), { reply_markup: menuLanguage });
};

export default hello;
