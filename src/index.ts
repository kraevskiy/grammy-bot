require("dotenv").config();

import bot from "./core/bot";
import commands from "./commands";
import { menu } from "./core/menu";

bot.use(menu);
bot.use(commands);

// process.env.NODE_ENV === "development" ? development(bot) : production(bot);
bot.start().then((res) => {
  console.log(res);
  console.log("bot started");
});

export {};
