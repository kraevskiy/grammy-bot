import { parseInfo, markdownLink, ERROR_TEXT_IN_DOM_TO_KEY_TRANSLATE } from "../../helpers";
import { sendMarkdown } from "../../core/sendMarkdown";
import { MyContext } from "../../types";
import { menuSelectByPhotos } from "../../core/menus";
import { Composer } from "grammy";

export const message = new Composer<MyContext>();

message.on("message", async (ctx: MyContext): Promise<void> => {
  const message = ctx.message;
  ctx.session.chatId = message?.chat.id;

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
        if (res.data.allPhotos) {
          ctx.session.allPhotos = res.data.allPhotos;
          ctx.session.photos = res.data.photos;
          await ctx.reply(ctx.t("text_select_by_photos"), { reply_markup: menuSelectByPhotos});
        } else {
          await ctx.reply(ctx.t("done"));
          await ctx.reply(ctx.t("pasteVin"));
        }
      }
    } else {
      await ctx.reply(ctx.t("error"));
    }
  } else {
    await ctx.reply(ctx.t("error"));
  }
});
