const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

if (tg.disableVerticalSwipes) {
    tg.disableVerticalSwipes();
}

document.addEventListener(
    'touchmove',
    e => e.preventDefault(),
    { passive: false }
);

['gesturestart', 'gesturechange', 'gestureend']
    .forEach(evt =>
        document.addEventListener(evt, e => e.preventDefault())
    );
