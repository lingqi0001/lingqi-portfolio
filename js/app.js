let currentLang = 'en';

const UI_TRANSLATIONS = {
  en: {
    "header.subtitle": "Personal Website",
    "nav.overview": "Overview",
    "nav.academic": "Academic",
    "nav.projects": "Leadership & Project",
    "nav.timeline": "Timeline",
    "header.emailTooltip": "Contact Email",
    "dash.profileIndex": "Admissions & Profile Index",
    "dash.primaryMajor": "Primary Major Target",
    "dash.secondaryFocus": "Secondary Focus",
    "dash.volunteering": "Volunteering",
    "dash.bestToefl": "Best TOEFL",
    "dash.estimatedGpa": "Estimated GPA",
    "dash.checkpoints": "Execution Checkpoints",
    "acad.gpaHistory": "GPA Profile History",
    "acad.gpaSub": "Overview of yearly grades and credits (G11 represents projected outcomes):",
    "acad.yearCol": "Academic Year",
    "acad.gpaCol": "GPA (UW)",
    "acad.creditsCol": "Credits",
    "acad.grade9": "9th Grade",
    "acad.grade10": "10th Grade",
    "acad.grade11": "11th Grade (Estimated)",
    "acad.cumulative": "Cumulative GPA",
    "acad.compTests": "Competitions & Standardized Tests",
    "acad.usacoTitle": "USACO (Computing Olympiad)",
    "acad.usacoSub": "Bronze Division Qualified",
    "acad.promoted": "PROMOTED",
    "acad.toeflScoreboard": "TOEFL Scoreboard",
    "acad.course1011": "Grade 10-11 Coursework & Results",
    "acad.courseCol": "Course Title",
    "acad.resultCol": "Final Result",
    "acad.levelCol": "Course Level",
    "acad.course12": "Grade 12 Academic Plan",
    "acad.detailCol": "Option / Detail",
    "acad.expectedCol": "Expected",
    "acad.statusCol": "Status",
    "proj.all": "All Projects",
    "proj.tech": "Technical",
    "proj.ux": "UI/UX Research",
    "proj.humanities": "Humanities",
    "proj.leadership": "Innovation & Leadership",
    "proj.other": "Other Events",
    "time.volunteerLog": "100h Volunteering Log",
    "time.milestones": "Milestone Checklist"
  },
  zh: {
    "header.subtitle": "个人网站",
    "nav.overview": "概览",
    "nav.academic": "学术背景",
    "nav.projects": "项目与领导力",
    "nav.timeline": "规划时间线",
    "header.emailTooltip": "联系邮箱",
    "dash.profileIndex": "录取与个人档案指标",
    "dash.primaryMajor": "主申专业方向",
    "dash.secondaryFocus": "细分/次要方向",
    "dash.volunteering": "志愿服务",
    "dash.bestToefl": "托福最佳成绩",
    "dash.estimatedGpa": "预估 GPA",
    "dash.checkpoints": "近期执行里程碑",
    "acad.gpaHistory": "GPA 历史与预估",
    "acad.gpaSub": "学年成绩及学分概览（十一年级为预估结果）：",
    "acad.yearCol": "学年",
    "acad.gpaCol": "GPA (未加权)",
    "acad.creditsCol": "学分",
    "acad.grade9": "九年级",
    "acad.grade10": "十年级",
    "acad.grade11": "十一年级 (预估)",
    "acad.cumulative": "累计 GPA",
    "acad.compTests": "学术竞赛与标化考试",
    "acad.usacoTitle": "USACO (美国计算机奥林匹克竞赛)",
    "acad.usacoSub": "晋级铜牌组",
    "acad.promoted": "已晋级",
    "acad.toeflScoreboard": "托福成绩看板",
    "acad.course1011": "十年级至十一年级已修课程与成绩",
    "acad.courseCol": "课程名称",
    "acad.resultCol": "最终成绩",
    "acad.levelCol": "课程级别",
    "acad.course12": "十二年级课程学术规划",
    "acad.detailCol": "选项 / 细节",
    "acad.expectedCol": "预估成绩",
    "acad.statusCol": "状态",
    "proj.all": "全部项目",
    "proj.tech": "技术",
    "proj.ux": "UI/UX 研究",
    "proj.humanities": "人文",
    "proj.leadership": "创新与领导力",
    "proj.other": "其他活动",
    "time.volunteerLog": "100小时志愿服务日志",
    "time.milestones": "规划执行里程碑清单"
  }
};

function getActiveData() {
  return PORTFOLIO_DATA[currentLang];
}

