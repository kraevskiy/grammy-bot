import { parseInfo, markdownLink, ERROR_TEXT_IN_DOM_TO_KEY_TRANSLATE } from "../../helpers";
import { sendMarkdown } from "../../core/sendMarkdown";
import { sendMedia } from "../../core/sendMedia";
import { MyContext } from "../../types";

const message = async (ctx: MyContext): Promise<void> => {
  const message = ctx.message;

  if (message && message.text?.length !== 17) {
    await ctx.reply(ctx.t("errorVin"));
  } else if (message?.text) {
    await ctx.reply(ctx.t("waitPls"));
    const res = await parseInfo(message.text, ctx);
    if (res) {
      if ("error" in res) {
        await ctx.reply(ctx.t(ERROR_TEXT_IN_DOM_TO_KEY_TRANSLATE[res.error]));
        await ctx.reply(ctx.t("pasteVin"));
      } else {
        await sendMarkdown(message.chat.id, res, ctx);
        await ctx.reply(ctx.t("waitPhotos"));
        await sendMedia(message.chat.id, res);
        if (res.data.allPhotos) {
          await ctx.reply(markdownLink(res.data.allPhotos, ctx), {
            parse_mode: "HTML",
          });
        }
        await ctx.reply(ctx.t("done"));
        await ctx.reply(ctx.t("pasteVin"));
      }
    } else {
      await ctx.reply(ctx.t("error"));
    }
  } else {
    await ctx.reply(ctx.t("error"));
  }
};

export default message;
