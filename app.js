const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

/* 🔒 Отключаем свайпы WebView */
if (tg.disableVerticalSwipes) {
    tg.disableVerticalSwipes();
}

/* Цвета Telegram */
tg.setBackgroundColor('#151515');
tg.setHeaderColor('#151515');

/* Навигация */
document.querySelectorAll('.menu-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.screen).classList.add('active');
    });
});
