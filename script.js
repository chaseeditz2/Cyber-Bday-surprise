/* =========================================================
CYBERWALL BIRTHDAY ESCAPE ROOM
========================================================= */

const letters = [

```
{
    name: "Advert",
    role: "Public Rep",
    body: "Ich feiere unser joyeux anniversaire ভাই",
    signoff: "-Advert"
},

{
    name: "Chaseuu",
    role: "Co Owner",
    body: "Happy Birthday Cyber! I hope you have a great birthday and I am grateful for the honor to run Escalation along with you and to be ur friend even if we haven't met yet.",
    signoff: "-Chaseuu"
},

{
    name: "Graysen",
    role: "Senior Moderator",
    body: "Merry bday cyber boy (please let me out of the basement)",
    signoff: "- Graysen"
},

{
    name: "Raven",
    role: "Moderator",
    body: "Happy Birthday Cyberwall! I hope you have an amazing birthday and an even better year ahead. Thank you for everything you do for the community!",
    signoff: "-𝓡𝓪𝓿𝓮𝓷"
},

{
    name: "Chicken",
    role: "Escalation Member",
    body: "HAPPY BIRTHDAY LIL CYBER",
    signoff: "- Chicken"
},

{
    name: "Zariuswx",
    role: "Escalation Member",
    body: "Happy birthday Cyberwall I wish you a great birthday, I also hope you get to have the best birthday dinner",
    signoff: "- Zariuswx"
},

{
    name: "Volcanic Ash",
    role: "Escalation Edit Comp Winner",
    body: "Joyeux anniversaire Cyberwall ! Je te souhaite une excellente journée et beaucoup de bonheur pour cette nouvelle année !",
    signoff: "- ashmaker"
},

{
    name: "Cyber",
    role: "Senior Developer",
    body: "Happy birthday Cyberwall! I hope you have an amazing day. Thank you for everything you've done for Escalation and for the community. I hope this next year brings you a lot of good memories!",
    signoff: "- Cyber"
},

{
    name: "justanuser3",
    role: "Administrator",
    body: "Happy birthday Cyberwall! Hope you have an amazing birthday. Bayern Munich better win for you today.",
    signoff: "- justanuser3"
},

{
    name: "KINGbananaMan3",
    role: "Head Developer",
    body: "Happy birthday Cyberman sam, can i come to your party pretty please",
    signoff: "- KINGbananaMan3"
},

{
    name: "DADAMAN",
    role: "Special Member",
    body: "HAPPY BIRTHDAY CYBERWALL!!! I HOPE YOU HAVE THE BEST BIRTHDAY EVER!!! YOU DESERVE AN AMAZING DAY!!!",
    signoff: "- YOUR BFF DADAMAN"
},

{
    name: "Mystery Staff Member",
    role: "N/A — Is in Staff",
    body: `Dear mr cyberballs,
```

Happy birthday!! I hope you have an absolutely amazing birthday and an even better year ahead. You've built something that brought a lot of people together, and I'm genuinely glad I got to be a part of it.

Keep being yourself, keep creating, and keep making Escalation what it is. I hope this next year brings you plenty of good memories, good friends, and many more storms to chase.

Figure it out Cyber`,
signoff: "Figure it out Cyber"
},

```
{
    name: "Peachybabo",
    role: "Moderator",
    body: `Happy birthday Cyberwall! I really appreciate everything you have done for Escalation and the community. It's been awesome being able to work alongside everyone and watch everything continue to grow.
```

I hope you have a wonderful birthday and get to spend it with the people who mean the most to you.

As Eleanor Roosevelt said, 'The future belongs to those who believe in the beauty of their dreams.' Keep chasing yours.`,
signoff: "- Peachybabo"
},

```
{
    name: "KYB3RRX",
    role: "Senior Moderator",
    body: "Happy Birthday Cyber! I hope you have a great day and an amazing year. Thank you for everything you do for the community and for helping make Escalation what it is today.",
    signoff: "-KYB3RRX"
},

{
    name: "Spyshark4",
    role: "Moderator",
    body: "Happy birthday Cyberwall! I hope you have an amazing birthday and get plenty of opportunities to do what you enjoy. Keep chasing those tornadoes and making awesome things!",
    signoff: "-Spyshark4"
}
```

];

