window.addEventListener("load", () => {

    /* =========================
       ELEMENT
    ========================= */

   const leftCharacter =
    document.querySelector(".side-character-left img");

const rightCharacter =
    document.querySelector(".side-character-right img");

const leftBubble =
    document.querySelector(".speech-left");

const rightBubble =
    document.querySelector(".speech-right");

let angle = 0;

function animate() {

    angle += 0.02;

    leftCharacter.style.transform =
        `translateY(${Math.sin(angle) * 15}px)`;

    rightCharacter.style.transform =
        `translateY(${Math.cos(angle) * 15}px)`;

    leftBubble.style.transform =
        `translateY(${Math.sin(angle) * 15}px)`;

    rightBubble.style.transform =
        `translateY(${Math.cos(angle) * 15}px)`;

    requestAnimationFrame(animate);
}

animate();

    /* =========================
       DIALOGUE DATABASE
    ========================= */

    const leftDialogues = [

        "RAZE. THE. VOID. GOD.",

        "You've met your fate.",

        "Come feed the endless void.",

        "I am the first and the last and the one to bring down all the rest."

    ];

    const rightDialogues = [

        "DO YOU SERIOUSLY MEAN TO BREAK THE SISYPHE SYSTEM?",

        "Come on, let a guy clock out on time for once.",

        "Systemwide Ban",

        "Atone before God... was it?"

    ];

    /* =========================
       RANDOM SYSTEM
    ========================= */

    let currentLeft = -1;
    let currentRight = -1;

    function randomIndex(max, current){

        let next;

        do{
            next = Math.floor(Math.random() * max);
        }
        while(next === current);

        return next;
    }

    /* =========================
       FADE CHANGE
    ========================= */

    function fadeChange(element, text){

        element.style.opacity = "0";

        setTimeout(() => {

            element.innerText = text;

            element.style.opacity = "1";

        }, 500);
    }

    /* =========================
       LEFT DIALOGUE
    ========================= */

    function changeLeftDialogue(){

        currentLeft =
            randomIndex(
                leftDialogues.length,
                currentLeft
            );

        fadeChange(
            leftBubble,
            leftDialogues[currentLeft]
        );
    }

    /* =========================
       RIGHT DIALOGUE
    ========================= */

    function changeRightDialogue(){

        currentRight =
            randomIndex(
                rightDialogues.length,
                currentRight
            );

        fadeChange(
            rightBubble,
            rightDialogues[currentRight]
        );
    }

    /* =========================
       INITIAL DIALOGUE
    ========================= */

    changeLeftDialogue();
    changeRightDialogue();

    /* =========================
       AUTO EVERY 1 MINUTE
    ========================= */

    setInterval(() => {

        changeLeftDialogue();
        changeRightDialogue();

    }, 60000);

    /* =========================
       CLICK TO CHANGE
    ========================= */

    leftCharacter.addEventListener("click", () => {

        changeLeftDialogue();

    });

    rightCharacter.addEventListener("click", () => {

        changeRightDialogue();

    });

});

const logo = document.getElementById("mainLogo");

let glowTime = 0;

function animateLogo(){

    glowTime += 0.03;

    const glow =
        20 + Math.sin(glowTime) * 15;

    logo.style.filter =
        `
        drop-shadow(0 0 ${glow}px #ffffff)
        drop-shadow(0 0 ${glow + 10}px #ffd700)
        drop-shadow(0 0 ${glow + 20}px #4da6ff)
        `;

    requestAnimationFrame(animateLogo);
}

animateLogo();

let secretCode = "";
const targetCode = "t4ylorb0mb";

document.addEventListener("keydown", (event) => {

    secretCode += event.key;

    if(secretCode.length > targetCode.length){

        secretCode =
            secretCode.slice(-targetCode.length);
    }

    if(secretCode === targetCode){

        activateSecret();
    }

});
function activateSecret(){

    const page =
        document.getElementById("secret-page");

    page.style.display = "flex";

    setTimeout(() => {

        page.style.opacity = "1";

    }, 10);
}
document.addEventListener("keydown", (event) => {

    console.log(event.key);

});
document.addEventListener("keydown", (event) => {

    exitCode += event.key.toLowerCase();

    if(exitCode.includes("thael")){

        deactivateSecret();

        exitCode = "";

    }

    if(exitCode.length > 30){

        exitCode = exitCode.slice(-30);

    }

});
let exitCode = "";

