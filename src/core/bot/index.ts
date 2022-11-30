import { Bot } from "grammy";
import { i18n, MyContext } from "../i18n";
import { menu } from "../menu";
import commands from "../../commands";

const bot = new Bot<MyContext>(String(process.env.BOT_TOKEN));
bot.use(menu);
// bot.use(i18n);
bot.use(commands);

export default bot;
