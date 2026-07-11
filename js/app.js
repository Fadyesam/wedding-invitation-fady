// Loader

window.addEventListener("load", () => {
    setTimeout(() => {
        document
            .getElementById("loader")
            .classList
            .add("hide");
    }, 2000);
});

// Open Book

document
    .getElementById("openBook")
    .onclick = () => {

    document
        .getElementById("book")
        .classList
        .remove("hidden");

    document
        .getElementById("book")
        .scrollIntoView({
            behavior: "smooth"
        });
};

// Music

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

    if (!playing) {
        music.play();
        musicBtn.innerHTML =
            "🔇 إيقاف الموسيقى";
    } else {
        music.pause();
        musicBtn.innerHTML =
            "🎵 تشغيل الموسيقى";
    }

    playing = !playing;
};

// Countdown

const weddingDate =
    new Date("2026-07-27T19:00:00");

function updateCountdown() {

    const now = new Date();

    const diff =
        weddingDate - now;

    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            diff /
            (1000 * 60 * 60)
        ) % 24;

    const minutes =
        Math.floor(
            diff /
            (1000 * 60)
        ) % 60;

    const seconds =
        Math.floor(
            diff /
            1000
        ) % 60;

    document.getElementById("days")
        .innerHTML = days;

    document.getElementById("hours")
        .innerHTML = hours;

    document.getElementById("minutes")
        .innerHTML = minutes;

    document.getElementById("seconds")
        .innerHTML = seconds;
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);

// Scroll Animation

const pages =
    document.querySelectorAll(".page");

function revealPages() {

    pages.forEach(page => {

        const top =
            page
            .getBoundingClientRect()
            .top;

        if (top <
            window.innerHeight - 100) {

            page.classList.add("show");
        }
    });
}

window.addEventListener(
    "scroll",
    revealPages
);

revealPages();

// Hearts Effect

setInterval(() => {

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position =
        "fixed";

    heart.style.left =
        Math.random() * 100 +
        "vw";

    heart.style.top =
        "100vh";

    heart.style.fontSize =
        "20px";

    heart.style.zIndex = 999;

    document.body.appendChild(
        heart
    );

    let pos = 100;

    const timer =
        setInterval(() => {

            pos--;

            heart.style.top =
                pos + "vh";

            if (pos < -10) {

                clearInterval(timer);

                heart.remove();
            }

        }, 50);

}, 3000);