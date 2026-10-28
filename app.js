const STORAGE_KEY = "senior_college_roadmap_checked_v1";

const TIMELINE_TASKS = [
  // FALL: September - December
  {
    id: "fall-fsa-id",
    season: "fall",
    title: "Create FSA IDs for BOTH Student & Parents early",
    note: "Create accounts at studentaid.gov well before applying—identity verification takes several days.",
    owner: "both",
    ownerLabel: "Student + Parent",
    deadline: "Sept / Early Oct"
  },
  {
    id: "fall-hs-email",
    season: "fall",
    title: "Check high school email deactivation date & use a personal email",
    note: "Find out when the student's school email is deactivated after graduation. Use a dedicated personal email for college portals & FAFSA.",
    owner: "student",
    ownerLabel: "Student"
  },
  {
    id: "fall-fafsa-tap-open",
    season: "fall",
    title: "Start FAFSA (studentaid.gov) & NYS TAP (hesc.ny.gov)",
    note: "Applications open October 1st. Remember: FAFSA must be completed every year.",
    owner: "both",
    ownerLabel: "Student + Parent",
    deadline: "Opens Oct 1"
  },
  {
    id: "fall-suny-free",
    season: "fall",
    title: "Apply during SUNY Free Application Week",
    note: "Fee waivers apply for SUNY applications submitted between October 19 and November 2.",
    owner: "student",
    ownerLabel: "Student",
    deadline: "Oct 19 – Nov 2"
  },
  {
    id: "fall-essay",
    season: "fall",
    title: "Finalize Personal Growth Essay (Max 650 words)",
    note: "Focus the essay on showing how you have grown as a person, staying within the 650-word limit.",
    owner: "student",
    ownerLabel: "Student"
  },
  {
    id: "fall-apply-interest",
    season: "fall",
    title: "Submit applications, take optional interviews & send thank-you emails",
    note: "Email universities thank-you notes (especially reach schools!) to show demonstrated interest, and take the interview option if it suits the student.",
    owner: "student",
    ownerLabel: "Student",
    deadline: "Sept – Dec"
  },
  {
    id: "fall-scholarships-hunt",
    season: "fall",
    title: "Ask Guidance Counselor for scholarship lists & check Departmental / Sibling awards",
    note: "Check college websites for Departmental Scholarships, ask about Sibling Scholarships, and search fastweb.com, scholarships.com, and finaid.org.",
    owner: "both",
    ownerLabel: "Student + Parent"
  },

  // WINTER: January - March
  {
    id: "winter-fafsa-deadline",
    season: "winter",
    title: "Submit completed FAFSA before the February 1st deadline",
    note: "Ensure the parent has accepted the 'Contributor' email invite and that BOTH student and parent signatures went through.",
    owner: "both",
    ownerLabel: "Student + Parent",
    deadline: "Due Feb 1"
  },
  {
    id: "winter-review-aid",
    season: "winter",
    title: "Receive & compare college Financial Aid packages",
    note: "Colleges send out aid packages between January and March. Separate Free Money (Grants/Scholarships) from Work-Study and Loans.",
    owner: "parent",
    ownerLabel: "Parent"
  },

  // SPRING: April - May
  {
    id: "spring-decide",
    season: "spring",
    title: "Make final college decision after all admissions & aid packages arrive",
    note: "Compare net cost, institutional grants, and merit scholarships before committing.",
    owner: "both",
    ownerLabel: "Student + Parent",
    deadline: "By May 1"
  },
  {
    id: "spring-deposits",
    season: "spring",
    title: "Pay tuition and housing deposits by May 1st",
    note: "May 1st is the official deadline after all decisions have been made.",
    owner: "parent",
    ownerLabel: "Parent",
    deadline: "Due May 1"
  }
];

const GOTCHA_TASKS = [
  {
    id: "gotcha-ssn-name",
    title: "Match exact name on Social Security card",
    note: "Do not use nicknames—names must match the Social Security card character-for-character.",
    owner: "both",
    ownerLabel: "Both"
  },
  {
    id: "gotcha-list-student",
    title: "List the STUDENT as the applicant (not the parent)",
    note: "The application belongs to the student; parents are invited via email as 'Contributors'.",
    owner: "both",
    ownerLabel: "Both"
  },
  {
    id: "gotcha-academic-year",
    title: "Verify you selected the correct Academic Year",
    note: "Two FAFSA years are often live at once—double-check you are filling out the form for the student's upcoming freshman year in college.",
    owner: "parent",
    ownerLabel: "Parent"
  },
  {
    id: "gotcha-signatures",
    title: "Confirm BOTH Student & Parent signatures went through",
    note: "An unsigned section holds up the entire application—verify confirmation emails for both contributors.",
    owner: "both",
    ownerLabel: "Both"
  },
  {
    id: "gotcha-common-app-portals",
    title: "Complete each college's additional portal after submitting Common App",
    note: "After submitting on the Common App, many schools email login details for their own applicant portal that must be completed to finish applying.",
    owner: "student",
    ownerLabel: "Student"
  },
  {
    id: "gotcha-hs-deadlines",
    title: "Remind High School to send transcripts & recommendations by YOUR deadline",
    note: "Alert your guidance counselor and teachers early so transcripts and recommendation letters arrive by your earliest college deadline—not the high school's internal deadline.",
    owner: "student",
    ownerLabel: "Student"
  }
];

