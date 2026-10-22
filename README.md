# Exam Practice Sets

A single-page, offline exam practice app with **5 sets × 125 questions** (MCQ, MSQ and NAT) covering Python, Data/SQL/EDA, Regression & ML, and GenAI & RAG. Difficulty rises from Set 1 (Easy) to Set 5 (Hard).

## Features

- 5 sets, each with 4 stages (A: Python Foundations, B: Data/SQL/EDA, C: Regression & ML, D: GenAI & RAG)
- Question types: MCQ (single answer), MSQ (multiple answers), NAT (numerical answer)
- **Shuffled on every attempt**: questions are reordered inside each stage and answer options are reordered every time you start or retry a set
- Instant feedback, "Show answer", per-stage question navigator, progress bar and live score
- **Gmail sign-up / log-in** (browser-only accounts, passwords hashed with PBKDF2 + random salt)
- **Attempt tracking per account**: every *Submit All* counts as one attempt; the home screen shows attempts and best score per set, and a **History** page lists every attempt (date, set, correct/wrong/skipped, score)
- **Profiles**: auto-generated sequential UID (10000001, 10000002, …), name, bio, round profile photo (choose a picture, crop it in a circle, then set; or remove), Instagram, WhatsApp, GitHub, LinkedIn, Facebook and up to 5 custom links
- **User search** (like Instagram): type a Gmail, name or UID and open that person's profile
- **Change password** and **Show / Hide** buttons on every password field
- **Water effects** (movement only, no colours added or changed; disabled for reduced-motion users): a quick tap splashes a watery ripple and shakes the page for 0.5s from the touch point (nothing runs when you start scrolling, so scrolling stays fast and smooth); **press and hold for 5 seconds** and the page blasts, then flows like water before settling. Moving your finger/mouse (scrolling, dragging) cancels the long press.
- Keyboard shortcuts

## Project structure

```
exam-prep/
├── index.html   # page structure
├── style.css    # styles
├── script.js    # question bank + quiz logic
├── README.md
└── .gitignore
```

## Run it

No build step or dependencies. Open `index.html` in any modern browser.

Optional local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `A` – `E` | Pick an option (MCQ / MSQ) |
| `←` `→` | Previous / next question |
| `Enter` | Check answer (MSQ / NAT) |
| `S` | Show answer |

## How shuffling works

`startSet()` calls `buildShuffledSet()` in `script.js`, which:

1. Shuffles the questions within each stage (Fisher–Yates), keeping stages in A → D order.
2. Shuffles the options of each MCQ/MSQ and remaps the correct-answer indexes.
3. Leaves options in place for questions whose choices depend on position (e.g. "Both ... " or "All of the above"), and never shuffles NAT questions.

The original data in `SETS` is never modified, so each retry gets a fresh order.

## Adding or editing questions

Questions live in the `SETS` object in `script.js`:

```js
{s:"A", type:"mcq", q:"Question text", o:["opt1","opt2","opt3","opt4"], c:1}      // c = index of correct option
{s:"A", type:"msq", q:"Question text", o:["a","b","c","d"], c:[0,2,3]}              // c = array of correct indexes
{s:"A", type:"nat", q:"Question text", c:"16"}                                      // c = answer as a string
```

`s` is the stage letter (`A`–`D`). Avoid options like "Both ..." or "All of the above" unless you want them kept in fixed positions (the shuffler detects them automatically).

## Accounts & history

- Sign up with a `@gmail.com` address and a password (min. 6 characters). The session is remembered until you press **Logout**.
- Data lives in this browser's `localStorage` (`examUsers`, `examSession`). There is no server, so accounts do **not** sync across browsers/devices, and clearing site data removes them. This is also not secure authentication for sensitive data; for real cross-device accounts, connect a backend such as Firebase Auth + Firestore.
- An attempt is counted when you press **Submit All** (at least one answered question required), once per run.
- Use **History → Clear history** to delete your attempts.

## Profile, UID and search

- Every new account gets the next UID in order, starting at `10000001`. Accounts created before this feature are numbered by sign-up date the first time the page loads.
- **Profile** (button on the home screen, or click your name): edit name, bio, social handles (or full profile URLs), WhatsApp number with country code, and custom links. Links are validated; only `http(s)` URLs are accepted.
- **Photo**: *Set photo* opens a round crop window. Drag to move, zoom with the slider or mouse wheel, then press *Set photo*. The result is saved as a 400×400 image in the browser and shown as a circle everywhere. *Remove photo* deletes it.
- **Change password** needs your current password and a new one of at least 6 characters.
- **Search**: type at least 2 characters of a Gmail, name or UID. Results show name, UID and a masked email (`a***@gmail.com`); opening one shows that person's bio, links, attempts and best score. Search only finds accounts created in the same browser, because there is no server.

## Mobile & touch support

- Layout adapts to phones and tablets (portrait and landscape), including notches and the home-indicator area.
- Touch targets are at least 44px; inputs use 16px text so iOS does not zoom in; NAT questions open the numeric keyboard and *Go/Done* checks the answer.
- Quiz screen: sticky top bar (Home · title · score · Submit All), swipeable stage tabs, and a sticky bottom bar with Show answer / Previous / Next.
- **Swipe left/right** on the question card to move to the next/previous question. Choosing a question in the navigator scrolls it into view.
- Hover-only effects are replaced by press feedback on touch devices.
