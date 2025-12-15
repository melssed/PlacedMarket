const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

if (tg.disableVerticalSwipes) {
    tg.disableVerticalSwipes();
}

tg.setBackgroundColor('#151515');
tg.setHeaderColor('#151515');

/* Переключение экранов */
document.querySelectorAll('.menu-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.screen).classList.add('active');
    });
});
