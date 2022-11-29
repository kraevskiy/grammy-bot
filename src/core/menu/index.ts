import { en } from "../../translation";
import { Menu } from "@grammyjs/menu";

export const menu = new Menu("my-menu-identifier")
  .text(en.infoByVin, (ctx) => ctx.reply(en.pasteVin))
  .row();
