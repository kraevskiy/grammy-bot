import bot from "../bot";

export const sendMedia = async (
  chat_id: number | string,
  data: string[]
): Promise<
  (
    | import("@grammyjs/types/message").Message.PhotoMessage
    | import("@grammyjs/types/message").Message.AudioMessage
    | import("@grammyjs/types/message").Message.DocumentMessage
    | import("@grammyjs/types/message").Message.VideoMessage
  )[]
> => {
  return await bot.api.sendMediaGroup(
    chat_id,
    data.slice(0, 9).map((p) => ({ type: "photo", media: p }))
  );
};
