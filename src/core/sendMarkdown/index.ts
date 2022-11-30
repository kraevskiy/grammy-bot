import { IParseSuccess } from "../../types";
import bot from "../bot";
import { markdownHtml } from "../../helpers/markdown.html";
import { Message } from "grammy/out/types";

export const sendMarkdown = async (
  chat_id: number | string,
  data: IParseSuccess
): Promise<Message.TextMessage> => {
  return bot.api.sendMessage(chat_id, markdownHtml(data), {
    parse_mode: "HTML",
  });
};
