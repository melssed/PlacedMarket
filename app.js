const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

/* 🔒 ЖЕСТКО запрещаем закрытие свайпом */
if (tg.disableVerticalSwipes) {
    tg.disableVerticalSwipes();
}

/* 🔒 Полный запрет скролла */
document.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

/* Навигация */
const screens = document.querySelectorAll('.screen');
const buttons = document.querySelectorAll('.menu-item');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.screen;

        screens.forEach(s => s.classList.remove('active'));
        buttons.forEach(b => b.classList.remove('active'));

        document.getElementById(id).classList.add('active');
        btn.classList.add('active');
    });
});
