import { en } from "../../translation";
import { IParseType } from "../../types";
import bot from "../bot";

export const sendMedia = async (
  chat_id: number | string,
  data: IParseType
): Promise<void> => {
  const promises: [] = [];
  const chunkSize = 10;
  for (let i = 0; i < data.data.photos.length; i += chunkSize) {
    const chunk = data.data.photos.slice(i, i + chunkSize);
    promises.push(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bot.api.sendMediaGroup(
        chat_id,
        chunk.map((p) => ({ type: "photo", media: p }))
      )
    );
  }
  await Promise.all(promises).finally(async () => {
    await bot.api.sendMessage(chat_id, en.done);
    await bot.api.sendMessage(chat_id, en.pasteVin);
  });
};
