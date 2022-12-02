import { Bot } from "grammy";
import { MyContext } from "../../types";

const bot = new Bot<MyContext>(String(process.env.BOT_TOKEN));

export default bot;