function initAll() {
  const initializers = [
    { name: 'Navigation', fn: initNavigation },
    { name: 'LanguageSwitch', fn: initLanguageSwitch },
    { name: 'StaticTexts', fn: () => updateStaticTexts(currentLang) },
    { name: 'Dashboard', fn: initDashboard },
    { name: 'Projects', fn: initProjects },
    { name: 'Academics', fn: initAcademics },
    { name: 'VolunteeringAndTimeline', fn: initVolunteeringAndTimeline },
    { name: 'EmailPill', fn: initEmailPill }
  ];

  initializers.forEach(item => {
    try {
      item.fn();
    } catch (err) {
      console.error(`Error initializing ${item.name}:`, err);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

// Navigation Handling
function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.tab-content');
  const activePill = document.querySelector('.nav-active-pill');

  function updateActivePill() {
    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab && activePill) {
      if (window.innerWidth <= 768) {
        activePill.style.width = `${activeTab.offsetWidth}px`;
        activePill.style.height = `${activeTab.offsetHeight}px`;
        activePill.style.left = `${activeTab.offsetLeft}px`;
        activePill.style.top = `${activeTab.offsetTop}px`;
      }
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      tab.classList.add('active');
      const targetSection = document.getElementById(targetTab);
      if (targetSection) {
        targetSection.classList.add('active');
      }
      
      // Defer calculation slightly to let browser complete flexbox layout reflows
      setTimeout(updateActivePill, 20);
    });
  });

  // Run resize and window load updates
  window.addEventListener('resize', updateActivePill);
  window.addEventListener('load', updateActivePill);
  
  // Watch for font loading completion to resolve Flash of Unstyled Text (FOUT) offset bugs
  if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === 'function') {
    document.fonts.ready.then(updateActivePill);
  }
  
  // Use ResizeObserver to automatically align pill on any navigation bar resize or reflow
  if (window.ResizeObserver && activePill) {
    const navBar = document.querySelector('.navigation-bar');
    if (navBar) {
      const observer = new ResizeObserver(() => {
        updateActivePill();
      });
      observer.observe(navBar);
    }
  }

  // Initial render (delayed slightly to wait for DOM size calculations)
  setTimeout(updateActivePill, 80);
}

// Language Switch Handler
function initLanguageSwitch() {
  const langBtns = document.querySelectorAll('.lang-switch .lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;
      
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const isZh = btn.textContent.trim() === '中';
      currentLang = isZh ? 'zh' : 'en';
      
      // Update DOM
      document.documentElement.lang = isZh ? 'zh-CN' : 'en';
      updateStaticTexts(currentLang);
      
      // Re-initialize all data rendering
      try { initDashboard(); } catch (e) { console.error("Error in initDashboard:", e); }
      try { initProjects(); } catch (e) { console.error("Error in initProjects:", e); }
      try { initAcademics(); } catch (e) { console.error("Error in initAcademics:", e); }
      try { initVolunteeringAndTimeline(); } catch (e) { console.error("Error in initVolunteeringAndTimeline:", e); }
      
      // Trigger navigation pill realignment after layout changes
      const activeTab = document.querySelector('.nav-tab.active');
      if (activeTab) {
        activeTab.click();
      }
    });
  });
}

// Translate Static Text Content
function updateStaticTexts(lang) {
  const dict = UI_TRANSLATIONS[lang];
  if (!dict) return;

  // Static HTML labels
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Title attributes (tooltips)
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.setAttribute('title', dict[key]);
    }
  });

  // Table label attributes for responsive design
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-label');
    if (dict[key]) {
      el.setAttribute('data-label', dict[key]);
    }
  });
}

// Overview Dashboard Initializer
function initDashboard() {
  const activeData = getActiveData();

  // Populate Dynamic Profile Title Fields
  const primaryMajor = document.getElementById('dash-primary-major');
  if (primaryMajor) {
    primaryMajor.textContent = activeData.profile.targetMajor;
  }
  const secondaryFocus = document.getElementById('dash-secondary-focus');
  if (secondaryFocus) {
    secondaryFocus.textContent = activeData.profile.focus;
  }

  // Populate Total Volunteer Hours
  const totalVolunteeringHours = activeData.volunteering.reduce((acc, curr) => acc + curr.hours, 0);
  const volunteeringBadge = document.getElementById('dash-volunteer-hours');
  if (volunteeringBadge) {
    volunteeringBadge.textContent = "100h+";
  }

  // Render recent milestones into the mini-timeline on dashboard
  const miniTimeline = document.getElementById('mini-timeline');
  if (miniTimeline) {
    miniTimeline.innerHTML = activeData.milestones.slice(0, 3).map(m => `
      <div class="timeline-item">
        <div class="timeline-date">${m.date}</div>
        <div class="timeline-task">${m.task}</div>
      </div>
    `).join('');
  }
}

