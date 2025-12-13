<script src="https://telegram.org/js/telegram-web-app.js"></script>

<form id="form">
  <textarea name="text" placeholder="Введите текст"></textarea>
  <button type="submit">Отправить</button>
</form>

<script>
const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe?.user;

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = e.target.text.value;

  await fetch("/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: text,
      name: user?.first_name,
      username: user?.username,
      user_id: user?.id
    })
  });

  tg.showAlert("Отправлено");
});
</script>
