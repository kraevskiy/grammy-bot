require("dotenv").config();

import bot from "./core/bot";
import { development, production } from "./utils/launch";

process.env.NODE_ENV === "development" ? development(bot) : production(bot);

export {};
