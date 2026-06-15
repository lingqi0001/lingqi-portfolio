// Path-based language detection
const pathname = window.location.pathname;
let currentLang = 'en';
if (pathname.includes('/cn/') || pathname.endsWith('/cn') || pathname.endsWith('/cn/index.html')) {
  currentLang = 'zh';
} else if (pathname.includes('/en/') || pathname.endsWith('/en') || pathname.endsWith('/en/index.html')) {
  currentLang = 'en';
} else {
  currentLang = 'en'; // Root defaults to English
}


const UI_TRANSLATIONS = {
  en: {
    "header.subtitle": "Personal Website",
    "nav.overview": "Overview",
    "nav.academic": "Academic",
    "nav.projectsDesktop": "Leadership & Project",
    "nav.projectsMobile": "Projects",
    "nav.timeline": "Timeline",
    "header.emailTooltip": "Contact Email",
    "header.themeTooltip": "Toggle Color Theme",
    "dash.introTitle": "Hi, I'm Lingqi!",
    "dash.introBullet1": "Student at Centennial High School, MD.",
    "dash.introBullet2": "Passionate about Human-Computer Interaction (HCI) with a strong focus on UI/UX research and web technology.",
    "dash.introBullet3": "Rejects template frameworks to design and build custom user interfaces and digital experiences.",
    "dash.introBullet4": "Currently investigating urban navigation systems, AI model design, and interactive products.",
    "dash.locationText": "Centennial High School, MD",
    "dash.locationZhiXin": "ZhiXin High School,<br>Guangzhou, China",
    "dash.locationBNU": "Guangzhou Experimental School, Affiliated To BNU, China",
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
    "time.milestones": "Milestone Checklist",
    "dash.toeflTarget": "Target: 108–110",
    "dash.volunteerOrgs": "Organizations",
    "dash.galleryTitle": "Design Gallery",
    "dash.galleryInstruction": "Hold and spin",
    "proj.viewProject": "View Details"
  },
  zh: {
    "header.subtitle": "个人网站",
    "nav.overview": "概览",
    "nav.academic": "学术背景",
    "nav.projectsDesktop": "项目与领导力",
    "nav.projectsMobile": "项目",
    "nav.timeline": "时间线",
    "header.emailTooltip": "联系邮箱",
    "header.themeTooltip": "切换深浅色主题",
    "dash.introTitle": "你好，我是莫令琪！",
    "dash.introBullet1": "就读于 Centennial High School, MD。",
    "dash.introBullet2": "热衷于人机交互 (HCI) 领域，专注于用户体验研究与前端技术。",
    "dash.introBullet3": "拒绝套用模板框架，热衷于设计与开发独特的数字化用户界面。",
    "dash.introBullet4": "正在开展有关城市导视系统优化、AI 匹配模型及校园社区工具的实践。",
    "dash.locationText": "美国马里兰州<br>Centennial High School",
    "dash.locationZhiXin": "广州市执信中学国际部",
    "dash.locationBNU": "北京师范大学广州实验学校",
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
    "time.milestones": "规划执行里程碑清单",
    "dash.toeflTarget": "目标：108–110",
    "dash.volunteerOrgs": "机构",
    "dash.galleryTitle": "设计画廊",
    "dash.galleryInstruction": "按住光晕旋转",
    "proj.viewProject": "查看详情"
  }
};

function getActiveData() {
  return PORTFOLIO_DATA[currentLang];
}

// Disable browser scroll restoration to prevent page jumps/shifts on refresh
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

