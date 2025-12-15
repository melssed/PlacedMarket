const tg = window.Telegram.WebApp;
tg.expand();

const ALLOWED_ID = 651824873;

const user = tg.initDataUnsafe?.user;

if (!user || user.id !== ALLOWED_ID) {
    document.getElementById("blocked").classList.remove("hidden");
} else {
    document.getElementById("app").classList.remove("hidden");

    document.getElementById("name").textContent =
        user.first_name + (user.last_name ? " " + user.last_name : "");

    if (user.photo_url) {
        document.getElementById("avatar").src = user.photo_url;
    }
}

function openTab(tab) {
    const content = document.getElementById("content");

    if (tab === "market") {
        content.innerHTML = "<h3>🛒 Market</h3><p>Список товаров</p>";
    }
    if (tab === "items") {
        content.innerHTML = "<h3>💎 Items</h3><p>Ваши предметы</p>";
    }
    if (tab === "profile") {
        content.innerHTML = "<h3>👤 Profile</h3><p>Ваш профиль</p>";
    }
    if (tab === "settings") {
        content.innerHTML = "<h3>⚙️ Settings</h3><p>Настройки</p>";
    }
}
