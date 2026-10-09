/* ============================================================
   VISION Schedule Data — edit this file each week
   ============================================================

   HOW TO UPDATE:
   1. Change WEEK_LABEL to the new date range (e.g. "Oct 17 & 18")
   2. Update saturday[] and sunday[] session entries as needed
   3. The page refreshes automatically — no other files to touch.

   TIME FORMAT: "H:MM AM – H:MM AM PDT"
   TIME_IST:   "H:MM – H:MM PM IST"   (auto-shown alongside PDT)
   YEAR:  "1" | "2" | "both"
   NOTE:  optional short note shown as a highlight under the row
============================================================ */

const SCHEDULE = {

  weekLabel: "Oct 10 & 11, 2026",

  saturday: [
    {
      time:    "6:00 – 7:00 AM PDT",
      timeIST: "6:30 – 7:30 PM IST",
      subject: "SPE",
      teacher: "Prof. Veera",
      year:    "both",
    },
    {
      time:    "8:00 – 9:30 AM PDT",
      timeIST: "8:30 – 10:00 PM IST",
      subject: "ANLM",
      teacher: "Prof. Karthikeyan",
      year:    "1",
      note:    "⏰ Timing changed back to 8:00 AM",
    },
    {
      time:    "7:30 – 9:00 AM PDT",
      timeIST: "8:00 – 9:30 PM IST",
      subject: "SOD",
      teacher: "Prof. Radj",
      year:    "2",
    },
  ],

  sunday: [
    {
      time:    "6:00 – 7:00 AM PDT",
      timeIST: "6:30 – 7:30 PM IST",
      subject: "SPE",
      teacher: "Prof. Veera",
      year:    "both",
    },
    {
      time:    "7:30 – 9:00 AM PDT",
      timeIST: "8:00 – 9:30 PM IST",
      subject: "PH",
      teacher: "Prof. Meena",
      year:    "1",
    },
    {
      time:    "7:30 – 9:00 AM PDT",
      timeIST: "8:00 – 9:30 PM IST",
      subject: "WCL",
      teacher: "Prof. Karthikeyan",
      year:    "2",
      note:    "✨ Special session",
    },
  ],

};

/* ============================================================
   RENDERING — no need to edit below this line
============================================================ */

(function () {

  // ── helpers ───────────────────────────────────────────────
  function yearBadge(year) {
    if (year === "both") return '<span class="badge badge-both">Both Years</span>';
    if (year === "1")    return '<span class="badge badge-y1">Year 1</span>';
    if (year === "2")    return '<span class="badge badge-y2">Year 2</span>';
    return "";
  }

  function buildRows(sessions, filter) {
    return sessions
      .filter(s => filter === "all" || s.year === filter || s.year === "both")
      .map(s => `
        <div class="sched-row fade-in${s.note ? ' has-note' : ''}">
          <div class="sched-time">
            <span class="time-pdt">${s.time}</span>
            ${s.timeIST ? `<span class="time-ist">${s.timeIST}</span>` : ''}
          </div>
          <div class="sched-subject">${s.subject}</div>
          <div class="sched-teacher${s.teacher === 'TBD' ? ' tbd' : ''}">${s.teacher}</div>
          <div class="sched-year">${yearBadge(s.year)}</div>
          ${s.note ? `<div class="sched-note">${s.note}</div>` : ''}
        </div>`)
      .join("");
  }

  function renderDay(dayLabel, sessions, filter, containerId) {
    const rows = buildRows(sessions, filter);
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = rows
      ? `<div class="day-label">${dayLabel}</div><div class="sched-table">${rows}</div>`
      : `<div class="day-label">${dayLabel}</div><p class="no-sessions">No sessions this day for the selected year.</p>`;
  }

  function renderAll(filter) {
    renderDay("Saturday", SCHEDULE.saturday, filter, "sat-container");
    renderDay("Sunday",   SCHEDULE.sunday,   filter, "sun-container");

    // fade-in trigger
    requestAnimationFrame(() => {
      document.querySelectorAll(".fade-in").forEach(el => el.classList.add("visible"));
    });
  }

  // ── tab switching ─────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {

    // inject week label
    const wl = document.getElementById("week-label");
    if (wl) wl.textContent = SCHEDULE.weekLabel;

    // default view
    renderAll("all");

    // tab buttons
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderAll(btn.dataset.year);
      });
    });
  });

})();
