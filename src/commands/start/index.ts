import { Context } from "grammy";
import { menu } from "../../core/menu";
import { en } from "../../translation";

const start = async (ctx: Context): Promise<void> => {
  await ctx.reply(en.hi);
  await ctx.reply(en.do, { reply_markup: menu });
};

export default start;
