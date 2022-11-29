import { Bot } from "grammy";
import { menu } from "../menu";

const bot = new Bot(String(process.env.BOT_TOKEN));
bot.use(menu);

export default bot;
