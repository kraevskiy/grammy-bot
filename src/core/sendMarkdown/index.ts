import { IParseSuccess, MyContext } from "../../types";
import bot from "../bot";
import { markdownHtml } from "../../helpers";
import { Message } from "grammy/out/types";

export const sendMarkdown = async (
  chat_id: number | string,
  data: IParseSuccess,
  ctx: MyContext
): Promise<Message.TextMessage> => {
  return bot.api.sendMessage(chat_id, markdownHtml(data, ctx), {
    parse_mode: "HTML",
  });
};
