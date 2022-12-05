import { Composer } from "grammy";
import { MyContext } from "../types";
import { BotCommand } from "grammy/out/types.node";

import { hello } from "./hello";
import { start } from "./start";
import { help } from "./help";
import { message } from "./message";
import { language } from "./language";

const commands = new Composer<MyContext>();

commands
  .use(hello)
  .use(start)
  .use(help)
  .use(language)
  .use(message);

export default commands;

export const MyCommands: readonly BotCommand[] = [
  { command: "start", description: "Start" },
  { command: "help", description: "Help" },
  { command: "language", description: "Change language" },
];
