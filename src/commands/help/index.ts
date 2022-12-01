import { Context } from "grammy";
// import { menu } from "../../core/menu";
import { en } from "../../translation";

const help = async (ctx: Context): Promise<void> => {
  // await ctx.reply(en.do, { reply_markup: menu });
  await ctx.reply(en.do);
};

export default help;
