import { menuCommand, menuLanguage } from "../../core/menus";
import { MyContext } from "../../types";

const help = async (ctx: MyContext): Promise<void> => {
  await ctx.reply(ctx.t("do"), { reply_markup: menuCommand });
  await ctx.reply(ctx.t("or"), { reply_markup: menuLanguage });
};

export default help;
