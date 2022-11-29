import { Composer } from "grammy";

import hello from "./hello";
import start from "./start";

const composer = new Composer();

composer.command("hello", hello);
composer.command("start", start);

export default composer;
