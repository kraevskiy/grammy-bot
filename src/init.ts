import { SUPPORT_CHAT_ID } from "./helpers/constants";
import {
  Bot,
  BotError,
  GrammyError,
  HttpError,
  session,
} from "grammy";
import bot from "./core/bot";
import commands from "./commands";
import { menuCommand, menuLanguage } from "./core/menus";
import { UserFromGetMe } from "grammy/out/types";
import { MyContext } from "./types";
import { i18n } from "./i18n";

const onStart = async (botInfo: UserFromGetMe) => {
  await bot.api.sendMessage(
    SUPPORT_CHAT_ID,
    `
✅ Bot Start: <b>${botInfo.first_name}</b>
▶️ <b>id:</b> ${botInfo.id}
🔗 <b>username:</b> @${botInfo.username}
💻 <b>author:</b> @illia_kraievskyi
🕗 ${new Date()}
➖➖➖➖➖➖➖➖➖➖➖
`,
    { parse_mode: "HTML" }
  );
};

const catchHandler = async (
  bot: Bot<MyContext>,
  err: BotError<MyContext>,
  msg?: unknown
) => {
  const ctx = err.ctx;
  await bot.api.sendMessage(
    SUPPORT_CHAT_ID,
    `
‼️ Bot ERROR: <b>${bot.botInfo.first_name}</b>
▶️ <b>id:</b> ${bot.botInfo.id}
🔗 <b>username:</b> @${bot.botInfo.username}
💻 <b>author:</b> @illia_kraievskyi
🕗 ${new Date()}
❌ Error while handling update ${ctx.update.update_id}:
    `
  );
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
};

export async function init(): Promise<void> {
  bot.use(
    session({
      initial: () => {
        return {};
      },
    })
  );
  bot.use(i18n);
  bot.use(menuCommand);
  bot.use(menuLanguage);
  bot.use(commands);

  bot.start({
    onStart,
  });

  bot.catch(async (err) => {
    const ctx = err.ctx;
    await catchHandler(bot, err);
    console.error(`Error while handling update ${ctx.update.update_id}:`);
  });
}
