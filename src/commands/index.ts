import { Composer } from "grammy";

import start from "./start";
// import help from "./help";
// import message from "./message";

const composer = new Composer();

composer.command("start", start);
// composer.command("help", help);
// composer.on("message", message);

export default composer;
