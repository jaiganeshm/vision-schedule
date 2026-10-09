# VISION Weekly Schedule

Single-page website for the SKY North America VISION program weekly class schedule.  
Design matches [austin-sky-website](https://github.com/skyaustin/austin-sky-website).

## How to Update Each Week

**Only one file to edit:** `js/schedule.js`

1. Change `weekLabel` to the new Saturday & Sunday dates
2. Update `saturday[]` and `sunday[]` session objects
3. Push to GitHub — done ✅

```js
const SCHEDULE = {
  weekLabel: "Oct 17 & 18, 2026",   // ← update this
  saturday: [ ... ],                  // ← update sessions
  sunday:   [ ... ],
};
```

Each session object:
```js
{
  time:    "6:00 – 7:00 AM PDT",
  subject: "SPE",
  teacher: "Prof. Veera",
  year:    "both"           // "1", "2", or "both"
}
```

## Project Structure

```
vision-schedule/
├── index.html       ← page shell (rarely needs editing)
├── css/style.css    ← design (rarely needs editing)
├── js/schedule.js   ← schedule data + rendering ← EDIT WEEKLY
└── README.md
```

## Deploy on GitHub Pages

1. Create a new GitHub repo (e.g. `skyaustin/vision-schedule`)
2. Push all files to `main` branch
3. Go to **Settings → Pages → Source: main / root**
4. Your URL: `https://skyaustin.github.io/vision-schedule`

Share that link with teachers and aspirants — one link, always current.

## Local Preview

Open `index.html` directly in any browser. No build step needed.