const COLLEGES_STORAGE_KEY = "senior_college_planner_list_v2";

const DEFAULT_COLLEGES = [
  {
    id: "col-sample-1",
    rank: "1",
    school: "Northeast Tech University (Example)",
    location: "Boston, MA",
    dueDate: "11/1/2026",
    appType: "early action",
    submittedOn: "",
    commonApp: "YES",
    testOptional: "Y",
    suppEssay: "Y",
    outcome: "",
    appFee: "$65.00",
    estimatedCost: "$54,000.00",
    tier: "Reach",
    logsInterest: "Considered",
    dateShowedInterest: "",
    majors: "Computer Science / Business"
  },
  {
    id: "col-sample-2",
    rank: "2",
    school: "SUNY New Paltz (Example)",
    location: "New Paltz, NY",
    dueDate: "11/15/2026",
    appType: "early action",
    submittedOn: "10/22/2026",
    commonApp: "YES",
    testOptional: "Y",
    suppEssay: "N",
    outcome: "",
    appFee: "free",
    estimatedCost: "$24,500.00",
    tier: "Target",
    logsInterest: "Not Considered",
    dateShowedInterest: "Campus tour 10/10/2026",
    majors: "Communications / Graphic Design"
  },
  {
    id: "col-sample-3",
    rank: "3",
    school: "SUNY Cortland (Example)",
    location: "Cortland, NY",
    dueDate: "12/1/2026",
    appType: "rolling",
    submittedOn: "10/24/2026",
    commonApp: "YES",
    testOptional: "Y",
    suppEssay: "N",
    outcome: "Accepted",
    appFee: "free",
    estimatedCost: "$23,000.00",
    tier: "Safe",
    logsInterest: "Not Considered",
    dateShowedInterest: "",
    majors: "Education / Psychology"
  }
];

let checkedState = {};
let activeRoleFilter = "all";
let activeTab = "all";
let collegesList = [];
let activeTierFilter = "all";
let activeSort = "rank";
let lastModalTrigger = null;
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById("toast-banner");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden-section");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden-section");
  }, 3200);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      checkedState = JSON.parse(raw) || {};
    }
  } catch (e) {
    checkedState = {};
  }

  try {
    const rawColleges = localStorage.getItem(COLLEGES_STORAGE_KEY);
    if (rawColleges !== null) {
      const parsed = JSON.parse(rawColleges);
      if (Array.isArray(parsed)) {
        collegesList = parsed;
        return;
      }
    }
  } catch (e) {
    // Fall back to default sample list
  }
  collegesList = JSON.parse(JSON.stringify(DEFAULT_COLLEGES));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedState));
  } catch (e) {
    // Ignore storage errors in private mode
  }
}

function saveColleges() {
  try {
    localStorage.setItem(COLLEGES_STORAGE_KEY, JSON.stringify(collegesList));
  } catch (e) {
    // Ignore storage errors
  }
}

