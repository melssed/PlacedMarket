import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// 👉 раздаём index.html
app.use(express.static(path.join(__dirname, "public")));

// 👉 переменные Railway
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// 👉 приём формы
app.post("/send", async (req, res) => {
  try {
    const { text, name, username, user_id } = req.body;

    const message = 
`📩 Новое сообщение
👤 ${name}
🔗 @${username || "—"}
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
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false });
  }
});

// 👉 Railway порт
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
