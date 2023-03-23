import bot from "./core/bot";
import commands, { MyCommands } from "./commands";
import { menuCommand, menuLanguage, menuSelectByPhotos } from "./core/menus";
import { i18n } from "./i18n";
import { errorHandler, startHandler, session } from "./helpers";
import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export async function init(): Promise<void> {
  bot.use(session);
  bot.use(i18n);
  bot.use(menuCommand);
  bot.use(menuSelectByPhotos);
  bot.use(menuLanguage);
  bot.use(commands);
  await bot.api.setMyCommands(MyCommands, {
    scope: { type: "all_private_chats" },
  });
  bot.start({
    onStart: startHandler,
  });
  bot.catch(async (err) => errorHandler(bot, err));
}
