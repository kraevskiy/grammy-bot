import { Bot } from "grammy";
import { MyContext } from "../core/i18n";

const production = async (bot: Bot<MyContext>): Promise<void> => {
  try {
    await bot.api.setWebhook(`${process.env.VERCEL_URL}/api/index`);
    console.log(`[SERVER] Bot starting webhook`);
  } catch (e) {
    console.error(e);
  }
};

const development = async (bot: Bot<MyContext>): Promise<void> => {
  try {
    await bot.api.deleteWebhook();
    console.log("[SERVER] Bot starting polling");
    await bot.start();
  } catch (e) {
    console.error(e);
  }
};

export { production, development };
