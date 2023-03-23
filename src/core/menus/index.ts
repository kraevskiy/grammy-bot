import { Menu } from "@grammyjs/menu";
import { MyContext } from "../../types";
import { markdownLink, MENUS_ID } from "../../helpers";
import { sendMedia } from "../sendMedia";

export const menuSelectByPhotos = new Menu<MyContext>(
  MENUS_ID.SELECT_PHOTOS_MENU
)
  .text(
    (ctx) => ctx.t("text_select_by_photos_yes"),
    async (ctx) => {
      await ctx.reply(ctx.t("waitPhotos"));
      const { allPhotos, chatId, photos } = ctx.session;
      if (chatId) {
        if (photos) {
          await sendMedia(chatId, photos);
        }
        if (allPhotos) {
          await ctx.reply(markdownLink(allPhotos, ctx), {
            parse_mode: "HTML",
          });
        }
        await ctx.reply(ctx.t("done"));
      } else {
        await ctx.reply(ctx.t("error"));
      }
      await ctx.reply(ctx.t("pasteVin"));
    }
  )
  .text(
    (ctx) => ctx.t("text_select_by_photos_no"),
    async (ctx) => {
      await ctx.reply(ctx.t("done"));
      await ctx.reply(ctx.t("pasteVin"));
    }
  );

export const menuCommand = new Menu<MyContext>(MENUS_ID.COMMAND_MENU)
  .text(
    (ctx) => ctx.t("infoByVin"),
    (ctx) => ctx.reply(ctx.t("pasteVin"))
  )
  .row();

const handlerSelectLanguage = async (ctx: MyContext): Promise<void> => {
  await ctx.reply(ctx.t("checkLang"));
  await ctx.reply(ctx.t("do"), { reply_markup: menuCommand });
};

export const menuLanguage = new Menu<MyContext>(MENUS_ID.LANGUAGE_MENU, {
  autoAnswer: false,
})
  .text(
    (ctx) => ctx.t("en"),
    async (ctx) => {
      await ctx.i18n.setLocale("en");
      await handlerSelectLanguage(ctx);
    }
  )
  .text(
    (ctx) => ctx.t("uk"),
    async (ctx) => {
      await ctx.i18n.setLocale("uk");
      await handlerSelectLanguage(ctx);
    }
  );
