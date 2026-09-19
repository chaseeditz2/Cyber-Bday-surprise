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

# /*

# PUZZLES

*/

const puzzles = [

```
{
    title: "The Curtain Rises",

    description: `
        <p>
            The theater is completely dark.
        </p>

        <p>
            An old program has been left on the stage.
        </p>

        <div class="puzzle-box">

            <p><strong>T</strong>he house lights fade into darkness.</p>

            <p><strong>I</strong>nside the theater, nobody speaks.</p>

            <p><strong>M</strong>ysterious footsteps echo backstage.</p>

            <p><strong>E</strong>very clock has stopped.</p>

        </div>

        <p>
            Something about these lines seems important.
        </p>

        <p class="hint-text">
            Loki's clue:
            "Sometimes the beginning tells you everything."
        </p>
    `,

    answer: "TIME"
},


{
    title: "Storm Warning",

    description: `
        <p>
            The storm radar is beginning to light up.
        </p>

        <div class="puzzle-box">

            <p>🟢 = 2</p>
            <p>🟡 = 7</p>
            <p>🔴 = 4</p>

            <hr>

            <p>
                The radar shows:
            </p>

            <h2>
                🟡 → 🔴 → 🟢
            </h2>

            <p>
                What three-number code does the storm give you?
            </p>

        </div>

        <p class="hint-text">
            Hint: Follow the storm symbols from left to right.
        </p>
    `,

    answer: "742"
},


{
    title: "Intercepted Transmission",

    description: `
        <p>
            A radio transmission has been intercepted.
        </p>

        <div class="puzzle-box">

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

            <hr>

            <p>
                What device is carrying this transmission?
            </p>

        </div>
    `,

    answer: "RADIO"
},


{
    title: "Loki's Trick",

    description: `
        <p>
            A green message appears across the screen.
        </p>

        <div class="puzzle-box">

            <p>
                I am a trickster.
            </p>

            <p>
                I am from Asgard.
            </p>

            <p>
                I have horns in many stories.
            </p>

            <p>
                Who am I?
            </p>

        </div>
    `,

    answer: "LOKI"
},


{
    title: "Lightning Strike",

    description: `
        <p>
            The storm flashes.
        </p>

        <div class="puzzle-box">

            <p>
                ⚡ It appears before the thunder.
            </p>

            <p>
                ⚡ It can illuminate the entire sky.
            </p>

            <p>
                ⚡ Storm chasers watch for it.
            </p>

            <p>
                What is it?
            </p>

        </div>
    `,

    answer: "LIGHTNING"
},


{
    title: "Backstage",

    description: `
        <p>
            The theater doors are locked.
        </p>

        <p>
            The actors aren't on stage.
        </p>

        <div
```