// Project Portfolio Section Initializer
function initProjects() {
  const activeData = getActiveData();
  const filterContainer = document.querySelector('.project-filters');
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  function renderProjects(category = 'all') {
    const filtered = category === 'all' 
      ? activeData.projects 
      : activeData.projects.filter(p => p.category === category);

    grid.innerHTML = filtered.map(p => `
      <div class="glass-card project-card" data-category="${p.category}">
        <div class="project-category" data-i18n="proj.${p.category}">${UI_TRANSLATIONS[currentLang]["proj." + p.category] || p.category}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <ul class="project-highlights">
          ${p.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Setup click handlers for filters (clean single listener registration)
  if (filterContainer && !filterContainer.dataset.listener) {
    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderProjects(e.target.getAttribute('data-filter'));
      }
    });
    filterContainer.dataset.listener = "true";
  }

  // Initial render
  const activeFilterBtn = document.querySelector('.filter-btn.active');
  const initialFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
  renderProjects(initialFilter);
}

// Academic & GPA Section Initializer
function initAcademics() {
  const activeData = getActiveData();

  // Populate TOEFL Tracker
  const toeflTrack = document.getElementById('toefl-track');
  if (toeflTrack) {
    toeflTrack.innerHTML = activeData.toefl.map(t => `
      <div class="toefl-node ${t.target ? 'target' : ''}">
        <div class="toefl-date">${t.date}</div>
        <div class="toefl-scores">
          <div class="score-chip"><span>R</span><span>${t.r}</span></div>
          <div class="score-chip"><span>L</span><span>${t.l}</span></div>
          <div class="score-chip"><span>S</span><span>${t.s}</span></div>
          <div class="score-chip"><span>W</span><span>${t.w}</span></div>
        </div>
        <div class="toefl-total">${t.total}</div>
      </div>
    `).join('');
  }

  // Populate GPA Tables (localized column labels for mobile view)
  const isZh = currentLang === 'zh';
  const labelResult = isZh ? "最终成绩" : "Final Result";
  const labelLevel = isZh ? "课程级别" : "Course Level";
  const labelDetail = isZh ? "选项 / 细节" : "Option / Detail";
  const labelExpected = isZh ? "预估成绩" : "Expected";
  const labelStatus = isZh ? "状态" : "Status";

  const g10g11Body = document.getElementById('g10g11-course-table-body');
  if (g10g11Body) {
    g10g11Body.innerHTML = activeData.courses.g10g11.map(c => `
      <tr>
        <td><strong>${c.name}</strong></td>
        <td data-label="${labelResult}">${c.grade}</td>
        <td data-label="${labelLevel}"><span class="badge-gt">${c.level}</span></td>
      </tr>
    `).join('');
  }

  const g12Body = document.getElementById('g12-course-table-body');
  if (g12Body) {
    g12Body.innerHTML = activeData.courses.g12.map(c => `
      <tr>
        <td><strong>${c.name}</strong></td>
        <td data-label="${labelDetail}">${c.detail}</td>
        <td data-label="${labelExpected}">${c.expected}</td>
        <td data-label="${labelStatus}"><span class="badge-ap">${c.status}</span></td>
      </tr>
    `).join('');
  }
}

// Volunteering & Timeline Section Initializer
function initVolunteeringAndTimeline() {
  const activeData = getActiveData();

  // Populate volunteering log
  const volLog = document.getElementById('volunteering-log');
  if (volLog) {
    volLog.innerHTML = activeData.volunteering.map(v => `
      <div class="volunteering-item">
        <span>${v.name}</span>
        <span class="volunteering-hours">${v.hours} hrs</span>
      </div>
    `).join('');
  }

  // Populate milestones timeline
  const fullTimeline = document.getElementById('full-timeline');
  if (fullTimeline) {
    fullTimeline.innerHTML = activeData.milestones.map(m => `
      <div class="timeline-item">
        <div class="timeline-date">${m.date}</div>
        <div class="timeline-task">${m.task}</div>
      </div>
    `).join('');
  }
}

// Handle email pill expand toggle on click (tap to expand, tap again to collapse, zero redirects)
function initEmailPill() {
  const emailPill = document.querySelector('.email-pill');
  if (emailPill) {
    emailPill.addEventListener('click', (e) => {
      e.stopPropagation();
      emailPill.classList.toggle('expanded');
    });

    document.addEventListener('click', () => {
      emailPill.classList.remove('expanded');
    });
  }
}
