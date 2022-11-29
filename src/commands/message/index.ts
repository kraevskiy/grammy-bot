import { Context } from "grammy";
import { en } from "../../translation";
import { parseInfo } from "../../helpers/parse.info";
import { sendMarkdown } from "../../core/sendMarkdown";
import { sendMedia } from "../../core/sendMedia";

const message = async (ctx: Context): Promise<void> => {
  const message = ctx.message;
  if (message && message.text?.length !== 17) {
    await ctx.reply(en.errorVin);
  } else if (message?.text) {
    await ctx.reply(en.waitPls);
    const res = await parseInfo(message.text, ctx);
    if (res) {
      await sendMarkdown(message.chat.id, res);
      await ctx.reply(en.waitPhotos);
      await sendMedia(message.chat.id, res);
      await ctx.reply(en.done);
      await ctx.reply(en.pasteVin);
    } else {
      await ctx.reply(en.error);
    }
  } else {
    await ctx.reply(en.error);
  }
};

export default message;
