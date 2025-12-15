if (window.Telegram?.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
    Telegram.WebApp.disableVerticalSwipes();
}

const buttons = document.querySelectorAll('.menu-item');
const screens = document.querySelectorAll('.screen');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.screen;

        buttons.forEach(b => b.classList.remove('active'));
        screens.forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});
