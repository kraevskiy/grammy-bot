import { Context } from "grammy";
import { en } from "../../translation";

const hello = async (ctx: Context): Promise<void> => {
  await ctx.reply(en.hi);
};

export default hello;
