import { IParseType } from "../../types";
import bot from "../bot";
import { markdownHtml } from "../../helpers/markdown.html";
import { Message } from "grammy/out/platform.node";

export const sendMarkdown = async (
  chat_id: number | string,
  data: IParseType
): Promise<Message.TextMessage> => {
  return bot.api.sendMessage(chat_id, markdownHtml(data), {
    parse_mode: "HTML",
  });
};
