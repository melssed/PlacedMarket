// Telegram fullscreen
if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
    Telegram.WebApp.disableClosingConfirmation();
}

// Navigation
const buttons = document.querySelectorAll('.menu-item');
const screens = document.querySelectorAll('.screen');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.screen;

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        screens.forEach(s => {
            s.classList.remove('active');
            if (s.id === target) s.classList.add('active');
        });
    });
});