/* =========================================================
ACT INFORMATION
========================================================= */

const acts = [

```
{
    title: "The Curtain Rises",
    description: "The theater has gone dark.",
    password: "TIME"
},

{
    title: "Storm Warning",
    description: "A strange storm has appeared on the radar.",
    password: "RADAR"
},

{
    title: "Intercepted Transmission",
    description: "Someone is broadcasting from inside the storm.",
    password: "RADIO"
},

{
    title: "Loki's Trick",
    description: "A familiar green signature has appeared.",
    password: "LOKI"
},

{
    title: "Lightning Strike",
    description: "Something just flashed across the sky.",
    password: "LIGHTNING"
},

{
    title: "Backstage",
    description: "Something is hiding behind the curtain.",
    password: "BACKSTAGE"
},

{
    title: "Timeline Fracture",
    description: "Reality is beginning to split.",
    password: "VARIANT"
},

{
    title: "Into the Storm",
    description: "The eye of the storm is approaching.",
    password: "STORM"
},

{
    title: "The Missing Scene",
    description: "A page has been removed from the script.",
    password: "SCRIPT"
},

{
    title: "Variant Detected",
    description: "There may be more than one Loki.",
    password: "GREEN"
},

{
    title: "Eye of the Storm",
    description: "Everything has suddenly gone quiet.",
    password: "EYE"
},

{
    title: "Final Warning",
    description: "The storm is reaching maximum intensity.",
    password: "WARNING"
},

{
    title: "The Last Act",
    description: "The theater lights are beginning to fade.",
    password: "ACT13"
},

{
    title: "The Timeline Collapses",
    description: "One final lock stands between you and the ending.",
    password: "TIMELINE"
},

{
    title: "Cyberwall's Birthday",
    description: "The final message is waiting.",
    password: "CYBERWALL"
}
```

];

/* =========================================================
PROGRESS
========================================================= */

let unlocked = JSON.parse(
localStorage.getItem("cyberwallProgress") || "[]"
);

/* =========================================================
BUILD ACTS
========================================================= */

function buildActs() {

```
const grid =
    document.getElementById("actGrid");

grid.innerHTML = "";


acts.forEach((act, index) => {

    const isUnlocked =
        unlocked.includes(index);


    const previousComplete =
        index === 0 ||
        unlocked.includes(index - 1);


    const card =
        document.createElement("div");


    card.className =
        "act " +
        (isUnlocked ? "unlocked" : "locked");


    card.innerHTML = `

        <div class="act-number">
            ACT ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="lock">
            ${isUnlocked ? "🔓" : "🔒"}
        </div>

        <h3>
            ${act.title}
        </h3>

        <p>
            ${act.description}
        </p>

        <button>
            ${isUnlocked ? "READ MESSAGE" : "INVESTIGATE"}
        </button>

    `;


    card
        .querySelector("button")
        .addEventListener(
            "click",
            () => openAct(index)
        );


    grid.appendChild(card);

});


updateProgress();
```

}

/* =========================================================
OPEN ACT
========================================================= */

function openAct(index) {

```
const isUnlocked =
    unlocked.includes(index);


if (isUnlocked) {

    showLetter(index);

    return;

}


const previousComplete =
    index === 0 ||
    unlocked.includes(index - 1);


if (!previousComplete) {

    alert(
        "🔒 TIMELINE LOCKED\n\n" +
        "You must recover the previous message first."
    );

    return;

}


showPuzzle(index);
```

}

/* =========================================================
PUZZLES
========================================================= */

