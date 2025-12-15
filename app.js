const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

// Отключаем свайп-закрытие (очень важно)
tg.disableClosingConfirmation();
