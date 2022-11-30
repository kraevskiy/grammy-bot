require("dotenv").config();

import bot from "./core/bot";
import commands from "./commands";
// import { menu } from "./core/menu";

import { development, production } from "./utils/launch";

bot.use(commands);
// bot.use(menu);

process.env.NODE_ENV === "development" ? development(bot) : production(bot);

export {};
