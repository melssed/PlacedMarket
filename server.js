import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

// ES module dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔹 ОТДАЁМ index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 🔹 Telegram данные
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// 🔹 Приём формы
app.post("/send", async (req, res) => {
  const { text, name, username, user_id } = req.body;

  // 🔒 приватность
  if (user_id !== 651824873) {
    return res.status(403).json({ ok: false });
  }

  const message =
`📩 Новое сообщение
👤 ${name}
🔗 @${username}
🆔 ${user_id}
💬 ${text}`;

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });

  res.json({ ok: true });
});

// 🔹 Railway
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
