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
  }
];

let checkedState = {};
let activeRoleFilter = "all";
let activeTab = "all";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      checkedState = JSON.parse(raw) || {};
    }
  } catch (e) {
    checkedState = {};
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedState));
  } catch (e) {
    // Ignore storage errors in private mode
  }
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

function renderChecklists() {
  const seasons = ["fall", "winter", "spring"];
  seasons.forEach((season) => {
    const container = document.getElementById(`list-${season}`);
    if (!container) return;
    container.innerHTML = "";

    const filtered = TIMELINE_TASKS.filter(
      (t) => t.season === season && matchesRole(t.owner)
    );

    filtered.forEach((task) => {
      container.appendChild(createTaskElement(task));
    });
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

function renderAll() {
  renderChecklists();
  updateProgress();
}

function setupFilters() {
  // View Tabs
  const tabBtns = document.querySelectorAll("[data-tab]");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTab = btn.getAttribute("data-tab");
      tabBtns.forEach((b) => b.classList.toggle("active", b === btn));

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
      roleBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderAll();
    });
  });

  // Reset Button
  const resetBtn = document.getElementById("btn-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset all checklist progress?")) {
        checkedState = {};
        saveState();
        renderAll();
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

