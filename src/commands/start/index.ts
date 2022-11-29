import { Context } from "grammy";

const start = async (ctx: Context): Promise<void> => {
    await ctx.reply("Hello, world!");
};

export default start;
