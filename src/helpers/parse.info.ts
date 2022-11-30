import { IParseSuccess, IParseError } from "../types";
import { Context } from "grammy";
import { en } from "../translation";
import fetch from "node-fetch-commonjs";

export const parseInfo = async (
  vin: string,
  ctx: Context
): Promise<IParseSuccess | IParseError | null> => {
  const res = await fetch(process.env.PARSE_HOST as string, {
    method: "post",
    headers: {
      Authorization: process.env.PARSE_AUTH as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ vin }),
  }).then((res) => res.json());

  if (res) {
    return res as IParseSuccess | IParseError;
  }
  await ctx.reply(en.error);
  return null;
};