function parseMoney(val) {
  if (!val) return 0;
  const cleaned = String(val).replace(/[^0-9.]/g, "");
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

function parseDateValue(val) {
  if (!val) return Number.MAX_SAFE_INTEGER;
  const s = String(val).trim();
  if (!s || s.toLowerCase() === "rolling") return Number.MAX_SAFE_INTEGER - 1;
  // If user entered MM/DD without a year (e.g. "11/1"), append current year
  const withYear = /^\d{1,2}\/\d{1,2}$/.test(s)
    ? `${s}/${new Date().getFullYear()}`
    : s;
  const t = Date.parse(withYear);
  return isNaN(t) ? Number.MAX_SAFE_INTEGER : t;
}

function normalizeTierCategory(tierStr) {
  const s = (tierStr || "").toLowerCase();
  if (s.includes("reach")) return "reach";
  if (s.includes("target")) return "target";
  return "safe";
}

function hasSampleColleges() {
  return collegesList.some((c) => String(c.id || "").startsWith("col-sample-"));
}

function updateSampleDataBanner() {
  const banner = document.getElementById("sample-data-banner");
  if (!banner) return;
  if (hasSampleColleges()) {
    banner.classList.remove("hidden-section");
  } else {
    banner.classList.add("hidden-section");
  }
}

function updateCollegeSummary() {
  const total = collegesList.length;
  const submitted = collegesList.filter(
    (c) => c.submittedOn && c.submittedOn.trim() !== ""
  ).length;
  const pending = total - submitted;

  const safeCount = collegesList.filter(
    (c) => normalizeTierCategory(c.tier) === "safe"
  ).length;
  const targetCount = collegesList.filter(
    (c) => normalizeTierCategory(c.tier) === "target"
  ).length;
  const reachCount = collegesList.filter(
    (c) => normalizeTierCategory(c.tier) === "reach"
  ).length;

  let totalFees = 0;
  let freeCount = 0;
  const costs = [];

  collegesList.forEach((c) => {
    const feeStr = (c.appFee || "").trim().toLowerCase();
    if (feeStr === "free" || feeStr === "$0" || feeStr === "0") {
      freeCount++;
    } else {
      totalFees += parseMoney(c.appFee);
    }
    const costVal = parseMoney(c.estimatedCost);
    if (costVal > 0) costs.push(costVal);
  });

  const minCost = costs.length ? Math.round(Math.min(...costs) / 1000) : 0;
  const maxCost = costs.length ? Math.round(Math.max(...costs) / 1000) : 0;

  const considersInterest = collegesList.filter(
    (c) =>
      (c.logsInterest || "").toLowerCase().includes("considered") &&
      !(c.logsInterest || "").toLowerCase().includes("not")
  );
  const missingInterestAction = considersInterest.filter(
    (c) => !c.dateShowedInterest || c.dateShowedInterest.trim() === ""
  );

  const appsCountEl = document.getElementById("stat-apps-count");
  const appsSubEl = document.getElementById("stat-apps-sub");
  const tierBalEl = document.getElementById("stat-tier-balance");
  const feeSumEl = document.getElementById("stat-fee-summary");
  const costRangeEl = document.getElementById("stat-cost-range");
  const intCountEl = document.getElementById("stat-interest-count");
  const intDescEl = document.getElementById("stat-interest-desc");

  if (appsCountEl)
    appsCountEl.textContent = `${total} School${total === 1 ? "" : "s"}`;
  if (appsSubEl)
    appsSubEl.textContent = `${submitted} Submitted · ${pending} Pending`;
  if (tierBalEl)
    tierBalEl.textContent = `${safeCount} Safe · ${targetCount} Target · ${reachCount} Reach`;
  if (feeSumEl)
    feeSumEl.textContent = `$${totalFees.toFixed(0)} Total Fees`;
  if (costRangeEl) {
    const costText = costs.length ? `$${minCost}k–$${maxCost}k/yr est.` : "No est. costs";
    costRangeEl.textContent = `${freeCount} Free Waiver${freeCount === 1 ? "" : "s"} · ${costText}`;
  }
  if (intCountEl) {
    const n = considersInterest.length;
    intCountEl.textContent = `${n} School${n === 1 ? " Considers" : "s Consider"} It`;
  }
  if (intDescEl) {
    if (missingInterestAction.length > 0) {
      intDescEl.textContent = `⚠️ Action needed for: ${missingInterestAction
        .map((c) => c.school)
        .join(", ")}`;
    } else if (considersInterest.length > 0) {
      intDescEl.textContent = `✅ Interest logged for all ${considersInterest.length} school(s)`;
    } else {
      intDescEl.textContent = "Check Common Data Set Section C7";
    }
  }
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderCollegesTable() {
  const tbody = document.getElementById("college-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const filtered = collegesList.filter((c) => {
    if (activeTierFilter === "all") return true;
    if (activeTierFilter === "interest") {
      const li = (c.logsInterest || "").toLowerCase();
      return li.includes("considered") && !li.includes("not");
    }
    return normalizeTierCategory(c.tier) === activeTierFilter;
  });

  if (filtered.length === 0) {
    const emptyTr = document.createElement("tr");
    const isTotalEmpty = collegesList.length === 0;
    emptyTr.innerHTML = `
      <td colspan="10" class="empty-planner-state">
        <strong>${
          isTotalEmpty
            ? "Your College Planner is empty and ready for your family's list!"
            : "No schools match the current filter."
        }</strong>
        <div class="empty-planner-actions">
          ${
            isTotalEmpty
              ? `<button type="button" class="btn btn-primary" id="btn-empty-add">+ Add Your First College</button>
                 <button type="button" class="btn btn-secondary" id="btn-empty-import">📋 Paste from Google Sheets</button>`
              : `<button type="button" class="btn btn-secondary" id="btn-empty-show-all">Show All Schools</button>`
          }
        </div>
      </td>
    `;
    tbody.appendChild(emptyTr);

    const emptyAdd = document.getElementById("btn-empty-add");
    if (emptyAdd) emptyAdd.addEventListener("click", () => openCollegeModal(null, emptyAdd));
    const emptyImp = document.getElementById("btn-empty-import");
    if (emptyImp) {
      emptyImp.addEventListener("click", () => {
        const openImp = document.getElementById("btn-open-import");
        if (openImp) openImp.click();
      });
    }
    const emptyAll = document.getElementById("btn-empty-show-all");
    if (emptyAll) {
      emptyAll.addEventListener("click", () => {
        const allChip = document.querySelector('[data-tier-filter="all"]');
        if (allChip) allChip.click();
      });
    }
    return;
  }

  const sorted = [...filtered].sort((a, b) => {
    if (activeSort === "rank") {
      const rA = parseInt(a.rank, 10);
      const rB = parseInt(b.rank, 10);
      const valA = isNaN(rA) ? 999 : rA;
      const valB = isNaN(rB) ? 999 : rB;
      if (valA !== valB) return valA - valB;
      return (a.school || "").localeCompare(b.school || "");
    }
    if (activeSort === "due") {
      return parseDateValue(a.dueDate) - parseDateValue(b.dueDate);
    }
    if (activeSort === "cost-asc") {
      return parseMoney(a.estimatedCost) - parseMoney(b.estimatedCost);
    }
    if (activeSort === "cost-desc") {
      return parseMoney(b.estimatedCost) - parseMoney(a.estimatedCost);
    }
    return (a.school || "").localeCompare(b.school || "");
  });

  sorted.forEach((col) => {
    const tr = document.createElement("tr");
    const tierCat = normalizeTierCategory(col.tier);
    const tierClass =
      tierCat === "reach"
        ? "tier-reach"
        : tierCat === "target"
        ? "tier-target"
        : "tier-safe";

    const rankHtml =
      col.rank && String(col.rank).trim() !== ""
        ? `<span class="rank-circle">${escapeHtml(col.rank)}</span>`
        : `<span class="rank-empty">—</span>`;

    const majorsHtml =
      col.majors && col.majors.trim() !== ""
        ? `<div class="school-major-note">🎓 ${escapeHtml(col.majors)}</div>`
        : "";

    const isSubmitted = col.submittedOn && col.submittedOn.trim() !== "";
    const statusHtml = isSubmitted
      ? `<button type="button" class="status-submitted status-toggle-btn" data-toggle-submit-id="${escapeHtml(
          col.id
        )}" title="Click to mark as pending">✓ Submitted ${escapeHtml(col.submittedOn)}</button>`
      : `<button type="button" class="status-pending status-toggle-btn" data-toggle-submit-id="${escapeHtml(
          col.id
        )}" title="Click to mark submitted today">⏳ Not Submitted</button>`;

    const commonAppPill =
      (col.commonApp || "").toUpperCase() === "YES"
        ? `<span class="mini-pill">Common App</span>`
        : `<span class="mini-pill">Direct App</span>`;
    const testOptPill =
      (col.testOptional || "").toUpperCase().startsWith("Y")
        ? `<span class="mini-pill">Test-Optional</span>`
        : `<span class="mini-pill highlight">Scores Req.</span>`;
    const suppPill =
      (col.suppEssay || "").toUpperCase().startsWith("Y")
        ? `<span class="mini-pill highlight">Supp. Essay</span>`
        : `<span class="mini-pill">No Supp Essay</span>`;

    const liLower = (col.logsInterest || "").toLowerCase();
    const tracksInterest = liLower.includes("considered") && !liLower.includes("not");
    const hasLoggedInterest =
      col.dateShowedInterest && col.dateShowedInterest.trim() !== "";

    let interestHtml = "";
    if (tracksInterest) {
      interestHtml = `<span class="interest-considered">✉️ Considered</span>`;
      if (hasLoggedInterest) {
        const displayInterest =
          col.dateShowedInterest.trim().toLowerCase() === "x"
            ? "✓ Contact / Interest Logged"
            : `✓ ${escapeHtml(col.dateShowedInterest)}`;
        interestHtml += `<div class="interest-log-note">${displayInterest}</div>`;
      } else {
        interestHtml += `<div class="interest-alert-note">⚠️ Send thank-you or visit!</div>`;
      }
    } else {
      interestHtml = `<span class="interest-not-considered">Not Considered</span>`;
      if (hasLoggedInterest) {
        interestHtml += `<div class="interest-log-note">📅 ${escapeHtml(col.dateShowedInterest)}</div>`;
      }
    }

    const isFree =
      (col.appFee || "").trim().toLowerCase() === "free" ||
      parseMoney(col.appFee) === 0;
    const feeHtml = isFree
      ? `<span class="fee-free">FREE Fee</span>`
      : `<span>Fee: ${escapeHtml(col.appFee)}</span>`;

    tr.innerHTML = `
      <td data-label="Rank">${rankHtml}</td>
      <td data-label="School">
        <div>
          <div class="school-name-cell">${escapeHtml(col.school)}</div>
          <div class="school-loc-cell">📍 ${escapeHtml(col.location || "—")}</div>
          ${majorsHtml}
        </div>
      </td>
      <td data-label="Tier">
        <span class="tier-badge ${tierClass}">${escapeHtml(col.tier || "Safe")}</span>
      </td>
      <td data-label="Due Date">
        <div>
          <div style="font-weight:700;">${escapeHtml(col.dueDate || "—")}</div>
          <div class="school-loc-cell" style="text-transform:capitalize;">${escapeHtml(col.appType || "")}</div>
        </div>
      </td>
      <td data-label="Status">${statusHtml}</td>
      <td data-label="Requirements">
        <div class="req-pills">
          ${commonAppPill}
          ${testOptPill}
          ${suppPill}
        </div>
      </td>
      <td data-label="Demonstrated Interest"><div>${interestHtml}</div></td>
      <td data-label="Fee & Est. Cost">
        <div>
          <div style="font-weight:700;">${escapeHtml(col.estimatedCost || "—")}</div>
          <div>${feeHtml}</div>
        </div>
      </td>
      <td data-label="Outcome">
        <select class="outcome-select" data-outcome-id="${escapeHtml(col.id)}" aria-label="Outcome for ${escapeHtml(col.school)}">
          <option value="" ${!col.outcome ? "selected" : ""}>Awaiting</option>
          <option value="Accepted" ${col.outcome === "Accepted" ? "selected" : ""}>Accepted 🎉</option>
          <option value="Deferred" ${col.outcome === "Deferred" ? "selected" : ""}>Deferred</option>
          <option value="Waitlisted" ${col.outcome === "Waitlisted" ? "selected" : ""}>Waitlisted</option>
          <option value="Denied" ${col.outcome === "Denied" ? "selected" : ""}>Denied</option>
        </select>
      </td>
      <td data-label="Actions" class="no-print">
        <div class="row-actions">
          <button class="icon-btn" type="button" data-edit-id="${escapeHtml(col.id)}" aria-label="Edit ${escapeHtml(col.school)}" title="Edit school">✏️</button>
          <button class="icon-btn" type="button" data-delete-id="${escapeHtml(col.id)}" aria-label="Remove ${escapeHtml(col.school)}" title="Remove school">🗑️</button>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });

  // Wire 1-click Submitted toggle button
  tbody.querySelectorAll("[data-toggle-submit-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-toggle-submit-id");
      const item = collegesList.find((c) => c.id === id);
      if (!item) return;
      if (item.submittedOn && item.submittedOn.trim() !== "") {
        item.submittedOn = "";
        showToast(`Marked ${item.school} as Not Submitted`);
      } else {
        const now = new Date();
        item.submittedOn = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
        showToast(`✓ Marked ${item.school} submitted (${item.submittedOn})`);
      }
      saveColleges();
      renderAll();
    });
  });

  // Wire outcome dropdowns & edit/delete buttons
  tbody.querySelectorAll("[data-outcome-id]").forEach((sel) => {
    sel.addEventListener("change", () => {
      const id = sel.getAttribute("data-outcome-id");
      const item = collegesList.find((c) => c.id === id);
      if (item) {
        item.outcome = sel.value;
        saveColleges();
      }
    });
  });

  tbody.querySelectorAll("[data-edit-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openCollegeModal(btn.getAttribute("data-edit-id"), btn);
    });
  });

  tbody.querySelectorAll("[data-delete-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-delete-id");
      const target = collegesList.find((c) => c.id === id);
      if (target && confirm(`Remove "${target.school}" from your planner?`)) {
        collegesList = collegesList.filter((c) => c.id !== id);
        saveColleges();
        renderAll();
        showToast(`Removed ${target.school}`);
      }
    });
  });
}

function toggleTask(taskId) {
  checkedState[taskId] = !checkedState[taskId];
  saveState();
  renderAll();
}

function matchesRole(taskOwner) {
  if (activeRoleFilter === "all") return true;
  if (activeRoleFilter === "parent") return taskOwner === "parent" || taskOwner === "both";
  if (activeRoleFilter === "student") return taskOwner === "student" || taskOwner === "both";
  return true;
}

function createTaskElement(task) {
  const isChecked = Boolean(checkedState[task.id]);
  const item = document.createElement("label");
  item.className = `task-item ${isChecked ? "completed" : ""}`;
  item.setAttribute("for", `chk-${task.id}`);

  const ownerClass =
    task.owner === "parent"
      ? "owner-parent"
      : task.owner === "student"
      ? "owner-student"
      : "owner-both";

  const deadlineHtml = task.deadline
    ? `<span class="deadline-tag">${task.deadline}</span>`
    : "";

  item.innerHTML = `
    <input
      type="checkbox"
      id="chk-${task.id}"
      class="task-checkbox"
      ${isChecked ? "checked" : ""}
    />
    <div class="task-body">
      <div class="task-title">${task.title}</div>
      <div class="task-note">${task.note}</div>
      <div class="task-meta">
        <span class="owner-badge ${ownerClass}">${task.ownerLabel}</span>
        ${deadlineHtml}
      </div>
    </div>
  `;

  const checkbox = item.querySelector("input");
  checkbox.addEventListener("change", () => toggleTask(task.id));
  return item;
}

function getCurrentSeasonKey() {
  const m = new Date().getMonth(); // 0=Jan ... 11=Dec
  if (m >= 7 && m <= 11) return "fall"; // Aug - Dec
  if (m >= 0 && m <= 2) return "winter"; // Jan - Mar
  return "spring"; // Apr - Jul
}

function renderChecklists() {
  const seasons = ["fall", "winter", "spring"];
  const currentSeason = getCurrentSeasonKey();

  seasons.forEach((season) => {
    const container = document.getElementById(`list-${season}`);
    if (!container) return;
    container.innerHTML = "";

    const filtered = TIMELINE_TASKS.filter(
      (t) => t.season === season && matchesRole(t.owner)
    );
    const doneCount = filtered.filter((t) => checkedState[t.id]).length;

    filtered.forEach((task) => {
      container.appendChild(createTaskElement(task));
    });

    const tagEl = document.getElementById(`tag-${season}`);
    const cardEl = document.getElementById(`season-card-${season}`);
    const isCurrent = season === currentSeason;

    if (cardEl) {
      cardEl.classList.toggle("current-season", isCurrent);
    }
    if (tagEl) {
      tagEl.classList.toggle("current-tag", isCurrent);
      tagEl.textContent = isCurrent
        ? `📍 Current · ${doneCount}/${filtered.length} Done`
        : `${doneCount}/${filtered.length} Done`;
    }
  });

  const gotchaContainer = document.getElementById("list-gotchas");
  if (gotchaContainer) {
    gotchaContainer.innerHTML = "";
    GOTCHA_TASKS.filter((t) => matchesRole(t.owner)).forEach((task) => {
      gotchaContainer.appendChild(createTaskElement(task));
    });
  }
}

function updateProgress() {
  const allTasks = [...TIMELINE_TASKS, ...GOTCHA_TASKS];
  const total = allTasks.length;
  const completed = allTasks.filter((t) => checkedState[t.id]).length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  const countEl = document.getElementById("progress-count");
  const pctEl = document.getElementById("progress-pct");
  const fillEl = document.getElementById("progress-fill");

  if (countEl) countEl.textContent = `${completed} / ${total}`;
  if (pctEl) pctEl.textContent = `${pct}% Complete`;
  if (fillEl) fillEl.style.width = `${pct}%`;
}

function openCollegeModal(editId, triggerEl) {
  const modal = document.getElementById("college-modal");
  const titleEl = document.getElementById("college-modal-title");
  if (!modal) return;

  lastModalTrigger = triggerEl || document.activeElement;

  const existing = editId ? collegesList.find((c) => c.id === editId) : null;
  if (titleEl) {
    titleEl.textContent = existing ? `Edit ${existing.school}` : "Add College to Planner";
  }

  document.getElementById("col-id").value = existing ? existing.id : "";
  document.getElementById("col-rank").value = existing ? existing.rank || "" : "";
  document.getElementById("col-school").value = existing ? existing.school || "" : "";
  document.getElementById("col-location").value = existing ? existing.location || "" : "";
  document.getElementById("col-tier").value = existing ? existing.tier || "Safe" : "Safe";
  document.getElementById("col-due").value = existing ? existing.dueDate || "" : "";
  document.getElementById("col-type").value = existing
    ? (existing.appType || "early action").toLowerCase()
    : "early action";
  document.getElementById("col-submitted").value = existing ? existing.submittedOn || "" : "";
  document.getElementById("col-fee").value = existing ? existing.appFee || "free" : "free";
  document.getElementById("col-cost").value = existing ? existing.estimatedCost || "" : "";
  document.getElementById("col-common-app").value = existing
    ? (existing.commonApp || "YES").toUpperCase()
    : "YES";
  document.getElementById("col-test-opt").value = existing
    ? (existing.testOptional || "Y").toUpperCase().startsWith("Y")
      ? "Y"
      : "N"
    : "Y";
  document.getElementById("col-supp-essay").value = existing
    ? (existing.suppEssay || "N").toUpperCase().startsWith("Y")
      ? "Y"
      : "N"
    : "N";
  document.getElementById("col-logs-interest").value =
    existing &&
    (existing.logsInterest || "").toLowerCase().includes("considered") &&
    !(existing.logsInterest || "").toLowerCase().includes("not")
      ? "Considered"
      : "Not Considered";
  document.getElementById("col-date-interest").value = existing
    ? existing.dateShowedInterest || ""
    : "";
  document.getElementById("col-outcome").value = existing ? existing.outcome || "" : "";
  document.getElementById("col-majors").value = existing ? existing.majors || "" : "";

  modal.classList.remove("hidden-section");
  modal.setAttribute("aria-hidden", "false");
  const schoolInput = document.getElementById("col-school");
  if (schoolInput) setTimeout(() => schoolInput.focus(), 20);
}

function closeCollegeModal() {
  const modal = document.getElementById("college-modal");
  if (modal) {
    modal.classList.add("hidden-section");
    modal.setAttribute("aria-hidden", "true");
  }
  if (lastModalTrigger && typeof lastModalTrigger.focus === "function") {
    lastModalTrigger.focus();
  }
}

function csvEscape(val) {
  const s = String(val == null ? "" : val);
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function exportCollegesCsv() {
  const headers = [
    "Rank",
    "School",
    "Location",
    "Application Due Date",
    "type of application",
    "Submitted On",
    "Common App?",
    "Test scores optional",
    "Supp Essay",
    "Outcome / Acceptance",
    "Application fee",
    "Estimated Cost",
    "Safe, Target, Reach",
    "Logs Interest",
    "Date Showed Interest",
    "Majors"
  ];

  const rows = collegesList.map((c) => [
    c.rank,
    c.school,
    c.location,
    c.dueDate,
    c.appType,
    c.submittedOn,
    c.commonApp,
    c.testOptional,
    c.suppEssay,
    c.outcome,
    c.appFee,
    c.estimatedCost,
    c.tier,
    c.logsInterest,
    c.dateShowedInterest,
    c.majors
  ]);

  const csvContent = [
    headers.map(csvEscape).join(","),
    ...rows.map((r) => r.map(csvEscape).join(","))
  ].join("\r\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "college-planning-tracker.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function parseDelimitedLine(line, delimiter) {
  if (delimiter === "\t") {
    return line.split("\t").map((cell) => cell.trim());
  }
  const result = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === delimiter && !inQuotes) {
      result.push(cur.trim());
      cur = "";
    } else {
      cur += ch;
    }
  }
  result.push(cur.trim());
  return result;
}

function importCollegesFromText(rawText, removeSamplesFirst) {
  const lines = (rawText || "")
    .split(/\r?\n/)
    .map((l) => l.replace(/\r$/, ""))
    .filter((l) => l.trim() !== "");

  if (lines.length === 0) return 0;

  if (removeSamplesFirst) {
    collegesList = collegesList.filter(
      (c) => !String(c.id || "").startsWith("col-sample-")
    );
  }

  const delimiter = lines[0].includes("\t") ? "\t" : ",";
  let importedCount = 0;

  lines.forEach((line, idx) => {
    const cols = parseDelimitedLine(line, delimiter);
    // Skip header row if detected
    if (
      idx === 0 &&
      (cols[0].toLowerCase() === "rank" ||
        (cols[1] && cols[1].toLowerCase() === "school"))
    ) {
      return;
    }
    const schoolName = (cols[1] || cols[0] || "").trim();
    if (!schoolName) return;

    collegesList.push({
      id: `col-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      rank: cols[0] || "",
      school: cols[1] || schoolName,
      location: cols[2] || "",
      dueDate: cols[3] || "",
      appType: cols[4] || "early action",
      submittedOn: cols[5] || "",
      commonApp: cols[6] || "YES",
      testOptional: cols[7] || "Y",
      suppEssay: cols[8] || "N",
      outcome: cols[9] || "",
      appFee: cols[10] || "free",
      estimatedCost: cols[11] || "",
      tier: cols[12] || "Safe",
      logsInterest: cols[13] || "Not Considered",
      dateShowedInterest: cols[14] || "",
      majors: cols[15] || ""
    });
    importedCount++;
  });

  if (importedCount > 0) {
    saveColleges();
    renderAll();
    showToast(`✓ Imported ${importedCount} college${importedCount === 1 ? "" : "s"}`);
  }
  return importedCount;
}

