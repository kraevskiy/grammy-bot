require("../src/index");

import express from "express";
import { webhookCallback } from "grammy";

import bot from "../src/core/bot";

const app = express();

app.use(express.json());
app.use(`/api/index`, webhookCallback(bot));

export default app;
