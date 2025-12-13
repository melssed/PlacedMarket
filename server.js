import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔐 разрешённый Telegram ID
const ALLOWED_ID = 651824873;

// 👉 отдаём index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 👉 обработка формы
app.post("/send", async (req, res) => {
  const { text, name, username, user_id } = req.body;

  // 🔒 проверка доступа
  if (Number(user_id) !== ALLOWED_ID) {
    return res.status(403).json({ error: "Access denied" });
  }

  const message = `📩 Новое сообщение:
👤 ${name || "Без имени"}
🔗 @${username || "—"}
🆔 ${user_id}
💬 ${text}`;

  await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      text: message
    })
  });

  res.json({ ok: true });
});

// 👉 Railway
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