function renderAll() {
  renderChecklists();
  updateProgress();
  updateSampleDataBanner();
  renderCollegesTable();
  updateCollegeSummary();
}

function setupFilters() {
  // View Tabs
  const tabBtns = document.querySelectorAll("[data-tab]");
  const roleFilterBar = document.getElementById("role-filter-bar");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTab = btn.getAttribute("data-tab");
      tabBtns.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      if (roleFilterBar) {
        const showRoleFilter =
          activeTab === "all" || activeTab === "timeline" || activeTab === "aid";
        roleFilterBar.classList.toggle("hidden-section", !showRoleFilter);
      }

      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((sec) => {
        const secName = sec.getAttribute("data-section");
        if (activeTab === "all" || activeTab === secName) {
          sec.classList.remove("hidden-section");
        } else {
          sec.classList.add("hidden-section");
        }
      });
    });
  });

  // Role Chips
  const roleBtns = document.querySelectorAll("[data-role]");
  roleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeRoleFilter = btn.getAttribute("data-role");
      roleBtns.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      renderAll();
    });
  });

  // Planner Tier Filter Chips
  const tierBtns = document.querySelectorAll("[data-tier-filter]");
  tierBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTierFilter = btn.getAttribute("data-tier-filter");
      tierBtns.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      renderCollegesTable();
    });
  });

  // Planner Sort Select
  const sortSelect = document.getElementById("college-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      activeSort = sortSelect.value;
      renderCollegesTable();
    });
  }

  // Clear Sample Colleges Banner Button
  const clearSamplesBtn = document.getElementById("btn-clear-samples");
  if (clearSamplesBtn) {
    clearSamplesBtn.addEventListener("click", () => {
      collegesList = collegesList.filter(
        (c) => !String(c.id || "").startsWith("col-sample-")
      );
      saveColleges();
      renderAll();
      showToast("Cleared example schools — ready for your list!");
    });
  }

  // Add / Edit College Modal Controls
  const collegeModal = document.getElementById("college-modal");
  const addCollegeBtn = document.getElementById("btn-add-college");
  if (addCollegeBtn) {
    addCollegeBtn.addEventListener("click", () => openCollegeModal(null, addCollegeBtn));
  }
  const closeCollegeBtn = document.getElementById("btn-close-college-modal");
  const cancelCollegeBtn = document.getElementById("btn-cancel-college");
  if (closeCollegeBtn) closeCollegeBtn.addEventListener("click", closeCollegeModal);
  if (cancelCollegeBtn) cancelCollegeBtn.addEventListener("click", closeCollegeModal);
  if (collegeModal) {
    collegeModal.addEventListener("click", (e) => {
      if (e.target === collegeModal) closeCollegeModal();
    });
  }

  const collegeForm = document.getElementById("college-form");
  if (collegeForm) {
    collegeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("col-id").value;
      const entry = {
        id: id || `col-${Date.now()}`,
        rank: document.getElementById("col-rank").value.trim(),
        school: document.getElementById("col-school").value.trim(),
        location: document.getElementById("col-location").value.trim(),
        tier: document.getElementById("col-tier").value,
        dueDate: document.getElementById("col-due").value.trim(),
        appType: document.getElementById("col-type").value,
        submittedOn: document.getElementById("col-submitted").value.trim(),
        appFee: document.getElementById("col-fee").value.trim() || "free",
        estimatedCost: document.getElementById("col-cost").value.trim(),
        commonApp: document.getElementById("col-common-app").value,
        testOptional: document.getElementById("col-test-opt").value,
        suppEssay: document.getElementById("col-supp-essay").value,
        logsInterest: document.getElementById("col-logs-interest").value,
        dateShowedInterest: document.getElementById("col-date-interest").value.trim(),
        outcome: document.getElementById("col-outcome").value,
        majors: document.getElementById("col-majors").value.trim()
      };

      if (id) {
        const idx = collegesList.findIndex((c) => c.id === id);
        if (idx !== -1) collegesList[idx] = entry;
      } else {
        collegesList.push(entry);
      }

      saveColleges();
      closeCollegeModal();
      renderAll();
      showToast(`Saved ${entry.school}`);
    });
  }

  // Export CSV Button
  const exportBtn = document.getElementById("btn-export-csv");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportCollegesCsv);
  }

  // Import / Paste Modal Controls
  const importModal = document.getElementById("import-modal");
  const openImportBtn = document.getElementById("btn-open-import");
  const closeImportBtn = document.getElementById("btn-close-import-modal");
  const cancelImportBtn = document.getElementById("btn-cancel-import");
  const confirmImportBtn = document.getElementById("btn-confirm-import");
  const importTextarea = document.getElementById("import-textarea");
  const importFileInput = document.getElementById("import-file-input");
  const importReplaceChk = document.getElementById("import-replace-samples");

  const closeImportModal = () => {
    if (importModal) {
      importModal.classList.add("hidden-section");
      importModal.setAttribute("aria-hidden", "true");
    }
    if (lastModalTrigger && typeof lastModalTrigger.focus === "function") {
      lastModalTrigger.focus();
    }
  };

  if (openImportBtn && importModal) {
    openImportBtn.addEventListener("click", () => {
      lastModalTrigger = openImportBtn;
      if (importTextarea) importTextarea.value = "";
      if (importFileInput) importFileInput.value = "";
      importModal.classList.remove("hidden-section");
      importModal.setAttribute("aria-hidden", "false");
      if (importTextarea) setTimeout(() => importTextarea.focus(), 20);
    });
  }
  if (closeImportBtn) closeImportBtn.addEventListener("click", closeImportModal);
  if (cancelImportBtn) cancelImportBtn.addEventListener("click", closeImportModal);
  if (importModal) {
    importModal.addEventListener("click", (e) => {
      if (e.target === importModal) closeImportModal();
    });
  }

  // Global Escape key listener for modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (collegeModal && !collegeModal.classList.contains("hidden-section")) {
        closeCollegeModal();
      }
      if (importModal && !importModal.classList.contains("hidden-section")) {
        closeImportModal();
      }
    }
  });

  if (importFileInput && importTextarea) {
    importFileInput.addEventListener("change", () => {
      const file = importFileInput.files && importFileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        importTextarea.value = String(ev.target.result || "");
      };
      reader.readAsText(file);
    });
  }

  if (confirmImportBtn && importTextarea) {
    confirmImportBtn.addEventListener("click", () => {
      const removeSamples = importReplaceChk ? importReplaceChk.checked : true;
      const count = importCollegesFromText(importTextarea.value, removeSamples);
      if (count > 0) {
        closeImportModal();
      } else {
        alert("No valid rows found. Copy rows from Google Sheets or select a CSV file.");
      }
    });
  }

  // Reset Sample Colleges Button
  const resetCollegesBtn = document.getElementById("btn-reset-colleges");
  if (resetCollegesBtn) {
    resetCollegesBtn.addEventListener("click", () => {
      if (confirm("Restore the 3 example colleges?")) {
        collegesList = JSON.parse(JSON.stringify(DEFAULT_COLLEGES));
        saveColleges();
        renderAll();
        showToast("Restored 3 example schools");
      }
    });
  }

  // Reset Checklist Button
  const resetBtn = document.getElementById("btn-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset all checklist progress?")) {
        checkedState = {};
        saveState();
        renderAll();
        showToast("Checklist progress reset");
      }
    });
  }

  // Print Button
  const printBtn = document.getElementById("btn-print");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Dark / Light Mode Toggle Button
  const themeBtn = document.getElementById("btn-theme-toggle");
  const updateThemeBtnLabel = () => {
    if (!themeBtn) return;
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    themeBtn.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  };
  updateThemeBtnLabel();

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("sinthima_theme_v1", next);
      } catch (e) {}
      updateThemeBtnLabel();
    });
  }

  // Common Data Set Search Helper
  const cdsForm = document.getElementById("cds-form");
  const cdsInput = document.getElementById("cds-college-input");
  if (cdsForm && cdsInput) {
    cdsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = cdsInput.value.trim() || "SUNY Binghamton";
      const url = `https://www.google.com/search?q=${encodeURIComponent(
        query + " Common Data Set"
      )}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  setupFilters();
  renderAll();
});