function deactivateSecret(){

    const page =
        document.getElementById("secret-page");

    page.style.opacity = "0";

    setTimeout(() => {

        page.style.display = "none";

    }, 500);
}
const exitButton =
    document.getElementById("exit-secret");

if(exitButton){

    exitButton.addEventListener("click", () => {

        deactivateSecret();

    });

}
function deactivateSecret(){

    const page =
        document.getElementById("secret-page");

    page.style.transition = "0.5s";
    page.style.opacity = "0";

    setTimeout(() => {

        page.style.display = "none";

    }, 500);
}
const loaderStatus = document.getElementById("loaderStatus");

/* =========================
   LOADING SCREEN
========================= */

(function () {

    const loadingScreen = document.getElementById("loading-screen");
    const loaderFill    = document.getElementById("loaderFill");
    const loaderPercent = document.getElementById("loaderPercent");
    const loaderStatus  = document.getElementById("loaderStatus");

    // kalau elemen loading tidak ada, jangan lakukan apa-apa
    if (!loadingScreen) {
        console.warn("Loading screen: elemen #loading-screen tidak ditemukan");
        return;
    }

    const statusMessages = [
        "Entering the Void...",
        "Into the endless Void...",
        "Systemwide Readjustment...",
        "Clocking out... almost...",
        "Falling into the Void..."
    ];

    document.body.classList.add("is-loading");

    let progress = 0;
    let finished = false;
    const startTime = Date.now();
    const minTime = 1500;

    function setProgress(value) {
        progress = value;

        if (loaderFill) loaderFill.style.width = progress + "%";
        if (loaderPercent) loaderPercent.textContent = Math.floor(progress) + "%";

        if (loaderStatus) {
            const index = Math.min(
                statusMessages.length - 1,
                Math.floor(progress / (100 / statusMessages.length))
            );
            loaderStatus.textContent = statusMessages[index];
        }
    }

    const progressTimer = setInterval(() => {
        if (progress < 90) {
            setProgress(progress + Math.random() * 5);
        }
    }, 100);

    function finishLoading() {
        if (finished) return;
        finished = true;

        clearInterval(progressTimer);
        setProgress(100);

        setTimeout(() => {
            loadingScreen.classList.add("hide");
            document.body.classList.remove("is-loading");
            setTimeout(() => loadingScreen.remove(), 800);
        }, 400);
    }

    function onPageLoaded() {
        const elapsed = Date.now() - startTime;
        setTimeout(finishLoading, Math.max(0, minTime - elapsed));
    }

    if (document.readyState === "complete") {
        onPageLoaded();
    } else {
        window.addEventListener("load", onPageLoaded);
    }

    // cadangan: tutup paksa setelah 8 detik
    setTimeout(finishLoading, 8000);

})();
/* =========================
   ASK ME ANYTHING
========================= */

