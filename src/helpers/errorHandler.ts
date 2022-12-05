import { Bot, BotError, GrammyError, HttpError } from "grammy";
import { MyContext } from "../types";

export const errorHandler = async (
  bot: Bot<MyContext>,
  err: BotError<MyContext>,
) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);

  const sendError = async (text?: string) => await bot.api.sendMessage(
    process.env.SUPPORT_CHAT_ID as string,
    `
‼️ Bot ERROR: <b>${bot.botInfo.first_name}</b>
▶️ <b>id:</b> ${bot.botInfo.id}
🔗 <b>username:</b> @${bot.botInfo.username}
💻 <b>author:</b> @illia_kraievskyi
🕗 ${new Date()}
❌ ${text}
    `, { parse_mode: "HTML" }
  );
  await ctx.reply(ctx.t("error"));
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
    await sendError(`Error in request: ${e.description}`);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
    await sendError(`Could not contact Telegram: ${e}`);
  } else if (e instanceof Error){
    console.error("e instanceof Error:", e);
    await sendError(`Fetch error: ${e.message}`);
  } else {
    console.error("Unknown error:", e);
    await sendError(`Unknown error: ${e}`);
  }
}
