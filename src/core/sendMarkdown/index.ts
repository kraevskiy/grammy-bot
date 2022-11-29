import { IParseType } from "src/types";
import bot from "../bot";
import { markdownHtml } from "../../helpers/markdown.html";

export const sendMarkdown = async (
  chat_id: number | string,
  data: IParseType
): Promise<void> => {
  await bot.api.sendMessage(chat_id, markdownHtml(data), {
    parse_mode: "HTML",
  });
};
