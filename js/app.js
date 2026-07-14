// Loader

window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }
    }, 1400);
});

// Music

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

async function playMusic() {
    if (!music || !musicBtn || playing) {
        return;
    }

    try {
        await music.play();
        musicBtn.textContent =
            "■ إيقاف الموسيقى";
        musicBtn.setAttribute("aria-label", "إيقاف الموسيقى");
        playing = true;
    } catch {
        musicBtn.textContent =
            "تعذر تشغيل الموسيقى";
    }
}

function pauseMusic() {
    if (!music || !musicBtn) {
        return;
    }

    music.pause();
    musicBtn.textContent =
        "♪ تشغيل الموسيقى";
    musicBtn.setAttribute("aria-label", "تشغيل الموسيقى");
    playing = false;
}

if (musicBtn) {
    musicBtn.onclick = async () => {
        if (!playing) {
            await playMusic();
            return;
        }

        pauseMusic();
    };
}

// Open Book

const openBookBtn =
    document.getElementById("openBook");

const book =
    document.getElementById("book");

if (openBookBtn && book) {
    openBookBtn.onclick = async () => {
        book.classList.remove("hidden");

        book.scrollIntoView({
            behavior: "smooth"
        });

        revealPages();
        await playMusic();
    };
}

// Countdown

const weddingDate =
    new Date("2026-07-27T19:00:00+03:00");

const countdown =
    document.querySelector(".countdown");

const countdownDone =
    document.getElementById("countdownDone");

function setCountdownValue(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent =
            String(value).padStart(2, "0");
    }
}

function updateCountdown() {
    if (!countdown || !countdownDone) {
        return;
    }

    const now = new Date();
    const diff = weddingDate - now;

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
    if (!book || book.classList.contains("hidden")) {
        return;
    }

    pages.forEach(page => {
        const top =
            page
                .getBoundingClientRect()
                .top;

        if (top < window.innerHeight - 100) {
            page.classList.add("show");
        }
    });
}

window.addEventListener(
    "scroll",
    revealPages
);

revealPages();

// Floating Stars

setInterval(() => {
    const star =
        document.createElement("div");

    star.textContent = "✦";
    star.className = "floating-heart";

    star.style.left =
        Math.random() * 100 + "vw";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}, 2500);