function showPuzzle(index) {

```
const act =
    acts[index];


let clue = "";


switch(index) {

    case 0:

        clue = `
            <p>
                An old theater program has been left
                on the stage.
            </p>

            <div class="puzzle">

                <p><b>T</b>he house lights fade into darkness.</p>
                <p><b>I</b>nside the theater, nobody speaks.</p>
                <p><b>M</b>ysterious footsteps echo backstage.</p>
                <p><b>E</b>very clock has stopped.</p>

            </div>

            <p>
                Loki wouldn't make it THAT obvious...
                would he?
            </p>
        `;

        break;


    case 1:

        clue = `
            <p>
                The radar screen is showing strange activity.
            </p>

            <div class="puzzle">

                <p>
                    🟢 Weak storm
                </p>

                <p>
                    🟡 Strong storm
                </p>

                <p>
                    🔴 Tornadic storm
                </p>

                <br>

                <p>
                    The storm symbols appear in this order:
                </p>

                <h2>
                    🟡 → 🔴 → 🟢
                </h2>

                <p>
                    Their values are:
                </p>

                <p>
                    🟢 = 2
                    <br>
                    🟡 = 7
                    <br>
                    🔴 = 4
                </p>

                <p>
                    Enter the resulting code.
                </p>

            </div>
        `;

        break;


    case 2:

        clue = `
            <p>
                A radio transmission has been intercepted.
            </p>

            <div class="puzzle">

                <p>
                    📻 "Rotation confirmed."
                </p>

                <p>
                    📻 "Storm strengthening."
                </p>

                <p>
                    📻 "Transmission continuing."
                </p>

                <p>
                    📻 "Radio contact required."
                </p>

                <br>

                <p>
                    What device is being used?
                </p>

            </div>
        `;

        break;


    default:

        clue = `
            <p>
                Loki has hidden this puzzle deeper
                inside the timeline.
            </p>

            <p>
                <i>
                    This puzzle is still under construction.
                </i>
            </p>
        `;

}


const answer =
    promptPuzzle(
        index,
        clue
    );
```

}

/* =========================================================
PUZZLE INPUT
========================================================= */

function promptPuzzle(index, clue) {

```
const answer =
    prompt(
        "ACT " +
        (index + 1) +
        "\n\n" +
        "Solve the puzzle and enter the answer:"
    );


if (answer === null) {

    return;

}


const cleaned =
    answer
        .trim()
        .toUpperCase();


if (
    cleaned ===
    acts[index].password
) {

    unlockAct(index);

}

else {

    alert(
        "❌ INCORRECT\n\n" +
        "The timeline rejects your answer."
    );

}
```

}

/* =========================================================
UNLOCK
========================================================= */

function unlockAct(index) {

```
if (
    !unlocked.includes(index)
) {

    unlocked.push(index);

}


localStorage.setItem(
    "cyberwallProgress",
    JSON.stringify(unlocked)
);


buildActs();


showLetter(index);
```

}

/* =========================================================
SHOW LETTER
========================================================= */

function showLetter(index) {

```
const letter =
    letters[index];


const panel =
    document.getElementById(
        "letterPanel"
    );


const content =
    document.getElementById(
        "letterContent"
    );


content.innerHTML = `

    <div class="letter-header">

        <div class="case-header">
            MESSAGE RECOVERED
        </div>

        <h2>
            💌 ${escapeHTML(letter.name)}
        </h2>

        <div class="letter-role">
            ${escapeHTML(letter.role)}
        </div>

    </div>


    <div class="letter-body">

        ${escapeHTML(letter.body)}

    </div>


    <div class="signature">

        ${escapeHTML(letter.signoff)}

    </div>

`;


panel.classList.remove(
    "hidden"
);


panel.scrollIntoView({
    behavior: "smooth"
});


updateProgress();
```

}

/* =========================================================
PROGRESS
========================================================= */

function updateProgress() {

```
const amount =
    unlocked.length;


const percentage =
    (amount / 15) * 100;


document
    .getElementById(
        "progressBar"
    )
    .style.width =
    percentage + "%";


document
    .getElementById(
        "progressText"
    )
    .textContent =
    amount +
    " / 15 MESSAGES RECOVERED";


if (
    amount === 15
) {

    document
        .getElementById(
            "finalMessage"
        )
        .classList.remove(
            "hidden"
        );

}
```

}

/* =========================================================
SECURITY / DISPLAY HELPER
========================================================= */

function escapeHTML(text) {

```
return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
```

}

/* =========================================================
START
========================================================= */

buildActs();
updateProgress();
