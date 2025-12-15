const buttons = document.querySelectorAll('.menu-item');
const screens = document.querySelectorAll('.screen');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.screen;

        buttons.forEach(b => b.classList.remove('active'));
        screens.forEach(s => s.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// Telegram Mini App
if (window.Telegram?.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
}