(function () {

    function openModal() {
        const modal = document.getElementById("ask-modal");
        const frame = document.getElementById("askFrame");
        if (!modal) {
            console.warn("Ask Me Anything: elemen #ask-modal tidak ditemukan di HTML");
            return;
        }

        // iframe baru dimuat saat pertama kali dibuka
        if (frame && !frame.getAttribute("src")) {
            frame.setAttribute("src", frame.dataset.src);
        }

        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        const modal = document.getElementById("ask-modal");
        if (!modal) return;

        modal.classList.remove("open");
        document.body.style.overflow = "";
    }

    document.addEventListener("click", (e) => {
        const modal = document.getElementById("ask-modal");

        if (e.target.closest("#askBtn")) {
            openModal();
        } else if (e.target.closest("#askClose") || e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

})();
/* =========================
   CHARACTER HOVER + MODAL
========================= */

(function () {

    /* ---- DATA KARAKTER (edit di sini) ---- */
    const characters = {

        maurice: {
            name: "Maurice",
            series: "Ncorp",
            hover: "images/char1-hover.jpg",
            desc: "Let your sins define you within the Grand Magasin.\n                 Here in this place, sinners need only submit to the punishment imposed upon them.\nIf you feel even the slightest pang of conscience and remorse for killing your mother…\nThen surrender, for that is what you are duty-bound to feel as her son!\nThat is the burden of sin you must bear as a resident of N Corp.!",
            lore: "The Chaplain, at some point in the past, became one of the four Giants responsible for the maintenance of the Sisyphe System. Because of his role in the operation, he became familiar with Meursault's Mother, who insisted upon referring to the man by his title, rather than his name of Maurice. He viewed his responsibility as a manner of keeping the world from barbarism, which grew the sycophantic personality he was later known for. In the Grand Magasin Sisyphe, the Chaplain, under the avatar of the Warden, kept control of the flow of the Sisyphe System by punishing those who violated the set rules and tried to change its predetermined endings. Uniquely among the Giants, the Chaplain was responsible for the Sisyphe System's internal memories and time, giving him a key role in the System's Liquidations. Beyond this, the Chaplain was also the Giant who served as the Voice of Le Noir, inspiring the prisoners to safeguard the Magasin's status quo.",
            musicTitle: "Canto X Boss 4 Battle Theme - Studio EIM",
            music: "audio/maurice.mp3"
        },

        yan: {
            name: "Yan Vismok",
            series: "The Index",
            hover: "images/char2-hover.jpg",
            desc: "Prescripts are just meant to be followed. It's not a good idea to give extra meaning or have any sentiment for them...",
            lore: "Messenger of The Index, having only begun to work as one less than a month ago by the time of his first appearance. He first appears in the pre-battle dialog for The Carnival. Ultimately, Yan turns into a Distortion known as 얀샋ㄷ요무 (cipher for Distorted Yan). This originated from his feelings of powerlessness after having seen the truth of the Prescripts, and even after conspiring directly against them by making forgeries of Prescripts, new ones were created from his own, as if they were intended to be created after all. With this, Yan realizes that his own will and the City's are the one and the same, and thus, he has no will of his own. This causes him to blindly turn to the Prescripts for guidance, becoming the one thing he despised the most.",
            musicTitle: "Children of the City - Mili",
            music: "audio/yan.mp3"
        },

        vergil: {
            name: "Vergil",
            series: "Devil May Cry",
            hover: "images/vergil-hover.jpg",
            desc: "Foolishness, Dante. Foolishness... Might controls everything—and without strength, you cannot protect anything. Let alone yourself.",
            lore: "the older twin brother of Dante and one of the main antagonists of the Devil May Cry franchise. Following the death of their mother as children, Vergil and Dante went their separate ways, with Vergil rejecting his humanity and embracing his demonic heritage, in contrast with his younger brother's embrace of humanity and initial rejection of the demonic. Stoic and reserved, Vergil displays a willingness to do anything in his quest to obtain the power of his father, Sparda. Suffering defeat in confrontation with Mundus in the secret ending to Devil May Cry 3, he is tortured and transformed into the Black Knight – being encountered in Devil May Cry under the name Nelo Angelo. After numerous conflicts throughout the game, he is finally defeated by Dante.",
            musicTitle: "Bury the Light - Casey Edwards",
            music: "audio/vergil.mp3"
        },

        thael: {
            name: "Thael",
            series: "TBBF",
            hover: "images/char4-hover.jpg",
            desc: "...Hmph. I'm not nearly as defenseless as you think. But you know the real petty?As soon as you figure that out, who would be left to stop me from continuing my rampage?",
            lore: "Thael is the final boss for the Winter 2023 event. He[1] speaks to the towers and Spiritual Advocate throughout the game, and sits on his throne inside the colosseum which the towers arrive to at Wave 15. He has multiple abilities that he uses in his efforts to kill his former student, the Spiritual Advocate NPC, for betraying him and leading the Towers to stop him.",
            musicTitle: "「battle2 - arrange -」 - SQUARE ENIX MUSIC",
            music: "audio/thael.mp3"
        },

        ennard: {
            name: "Ennard",
            series: "FNAF",
            hover: "images/char5-hover.jpg",
            desc: "There's a little piece of me in everybody",
            lore: "Ennard is made out of the five main animatronics in Circus Baby's Entertainment and Rental (Circus Baby, Ballora, Funtime Freddy, Bon-Bon, and Funtime Foxy), as well as the clown mask from the Primary Control Module (evident from its disappearance in Night 5). Ennard has a bulky yet noticeably humanoid build. He also has long, null teeth that are similar to Ballora's endoskeleton. His head shape, beside the mask, is taken from Ballora. Wires hang from his mouth, similar to the appearance of drool. Ennard has a few eyes attached to his body, each one belonging to one of the five core animatronics, except for Funtime Freddy, who has two eyes. In Five Nights at Freddy's: Help Wanted 2, Ennard's two primary eyes are now blue while the rest of his eyes are now yellow.",
            musicTitle: "Circus of the dead - tryhadninja",
            music: "audio/ennard.mp3"
        },

        penumbra: {
            name: "Penumbra",
            series: "TDS",
            hover: "images/char6-hover.jpg",
            desc: "Your strength is admirable. However, I will not fall to one who is not worthy to be graced by her presence! If I fall here, I will never be able to tell her..- Huh?! You heard n-nothing! Take this, you fiend!",
            lore: "The Penumbras was the final boss of the third night in the Solar Eclipse Event. It had a large amount of health and a very slow speed. It had two abilities. Its first ability was Solar Spawn, which spawned five to eight random enemies. These could be the Cursed Guard, Cursed Knight, Lunar Shard or Solar Shard. Its second ability, Shard Toss, made the Penumbras throw shards at towers, creating an explosion, stunning towers caught on him.",
            musicTitle: "Gatekeeper - Phoqus",
            music: "audio/penumbra.mp3"
        }

    };

    const cards = document.querySelectorAll(".character-card .grid-item[data-char]");

    /* ---- HOVER: GANTI FOTO ---- */
    cards.forEach((card) => {

        const data = characters[card.dataset.char];
        const img  = card.querySelector("img");
        if (!data || !img) return;

        const originalSrc = img.getAttribute("src");
        let timer;

        // muat foto hover lebih awal supaya tidak berkedip
        if (data.hover) {
            const preload = new Image();
            preload.src = data.hover;
        }

        function swap(src) {
            if (!data.hover) return;
            clearTimeout(timer);
            img.style.opacity = "0";
            timer = setTimeout(() => {
                img.setAttribute("src", src);
                img.style.opacity = "1";
            }, 200);
        }

        card.addEventListener("mouseenter", () => swap(data.hover));
        card.addEventListener("mouseleave", () => swap(originalSrc));
        card.addEventListener("click", () => openCharacter(card.dataset.char, originalSrc));
    });

    /* ---- MODAL ---- */
    function openCharacter(key, mainSrc) {

        const data = characters[key];
        const modal = document.getElementById("char-modal");
        if (!data || !modal) return;

        document.getElementById("charImg").src = mainSrc;
        document.getElementById("charImg").alt = data.name;
        document.getElementById("charName").textContent = data.name;
        document.getElementById("charSeries").textContent = data.series;
        document.getElementById("charDesc").textContent = data.desc;
        document.getElementById("charLore").textContent = data.lore;

        const musicBox = document.getElementById("charMusic");
        const audio    = document.getElementById("charAudio");

        resetMusic();
        document.getElementById("charMusicError").textContent = "";

        if (data.music) {
            musicBox.style.display = "flex";
            document.getElementById("charMusicTitle").textContent = data.musicTitle || "";
            audio.setAttribute("src", data.music);
        } else {
            musicBox.style.display = "none";
            audio.removeAttribute("src");
        }

        modal.classList.add("open");
        document.body.style.overflow = "hidden";
        setTimeout(() => modal.classList.add("show"), 10);
    }

    function closeCharacter() {

        const modal = document.getElementById("char-modal");
        if (!modal || !modal.classList.contains("open")) return;

        resetMusic();
        modal.classList.remove("show");
        document.body.style.overflow = "";

        setTimeout(() => modal.classList.remove("open"), 300);
    }

    /* ---- MUSIK ---- */
    function resetMusic() {
        const audio = document.getElementById("charAudio");
        const btn   = document.getElementById("charPlay");
        if (!audio || !btn) return;

        audio.pause();
        audio.currentTime = 0;
        btn.classList.remove("playing");
        btn.textContent = "▶ Play Theme";
    }

    document.addEventListener("click", (e) => {

        const modal = document.getElementById("char-modal");

        if (e.target.closest("#charClose") || e.target === modal) {
            closeCharacter();
            return;
        }

        if (e.target.closest("#charPlay")) {

            const audio = document.getElementById("charAudio");
            const btn   = document.getElementById("charPlay");
            const error = document.getElementById("charMusicError");

            error.textContent = "";

            if (audio.paused) {
                audio.play()
                    .then(() => {
                        btn.classList.add("playing");
                        btn.textContent = "⏸ Pause";
                    })
                    .catch(() => {
                        error.textContent = "File musik tidak ditemukan atau gagal diputar.";
                    });
            } else {
                audio.pause();
                btn.classList.remove("playing");
                btn.textContent = "▶ Play Theme";
            }
        }
    });

    const charAudio = document.getElementById("charAudio");
    if (charAudio) {
        charAudio.addEventListener("ended", resetMusic);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeCharacter();
    });

})();