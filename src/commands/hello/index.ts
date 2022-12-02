import { Context } from "grammy";
import { en } from "../../translation";
import { menu } from "../../core/menu";

const hello = async (ctx: Context): Promise<void> => {
  await ctx.reply(en.hi);
  await ctx.reply(en.do, { reply_markup: menu });
};

export default hello;