function initAll() {
  // Ensure the page starts at the absolute top on load/refresh
  window.scrollTo(0, 0);

  const initializers = [
    { name: 'Navigation', fn: initNavigation },
    { name: 'LanguageSwitch', fn: initLanguageSwitch },
    { name: 'StaticTexts', fn: () => updateStaticTexts(currentLang) },
    { name: 'Dashboard', fn: initDashboard },
    { name: 'Projects', fn: initProjects },
    { name: 'Academics', fn: initAcademics },
    { name: 'VolunteeringAndTimeline', fn: initVolunteeringAndTimeline },
    { name: 'EmailPill', fn: initEmailPill },
    { name: 'ThemeToggle', fn: initThemeToggle },
    { name: 'PaperPrompt', fn: initPaperPrompt }
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
  const mainContent = document.querySelector('.main-content');
  
  // Tab order to determine direction
  const tabOrder = ['dashboard', 'academic', 'projects', 'timeline'];
  let isTransitioning = false;

  function updateActivePill() {
    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab && activePill) {
      if (window.innerWidth <= 860) {
        activePill.style.width = `${activeTab.offsetWidth}px`;
        activePill.style.height = `${activeTab.offsetHeight}px`;
        activePill.style.left = `${activeTab.offsetLeft}px`;
        activePill.style.top = `${activeTab.offsetTop}px`;
      }
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (isTransitioning) return;

      const targetTab = tab.getAttribute('data-tab');
      const activeTabBtn = document.querySelector('.nav-tab.active');
      const currentTab = activeTabBtn ? activeTabBtn.getAttribute('data-tab') : null;

      if (currentTab === targetTab) return;

      isTransitioning = true;

      const currentIndex = tabOrder.indexOf(currentTab);
      const targetIndex = tabOrder.indexOf(targetTab);
      const direction = targetIndex > currentIndex ? 'forward' : 'backward';

      // 1. Mark active tab button immediately
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const currentSection = document.getElementById(currentTab);
      const targetSection = document.getElementById(targetTab);

      if (currentSection && targetSection) {
        // 2. Set up transition direction and active classes
        mainContent.classList.add('transitioning', direction);
        currentSection.classList.add('leaving');
        targetSection.classList.add('active', 'entering');

        // Scroll to the true top of the page when changing tabs so coordinates align
        window.scrollTo(0, 0);

        // 3. Wait for the 3D globe animation (800ms) to complete
        setTimeout(() => {
          currentSection.classList.remove('active', 'leaving');
          targetSection.classList.remove('entering');
          mainContent.classList.remove('transitioning', 'forward', 'backward');
          isTransitioning = false;
        }, 800);
      } else {
        // Fallback if elements do not exist
        sections.forEach(s => s.classList.remove('active'));
        if (targetSection) {
          targetSection.classList.add('active');
        }
        window.scrollTo(0, 0);
        isTransitioning = false;
      }

      // Defer pill calculation slightly to let browser complete flexbox layout reflows
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
  
  // Highlight active button on load based on currentLang
  langBtns.forEach(btn => {
    const isBtnZh = btn.textContent.trim() === '中';
    if ((currentLang === 'zh' && isBtnZh) || (currentLang === 'en' && !isBtnZh)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isClickingZh = btn.textContent.trim() === '中';
      const currentPath = window.location.pathname;
      const isLocalFile = window.location.protocol === 'file:';
      
      let targetUrl = '';
      if (isClickingZh) {
        if (currentPath.includes('/en/')) {
          targetUrl = currentPath.replace('/en/', '/cn/');
        } else if (currentPath.includes('/cn/')) {
          return; // Already there
        } else {
          // Dynamic redirect depending on current file
          const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
          targetUrl = isLocalFile ? `cn/${filename}` : `/cn/${filename}`;
        }
      } else {
        if (currentPath.includes('/cn/')) {
          targetUrl = currentPath.replace('/cn/', '/en/');
        } else if (currentPath.includes('/en/')) {
          return; // Already there
        } else {
          // Dynamic redirect depending on current file
          const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
          targetUrl = isLocalFile ? `en/${filename}` : `/en/${filename}`;
        }
      }
      
      if (targetUrl) {
        window.location.href = targetUrl;
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
      el.innerHTML = dict[key];
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
  renderDashCourseGrades();
  initDesignGallery();
}

function renderDashCourseGrades() {
  const dashCourseList = document.getElementById('dash-course-grades');
  if (!dashCourseList) return;

  const activeData = getActiveData();
  const courses = activeData.courses.g10g11;

  dashCourseList.innerHTML = courses.map(c => {
    // Extract the letter grade (A or B) from the grade string
    const rawGrade = c.grade.charAt(0).toUpperCase();
    const gradeClass = rawGrade === 'A' ? 'grade-a' : (rawGrade === 'B' ? 'grade-b' : '');
    return `
      <div class="course-grade-row">
        <span class="course-grade-name">${c.name}</span>
        <div class="course-grade-right">
          <span class="course-grade-badge">${c.level}</span>
          <span class="course-grade-score ${gradeClass}">${rawGrade}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Project Portfolio Section Initializer
function initProjects() {
  const activeData = getActiveData();
  
  // Initialize all project wrappers independently
  const containers = [
    {
      filters: document.querySelector('#projects .project-filters'),
      grid: document.querySelector('#projects .projects-grid')
    },
    {
      filters: document.querySelector('#dashboard .project-filters'),
      grid: document.querySelector('#dashboard .projects-grid')
    }
  ];

  containers.forEach(container => {
    const { filters, grid } = container;
    if (!grid) return;

    function renderProjects(category = 'all') {
      const currentActiveData = getActiveData();
      const filtered = category === 'all' 
        ? currentActiveData.projects 
        : currentActiveData.projects.filter(p => {
            if (Array.isArray(p.category)) {
              return p.category.includes(category);
            }
            return p.category === category;
          });

      grid.innerHTML = filtered.map(p => {
        const categoryList = Array.isArray(p.category) ? p.category : [p.category];
        const categoryText = categoryList
          .map(cat => UI_TRANSLATIONS[currentLang]["proj." + cat] || cat)
          .join(" + ");
        const dataCat = categoryList.join(" ");

        const actionBtn = p.link ? `
          <div class="project-action-wrapper" style="margin-top: 16px;">
            <a href="${p.link}" class="project-link-btn" style="
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 10px 20px;
              background: var(--text-primary);
              color: var(--action-btn-text);
              border-radius: 20px;
              text-decoration: none;
              font-family: var(--font-display);
              font-size: 0.85rem;
              font-weight: 600;
              letter-spacing: 0.5px;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)'">
              <span>${UI_TRANSLATIONS[currentLang]["proj.viewProject"] || 'View Details'}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        ` : '';

        return `
          <div class="glass-card project-card" data-category="${dataCat}">
            <div class="project-category">${categoryText}</div>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="project-tags">
              ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
            <ul class="project-highlights">
              ${p.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
            ${actionBtn}
          </div>
        `;
      }).join('');
    }

    // Setup click handlers for filters
    if (filters && !filters.dataset.listener) {
      filters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
          filters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');
          renderProjects(e.target.getAttribute('data-filter'));
        }
      });
      filters.dataset.listener = "true";
    }

    // Initial render
    const activeFilterBtn = filters ? filters.querySelector('.filter-btn.active') : null;
    const initialFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
    renderProjects(initialFilter);
  });
}

// Academic & GPA Section Initializer
function initAcademics() {
  const activeData = getActiveData();

  // Populate TOEFL Tracker
  const toeflTracks = document.querySelectorAll('.toefl-track-dynamic');
  toeflTracks.forEach(toeflTrack => {
    toeflTrack.innerHTML = activeData.toefl.map(t => {
      // Parse "Label (Date)" or "Label（Date）" to display on separate lines
      const parts = t.date.split(/[\(\)（）]/);
      const labelText = parts[0] ? parts[0].trim() : '';
      const dateText = parts[1] ? parts[1].trim() : '';
      
      return `
        <div class="toefl-node ${t.target ? 'target' : ''}">
          <div class="toefl-meta" style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px;">
            <strong class="toefl-label" style="font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; color: var(--text-primary); line-height: 1.1; white-space: nowrap;">${labelText}</strong>
            <span class="toefl-date-sub" style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 500; white-space: nowrap;">${dateText}</span>
          </div>
          <div class="toefl-scores">
            <div class="score-chip"><span>R</span><span>${t.r}</span></div>
            <div class="score-chip"><span>L</span><span>${t.l}</span></div>
            <div class="score-chip"><span>S</span><span>${t.s}</span></div>
            <div class="score-chip"><span>W</span><span>${t.w}</span></div>
          </div>
          <div class="toefl-total">${t.total}</div>
        </div>
      `;
    }).join('');
  });

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
    const btn = emailPill.querySelector('button');
    if (btn) {
      btn.addEventListener('click', (e) => {
        if (window.innerWidth <= 860) {
          e.stopPropagation();
          emailPill.classList.toggle('expanded');
        }
      });
    }

    const emailText = emailPill.querySelector('.email-text');
    if (emailText) {
      emailText.addEventListener('click', (e) => {
        if (window.innerWidth <= 860) {
          e.stopPropagation();
        }
      });
    }

    document.addEventListener('click', () => {
      if (window.innerWidth <= 860) {
        emailPill.classList.remove('expanded');
      }
    });

    // Clean up .expanded class if the user resizes to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) {
        emailPill.classList.remove('expanded');
      }
    });
  }
}

// Theme Toggle Handler
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

// Design Gallery Dial Browser Data and Logic
const DIAL_PHOTOS = [
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80", caption_en: "Modernist Villa - Integration of Light & Form", caption_zh: "现代主义别墅 - 光与影的融合" },
  { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80", caption_en: "Minimalist Abstract Geometry - Glassmorphism", caption_zh: "极简抽象几何 - 玻璃态质感" },
  { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", caption_en: "Organic Sand Textures - Natural Fluidity", caption_zh: "有机沙丘纹理 - 自然流体学" },
  { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80", caption_en: "Terracotta Courtyard - Warm Light Study", caption_zh: "红土庭院 - 暖色调光影研究" },
  { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80", caption_en: "Collaborative UI/UX Workspace Design", caption_zh: "协作式 UI/UX 工作空间设计" },
  { url: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=400&q=80", caption_en: "Human-Centered Mobile App Prototype", caption_zh: "以人为本的移动端交互原型" },
  { url: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80", caption_en: "Interactive Tangible UI Component", caption_zh: "实体交互界面组件设计" },
  { url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400&q=80", caption_en: "Heuristic Evaluation of Urban Navigation", caption_zh: "城市导视系统的启发式评估" },
  { url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=400&q=80", caption_en: "Fluid Motion & Responsive Layout Design", caption_zh: "动态流体与响应式布局设计" },
  { url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80", caption_en: "Wireframing & Information Architecture", caption_zh: "线框图与信息架构规划" },
  { url: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=400&q=80", caption_en: "Typography & Harmonious Grid Systems", caption_zh: "排版美学与和谐网格系统" },
  { url: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=400&q=80", caption_en: "Claymorphic Material Shader - Warm Tone", caption_zh: "黏土态材质着色器 - 暖色调" },
  { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80", caption_en: "Biophilic Design - Plants & Natural Light", caption_zh: "亲生物性设计 - 植被与采光" },
  { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80", caption_en: "Warm Oak & Cream Interior Concept", caption_zh: "温润橡木与奶油色室内概念" },
  { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80", caption_en: "Minimalist Product Photography - Shadows", caption_zh: "极简产品摄影 - 投影构图" },
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80", caption_en: "Structural Architecture & Geometric Angles", caption_zh: "结构建筑学与几何线条" },
  { url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80", caption_en: "Web Development - HTML5 / Vanilla CSS", caption_zh: "网页开发 - 原生 HTML5 & CSS" },
  { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", caption_en: "Data Visualization & Dashboard UI", caption_zh: "数据可视化与仪表盘用户界面" },
  { url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80", caption_en: "Human Factors & Ergonomic Engineering", caption_zh: "人机工程与可用性测试" },
  { url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80", caption_en: "Digital Art - Sculpted Clay Forms", caption_zh: "数字艺术 - 黏土微雕造型" }
];

function initDesignGallery() {
  const slidesContainer = document.getElementById('dial-photo-slides');
  const counterCurrentEl = document.getElementById('dial-current-index');
  const dialWrapper = document.getElementById('photo-dial-wrapper');
  const auroraRing = document.getElementById('aurora-ring-container');
  const touchOverlay = document.getElementById('dial-touch-overlay');

  if (!slidesContainer || !dialWrapper || !auroraRing || !touchOverlay) return;

  let currentIndex = 0;
  
  // Drag/Scrub variables
  let isDragging = false;
  let prevAngle = 0;
  let accumulatedAngle = 0;
  
  // 1. Generate images in the DOM
  slidesContainer.innerHTML = DIAL_PHOTOS.map((photo, index) => {
    return `<img src="${photo.url}" class="photo-slide ${index === 0 ? 'active' : ''}" data-index="${index}" alt="Gallery Image ${index + 1}" draggable="false">`;
  }).join('');

  function updateGalleryUI() {
    if (counterCurrentEl) counterCurrentEl.textContent = currentIndex + 1;
  }

  // Initial UI Render
  updateGalleryUI();

  // 2. Tab translation function for photos
  function switchPhoto(targetIndex, direction) {
    if (targetIndex === currentIndex) return;

    const slides = slidesContainer.querySelectorAll('.photo-slide');
    const currentSlide = slides[currentIndex];
    const targetSlide = slides[targetIndex];

    // Reset previous animation classes
    slides.forEach(s => {
       s.classList.remove('active', 'leaving-ccw', 'entering-ccw', 'leaving-cw', 'entering-cw');
    });

    // Force DOM reflow so animations restart reliably during fast scrubbing
    void slidesContainer.offsetWidth;

    if (direction === 'ccw') {
      // Counter-clockwise
      currentSlide.classList.add('leaving-ccw');
      targetSlide.classList.add('entering-ccw', 'active');
    } else {
      // Clockwise
      currentSlide.classList.add('leaving-cw');
      targetSlide.classList.add('entering-cw', 'active');
    }

    currentIndex = targetIndex;
    updateGalleryUI();
  }

  // Helper: Get angle from pointer coordinate to dial center
  function getPointerAngle(clientX, clientY) {
    const rect = dialWrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Math.atan2 returns angle in radians from -PI to PI
    // Offset by 90deg so 12 o'clock is 0
    let angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;
    return angle;
  }

  // Drag start
  function onDragStart(clientX, clientY) {
    isDragging = true;
    auroraRing.style.transition = 'none'; // Instant feedback on drag move
    prevAngle = getPointerAngle(clientX, clientY);
  }

  // Dragging
  function onDragMove(clientX, clientY) {
    if (!isDragging) return;
    
    const currentAngle = getPointerAngle(clientX, clientY);
    let deltaAngle = currentAngle - prevAngle;
    
    // Handle wrap-around math to keep rotation continuous
    if (deltaAngle < -180) deltaAngle += 360;
    if (deltaAngle > 180) deltaAngle -= 360;

    accumulatedAngle += deltaAngle;
    prevAngle = currentAngle;
    
    // Rotate the aurora ring in real-time
    auroraRing.style.transform = `rotate(${accumulatedAngle}deg)`;

    // Calculate which photo we should be on based on continuous rotation
    // 360 degrees / 20 photos = 18 degrees per photo
    let targetIndex = Math.floor(accumulatedAngle / 18) % DIAL_PHOTOS.length;
    if (targetIndex < 0) targetIndex += DIAL_PHOTOS.length; // Handle negative indices

    if (targetIndex !== currentIndex) {
      const direction = deltaAngle >= 0 ? 'cw' : 'ccw';
      switchPhoto(targetIndex, direction);
    }
  }

  // Drag release
  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    // Re-enable smooth transition
    auroraRing.style.transition = 'transform 0.05s linear';
  }

  // Bind Mouse Events
  touchOverlay.addEventListener('mousedown', (e) => {
    onDragStart(e.clientX, e.clientY);
  });

  window.addEventListener('mousemove', (e) => {
    onDragMove(e.clientX, e.clientY);
  });

  window.addEventListener('mouseup', () => {
    onDragEnd();
  });

  // Bind Touch Events
  touchOverlay.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      onDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length > 0) {
      e.preventDefault(); // Prevent page scrolling while dragging
      onDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: false });

  window.addEventListener('touchend', () => {
    onDragEnd();
  });
}

function initPaperPrompt() {
  const pathname = window.location.pathname;
  if (pathname.includes('socialmediaportfolio.html')) {
    return;
  }

  if (sessionStorage.getItem('paperPromptShown') === 'true') {
    return;
  }

  const promptTexts = {
    en: {
      title: "Featured Research Paper",
      message: "Would you like to view Lingqi Mo's independent research on <strong>Social Media and Teen Mental Health</strong>?",
      yes: "View Research Paper",
      no: "Explore Portfolio"
    },
    zh: {
      title: "推荐学术论文",
      message: "您是否想要查看莫令琪关于<strong>《社交媒体与青少年心理健康》</strong>的独立学术研究成果？",
      yes: "查看研究论文",
      no: "浏览个人作品集"
    }
  };

  const texts = promptTexts[currentLang] || promptTexts.en;

  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'paper-prompt-overlay';
  modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease;
  `;

  const modalContainer = document.createElement('div');
  modalContainer.className = 'glass-card';
  modalContainer.style.cssText = `
    max-width: 480px;
    width: 90%;
    padding: 36px;
    border-radius: 28px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
    text-align: center;
    transform: scale(0.9);
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: var(--card-bg);
    border: 1px solid var(--glass-border);
  `;

  modalContainer.innerHTML = `
    <div style="
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--text-primary);
      color: var(--action-btn-text);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px auto;
    ">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
    </div>
    <h3 style="
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 12px;
    ">${texts.title}</h3>
    <p style="
      color: var(--text-primary);
      font-size: 1.05rem;
      line-height: 1.6;
      margin-bottom: 28px;
    ">${texts.message}</p>
    <div style="
      display: flex;
      flex-direction: column;
      gap: 12px;
    ">
      <a href="socialmediaportfolio.html" id="btn-goto-paper" style="
        display: block;
        padding: 14px 24px;
        background: var(--text-primary);
        color: var(--action-btn-text);
        border-radius: 18px;
        text-decoration: none;
        font-family: var(--font-display);
        font-weight: 600;
        font-size: 0.95rem;
        transition: transform 0.2s, opacity 0.2s;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      " onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='translateY(0)'">${texts.yes}</a>
      <button id="btn-close-prompt" style="
        background: transparent;
        border: 1px solid var(--glass-border);
        color: var(--text-primary);
        padding: 14px 24px;
        border-radius: 18px;
        font-family: var(--font-display);
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        transition: background 0.2s;
      " onmouseover="this.style.background='rgba(0,0,0,0.03)'" onmouseout="this.style.background='transparent'">${texts.no}</button>
    </div>
  `;

  modalOverlay.appendChild(modalContainer);
  document.body.appendChild(modalOverlay);

  setTimeout(() => {
    modalOverlay.style.opacity = '1';
    modalContainer.style.transform = 'scale(1)';
  }, 100);

  const closeBtn = modalContainer.querySelector('#btn-close-prompt');
  const gotoBtn = modalContainer.querySelector('#btn-goto-paper');

  function dismissModal() {
    sessionStorage.setItem('paperPromptShown', 'true');
    modalOverlay.style.opacity = '0';
    modalContainer.style.transform = 'scale(0.9)';
    setTimeout(() => {
      modalOverlay.remove();
    }, 400);
  }

  closeBtn.addEventListener('click', dismissModal);
  gotoBtn.addEventListener('click', () => {
    sessionStorage.setItem('paperPromptShown', 'true');
  });
}



