import { menuCommand } from "../../core/menus";
import { MyContext } from "../../types";

const help = async (ctx: MyContext): Promise<void> => {
  await ctx.reply(ctx.t("do"), { reply_markup: menuCommand });
};

export default help;
