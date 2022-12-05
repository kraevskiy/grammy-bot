import { UserFromGetMe } from "grammy/out/types";
import bot from "../core/bot";

export const startHandler = async (botInfo: UserFromGetMe) => {
  await bot.api.sendMessage(
    process.env.SUPPORT_CHAT_ID as string,
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
