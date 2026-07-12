// Loader

window.addEventListener("load", () => {
    setTimeout(() => {
        document
            .getElementById("loader")
            .classList
            .add("hide");
    }, 1400);
});

// Open Book

document
    .getElementById("openBook")
    .onclick = async () => {

    const book =
        document.getElementById("book");

    book
        .classList
        .remove("hidden");

    book
        .scrollIntoView({
            behavior: "smooth"
        });

    revealPages();
    await playMusic();
};

// Music

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

async function playMusic() {
    if (playing) {
        return;
    }

    try {
        await music.play();
        musicBtn.innerHTML =
            "■ إيقاف الموسيقى";
        musicBtn.setAttribute("aria-label", "إيقاف الموسيقى");
        playing = true;
    } catch {
        musicBtn.innerHTML =
            "تعذر تشغيل الموسيقى";
    }
}

function pauseMusic() {
    music.pause();
    musicBtn.innerHTML =
        "♪ تشغيل الموسيقى";
    musicBtn.setAttribute("aria-label", "تشغيل الموسيقى");
    playing = false;
}

musicBtn.onclick = async () => {

    if (!playing) {
        await playMusic();
        return;
    }

    pauseMusic();
};

// Countdown

const weddingDate =
    new Date("2026-07-27T19:00:00+03:00");

const countdown =
    document.querySelector(".countdown");

const countdownDone =
    document.getElementById("countdownDone");

function setCountdownValue(id, value) {
    document.getElementById(id).textContent =
        String(value).padStart(2, "0");
}

function updateCountdown() {

    const now = new Date();

    const diff =
        weddingDate - now;

    if (diff <= 0) {
        countdown.classList.add("hidden");
        countdownDone.classList.remove("hidden");
        return;
    }

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

    setCountdownValue("days", days);
    setCountdownValue("hours", hours);
    setCountdownValue("minutes", minutes);
    setCountdownValue("seconds", seconds);
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

    if (document
        .getElementById("book")
        .classList
        .contains("hidden")) {
        return;
    }

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

    heart.innerHTML = "❤";
    heart.className = "floating-heart";

    heart.style.left =
        Math.random() * 100 +
        "vw";

    document.body.appendChild(
        heart
    );

    setTimeout(() => {
        heart.remove();
    }, 5200);

}, 3000);
