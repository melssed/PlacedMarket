const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

/* Убираем системные свайпы внутри WebView */
if (tg.disableVerticalSwipes) {
    tg.disableVerticalSwipes();
}

/* Фиксируем цвета */
tg.setBackgroundColor('#151515');
tg.setHeaderColor('#151515');

/* Полный запрет скролла */
document.addEventListener(
    'touchmove',
    e => e.preventDefault(),
    { passive: false }
);
