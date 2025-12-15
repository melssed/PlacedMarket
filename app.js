const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

/* ❌ Запрещаем закрытие свайпом */
if (tg.disableVerticalSwipes) {
    tg.disableVerticalSwipes();
}

/* ❌ Запрещаем случайное закрытие */
tg.disableClosingConfirmation();

/* ❌ iOS bounce fix */
document.body.addEventListener('touchmove', function (e) {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });
