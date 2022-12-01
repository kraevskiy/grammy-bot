require("../src/index");

import express from "express";
import { webhookCallback } from "grammy";

import bot from "../src/core/bot";

const app = express();

app.use(express.json());
app.use(`/api/index`, webhookCallback(bot));
app.use("/", (req, res) => {
  res.redirect("https://t.me/bekas_logistics_tracking_bot");
});

export default app;
