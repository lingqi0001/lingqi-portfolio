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
    "page.title": "Lingqi Mo's Personal Website",
    "header.subtitle": "Personal Website",
    "nav.overview": "Overview",
    "nav.academic": "Academic",
    "nav.projectsDesktop": "Leadership & Project",
    "nav.projectsMobile": "Projects",
    "nav.timeline": "Volunteering",
    "header.emailTooltip": "Contact Email",
    "header.themeTooltip": "Toggle Color Theme",
    "dash.introTitle": "Hi, I'm Lingqi!",
    "dash.introBullet1": "Student at Centennial High School, MD.",
    "dash.introBullet2": "Passionate about Human-Computer Interaction (HCI) with a strong focus on UI/UX research and web technology.",
    "dash.introBullet3": "Builds custom user interfaces for better digital experiences.",
    "dash.introBullet4": "Thrilled to create impactful educational tools for students and teachers, bridging intuitive software with hands-on hardware prototyping.",
    "dash.locationText": "Centennial High School, MD",
    "dash.locationZhiXin": "ZhiXin High School, Guangzhou, China",
    "dash.locationBNU": "Guangzhou Experimental School, Affiliated To BNU, China",
    "dash.locationTimeText1": "2025 – 2027",
    "dash.locationTimeText2": "2024 – 2025",
    "dash.locationTimeText3": "2023 – 2024",
    "dash.profileIndex": "Admissions & Profile Index",
    "dash.primaryMajor": "Primary Major Target",
    "dash.secondaryFocus": "Secondary Focus",
    "dash.volunteering": "Volunteering",
    "dash.bestToefl": "Best TOEFL",
    "dash.competitions": "Competitions",
    "dash.estimatedGpa": "Estimated GPA",
    "dash.checkpoints": "Execution Checkpoints",
    "acad.gpaHistory": "GPA Profile History",
    "acad.gpaSub": "Overview of yearly grades and credits:",
    "acad.yearCol": "Academic Year",
    "acad.gpaCol": "GPA (UW)",
    "acad.creditsCol": "Credits",
    "acad.grade9": "9th Grade",
    "acad.grade10": "10th Grade",
    "acad.grade11": "11th Grade",
    "acad.grade12": "12th Grade (Estimated)",
    "acad.cumulative": "Cumulative GPA",
    "acad.compTests": "Competitions & Standardized Tests",
    "acad.usacoTitle": "USACO (Computing Olympiad)",
    "acad.usacoSub": "Silver Division Qualified",
    "acad.promoted": "PROMOTED",
    "acad.toeflScoreboard": "TOEFL Scoreboard",
    "acad.course1011": "Grade 10-11 Coursework & Results",
    "acad.courseCol": "Course Title",
    "acad.resultCol": "Final Result",
    "acad.levelCol": "Course Level",
    "acad.course12": "Grade 12 Academic Plan",
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
    "dash.toeflNote": "* Note: The Listening 28 score was taken under the NEEC system, which is separate from ets.org TOEFL records; the MyBest score on ETS is officially recorded as 100.",
    "dash.volunteerOrgs": "Organizations",
    "dash.galleryTitle": "Design Gallery",
    "dash.galleryInstruction": "Hold and spin",
    "dash.galleryExpand": "Expand",
    "proj.viewProject": "View Details"
  },
  zh: {
    "page.title": "莫令琪的个人主页",
    "header.subtitle": "个人主页",
    "nav.overview": "概览",
    "nav.academic": "学术背景",
    "nav.projectsDesktop": "项目与领导力",
    "nav.projectsMobile": "项目",
    "nav.timeline": "志愿",
    "header.emailTooltip": "联系邮箱",
    "header.themeTooltip": "切换深浅色主题",
    "dash.introTitle": "你好，我是莫令琪！",
    "dash.introBullet1": "就读于 Centennial High School, MD。",
    "dash.introBullet2": "热衷于人机交互 (HCI) 领域，专注于用户体验研究与前端技术。",
    "dash.introBullet3": "设计与构建定制化用户界面，提供更优质的数字化交互体验。",
    "dash.introBullet4": "热衷于为师生打造高实用性与影响力的教育产品，将软件设计与实体硬件原型研发相结合。",
    "dash.locationText": "美国马里兰州 Centennial High School",
    "dash.locationZhiXin": "广州市执信中学国际部",
    "dash.locationBNU": "北京师范大学广州实验学校",
    "dash.locationTimeText1": "2025 – 2027",
    "dash.locationTimeText2": "2024 – 2025",
    "dash.locationTimeText3": "2023 – 2024",
    "dash.profileIndex": "录取与个人档案指标",
    "dash.primaryMajor": "主申专业方向",
    "dash.secondaryFocus": "细分/次要方向",
    "dash.volunteering": "志愿服务",
    "dash.bestToefl": "托福最佳成绩",
    "dash.competitions": "学术竞赛",
    "dash.estimatedGpa": "预估 GPA",
    "dash.checkpoints": "近期执行里程碑",
    "acad.gpaHistory": "GPA 历史",
    "acad.gpaSub": "学年成绩及学分概览：",
    "acad.yearCol": "学年",
    "acad.gpaCol": "GPA (未加权)",
    "acad.creditsCol": "学分",
    "acad.grade9": "九年级",
    "acad.grade10": "十年级",
    "acad.grade11": "十一年级",
    "acad.grade12": "十二年级 (预估)",
    "acad.cumulative": "累计 GPA",
    "acad.compTests": "学术竞赛与标化考试",
    "acad.usacoTitle": "USACO (美国计算机奥林匹克竞赛)",
    "acad.usacoSub": "晋级银牌组 (Silver Division)",
    "acad.promoted": "已晋级",
    "acad.toeflScoreboard": "托福成绩看板",
    "acad.course1011": "十年级至十一年级已修课程与成绩",
    "acad.courseCol": "课程名称",
    "acad.resultCol": "最终成绩",
    "acad.levelCol": "课程级别",
    "acad.course12": "十二年级课程学术规划",
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
    "dash.toeflNote": "* 注：听力28分属于NEEC体系下的考试，成绩与ets.org托福系统不互通，因此ETS官方记录的MyBest Score为100分。",
    "dash.volunteerOrgs": "机构",
    "dash.galleryTitle": "设计画廊",
    "dash.galleryInstruction": "按住光晕旋转",
    "dash.galleryExpand": "全屏预览",
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
    { name: 'ImageLightbox', fn: initImageLightbox },
    { name: 'CaseStudyModal', fn: initCaseStudyModal }
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

        // Recalculate grid items height immediately when it becomes display: block/grid
        document.querySelectorAll('.projects-grid').forEach(grid => {
          if (typeof resizeGridItems === 'function') {
            resizeGridItems(grid);
          }
        });

        // Scroll to the true top of the page when changing tabs so coordinates align
        window.scrollTo(0, 0);

        // 3. Wait for the 3D globe animation (800ms) to complete
        setTimeout(() => {
          currentSection.classList.remove('active', 'leaving');
          targetSection.classList.remove('entering');
          mainContent.classList.remove('transitioning', 'forward', 'backward');
          isTransitioning = false;
          
          document.querySelectorAll('.projects-grid').forEach(grid => {
            if (typeof resizeGridItems === 'function') {
              resizeGridItems(grid);
            }
          });
        }, 800);
      } else {
        // Fallback if elements do not exist
        sections.forEach(s => s.classList.remove('active'));
        if (targetSection) {
          targetSection.classList.add('active');
          document.querySelectorAll('.projects-grid').forEach(grid => {
            if (typeof resizeGridItems === 'function') {
              resizeGridItems(grid);
            }
          });
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

  // Page title
  if (dict["page.title"]) {
    document.title = dict["page.title"];
  }

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

  // Set up click listener on Volunteering card to jump to Timeline/Volunteering tab
  const volHeroRow = document.querySelector('.volunteer-hero-row');
  if (volHeroRow) {
    volHeroRow.addEventListener('click', () => {
      const timelineTab = document.querySelector('.nav-tab[data-tab="timeline"]');
      if (timelineTab) {
        timelineTab.click();
        
        // Wait for tab transition animation, then scroll to the volunteering log section
        setTimeout(() => {
          const targetEl = document.getElementById('volunteering-log');
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 850);
      }
    });
  }
}

function renderDashCourseGrades() {
  const dashCourseList = document.getElementById('dash-course-grades');
  if (!dashCourseList) return;

  const activeData = getActiveData();
  const g10g11 = activeData.courses.g10g11;
  const g12 = activeData.courses.g12.map(c => ({
    name: c.name,
    grade: c.expected,
    level: c.level || ''
  }));
  const combined = [...g10g11, ...g12];

  // Sort AP courses first
  const courses = combined.sort((a, b) => {
    const isAP_a = a.level === 'AP';
    const isAP_b = b.level === 'AP';
    if (isAP_a && !isAP_b) return -1;
    if (!isAP_a && isAP_b) return 1;
    return 0;
  });

  const isZh = currentLang === 'zh';

  dashCourseList.innerHTML = courses.map(c => {
    let displayGrade = '';
    let gradeClass = '';

    if (c.name.toLowerCase().includes('calculus') || c.name.toLowerCase().includes('微积分')) {
      displayGrade = isZh ? 'B (AP 5分)' : 'B (AP 5)';
      gradeClass = 'grade-b';
    } else if (c.grade === 'Self-study' || c.grade === '自学') {
      displayGrade = isZh ? '自学' : 'Self-study';
      gradeClass = '';
    } else {
      const rawGrade = c.grade.charAt(0).toUpperCase();
      displayGrade = rawGrade;
      gradeClass = rawGrade === 'A' ? 'grade-a' : (rawGrade === 'B' ? 'grade-b' : '');
    }

    return `
      <div class="course-grade-row">
        <span class="course-grade-name">${c.name}</span>
        <div class="course-grade-right">
          <span class="course-grade-badge">${c.level}</span>
          <span class="course-grade-score ${gradeClass}">${displayGrade}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Helper for CSS Grid Masonry layout
function resizeGridItems(grid) {
  if (!grid) return;
  const items = grid.querySelectorAll('.project-card, .dash-stats-panel');
  items.forEach(item => {
    item.style.gridRowEnd = 'auto';
    const height = Math.max(item.scrollHeight, item.getBoundingClientRect().height);
    const rowSpan = Math.ceil(height + 24); // 1px auto-rows, 0 row-gap, 24px virtual bottom margin
    item.style.gridRowEnd = `span ${rowSpan}`;
  });
}

function resolveAssetPath(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/') || path.startsWith('data:')) {
    return path;
  }
  const isSubFolder = pathname.includes('/cn/') || pathname.includes('/en/') || pathname.endsWith('/cn') || pathname.endsWith('/en');
  return isSubFolder ? `../${path}` : path;
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
      const isDashboard = !!grid.closest('#dashboard');
      
      const sortOrder = [
        'epaper-assistant',
        'chschat-xyz',
        'script-killing-intern',
        'xia-zao-film',
        'usaco',
        'gz-traffic-video',
        'youth-league-video',
        'badminton-club',
        'tedx-organizer',
        'tianhe-ux',
        'teen-mental-health-research',
        'personal-web'
      ];

      const sortedProjects = [...currentActiveData.projects]
        .filter(p => !(isDashboard && p.dashboardHidden))
        .sort((a, b) => {
          const indexA = sortOrder.indexOf(a.id);
          const indexB = sortOrder.indexOf(b.id);
          return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
        });

      const filtered = category === 'all' 
        ? sortedProjects 
        : sortedProjects.filter(p => {
            if (Array.isArray(p.category)) {
              return p.category.includes(category);
            }
            return p.category === category;
          });

      let cardsHtml = filtered.map(p => {
        const categoryList = Array.isArray(p.category) ? p.category : [p.category];
        const categoryText = categoryList
          .map(cat => UI_TRANSLATIONS[currentLang]["proj." + cat] || cat)
          .join(" + ");
        const dataCat = categoryList.join(" ");

        const isExternal = p.link && (p.link.startsWith('http://') || p.link.startsWith('https://'));
        const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
        const btnLabel = p.linkText ? p.linkText : (isExternal ? (currentLang === 'zh' ? '在线体验' : 'Live Demo') : (UI_TRANSLATIONS[currentLang]["proj.viewProject"] || 'View Details'));

        const rawImages = p.images || p.image;
        const imgList = rawImages ? (Array.isArray(rawImages) ? rawImages : [rawImages]) : [];
        const rawPositions = p.imagePositions || p.imagePosition;
        const posList = rawPositions ? (Array.isArray(rawPositions) ? rawPositions : [rawPositions]) : [];

        let imageHtml = '';
        const safeTitle = (p.title || '').replace(/'/g, "\\'");
        if (imgList.length === 1) {
          const pos = posList[0] || 'center center';
          const src = resolveAssetPath(imgList[0]);
          imageHtml = `
            <div class="project-image-container expandable-img-wrapper" style="
              width: 100%;
              margin-bottom: 16px;
              border-radius: 16px;
              overflow: hidden;
              border: 1px solid var(--glass-border);
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
              background: rgba(246, 238, 230, 0.35);
            " onclick="openImageLightbox('${src}', '${safeTitle}', '${p.id}')" title="点击放大查看 / Click to enlarge">
              <img src="${src}" alt="${p.title}" style="
                width: 100%;
                height: 200px;
                object-fit: cover;
                object-position: ${pos};
                display: block;
                border-radius: 15px;
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              " onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'" onload="if (typeof resizeGridItems === 'function') { const g = this.closest('.projects-grid'); if (g) resizeGridItems(g); }">
              <div class="img-zoom-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </div>
            </div>
          `;
        } else if (imgList.length > 1) {
          imageHtml = `
            <div class="project-image-grid" style="
              display: grid;
              grid-template-columns: repeat(${Math.min(imgList.length, 2)}, 1fr);
              gap: 10px;
              width: 100%;
              margin-bottom: 16px;
            ">
              ${imgList.map((imgSrc, idx) => {
                const pos = posList[idx] || (idx === 0 ? 'left top' : 'center top');
                const src = resolveAssetPath(imgSrc);
                return `
                <div class="project-image-container expandable-img-wrapper" style="
                  border-radius: 14px;
                  overflow: hidden;
                  border: 1px solid var(--glass-border);
                  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
                  background: rgba(246, 238, 230, 0.35);
                  height: 160px;
                " onclick="openImageLightbox('${src}', '${safeTitle}', '${p.id}')" title="点击放大查看 / Click to enlarge">
                  <img src="${src}" alt="${p.title}" style="
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: ${pos};
                    display: block;
                    border-radius: 13px;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                  " onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'" onload="if (typeof resizeGridItems === 'function') { const g = this.closest('.projects-grid'); if (g) resizeGridItems(g); }">
                  <div class="img-zoom-hint">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  </div>
                </div>
              `}).join('')}
            </div>
          `;
        }

        const actionBtn = p.link ? `
          <div class="project-action-wrapper" style="margin-top: 16px;">
            <a href="${p.link}" ${targetAttr} class="project-link-btn" style="
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
              <span>${btnLabel}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        ` : '';

        const highlightsHtml = (p.highlights && p.highlights.length > 0) ? `
            <ul class="project-highlights">
              ${p.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        ` : '';

        const caseStudyHtml = p.caseStudy ? `
          <div class="project-case-study-trigger" style="margin-top: 14px;">
            <button class="case-study-pill-btn" onclick="openCaseStudyModal('${p.id}')" title="Click to explore architecture case study / 点击查看深度架构探究">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <span>${p.caseStudy.badgeText}</span>
              <svg class="case-study-arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        ` : '';

        const hasLinkClass = p.link ? 'has-link' : '';
        return `
          <div class="glass-card project-card ${hasLinkClass}" data-category="${dataCat}" data-project-id="${p.id}" id="project-card-${p.id}">
            <div class="project-category">${categoryText}</div>
            <h3>${p.title}</h3>
            ${imageHtml}
            <p>${p.description}</p>
            <div class="project-tags">
              ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
            ${highlightsHtml}
            ${caseStudyHtml}
            ${actionBtn}
          </div>
        `;
      }).join('');

      if (isDashboard) {
        const isZh = currentLang === 'zh';
        const viewMoreTitle = isZh ? '查看更多项目与领导力' : 'View More Projects';
        const viewMoreSub = isZh 
          ? '在完整作品集板块探索所有详细的 UX 交互调研、硬件原型、实用工具及社区领导力实践。' 
          : 'Explore all detailed UX case studies, hardware prototypes, interactive tools, and community initiatives in the full portfolio.';
        const viewMoreBtn = isZh ? '浏览全部项目' : 'View All Projects';
        const viewMoreCategory = isZh ? '作品集归档' : 'FULL ARCHIVE';

        const viewMoreCardHtml = `
          <div class="glass-card project-card view-more-projects-card" onclick="document.querySelector('.nav-tab[data-tab=\\'projects\\']').click()" style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            min-height: 220px;
          ">
            <div>
              <div class="project-category" style="color: var(--text-secondary); letter-spacing: 0.08em;">${viewMoreCategory}</div>
              <h3 style="font-size: 1.35rem; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
                <span>${viewMoreTitle}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-primary); transition: transform 0.3s ease;">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </h3>
              <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">${viewMoreSub}</p>
            </div>
            <div style="margin-top: auto;">
              <div class="project-link-btn" style="
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 9px 18px;
                background: var(--text-primary);
                color: var(--action-btn-text);
                border-radius: 20px;
                font-family: var(--font-display);
                font-size: 0.85rem;
                font-weight: 600;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                pointer-events: none;
              ">
                <span>${viewMoreBtn}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>
        `;
        cardsHtml += viewMoreCardHtml;

        grid.querySelectorAll('.project-card').forEach(el => el.remove());
        grid.insertAdjacentHTML('beforeend', cardsHtml);
      } else {
        grid.innerHTML = cardsHtml;
      }
      resizeGridItems(grid); // Synchronous rendering to avoid layout shift flash
      setTimeout(() => resizeGridItems(grid), 50); // Asynchronous fallback for delayed layout settles
    }

    // Setup click handlers for filters
    if (filters && !filters.dataset.listener) {
      filters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
          if (e.target.classList.contains('active')) return; // Prevent re-filtering active category
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

    // Watch for resize/load/fonts to adjust heights
    window.addEventListener('resize', () => resizeGridItems(grid));
    window.addEventListener('load', () => resizeGridItems(grid));
    if (document.fonts) {
      document.fonts.ready.then(() => resizeGridItems(grid));
    }
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
    }).join('') + (activeData.toeflNote ? `
      <div class="toefl-hero-footnote" style="margin-top: 10px; font-size: 0.76rem; color: var(--text-secondary); line-height: 1.5;">
        ${activeData.toeflNote}
      </div>
    ` : '');
  });

  // Populate GPA Tables (localized column labels for mobile view)
  const isZh = currentLang === 'zh';
  const labelResult = isZh ? "最终成绩" : "Final Result";
  const labelLevel = isZh ? "课程级别" : "Course Level";
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
        <td data-label="${labelLevel}"><span class="badge-gt">${c.level}</span></td>
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
  { url: "Photos/Photo of DIY.jpg", caption_en: "Moss's DIY - Smart E-Paper Educator Assistant Hardware", caption_zh: "Moss's DIY - 智能墨水屏答题与教务助手硬件原型", projectId: "epaper-assistant" },
  { url: "Photos/xiazao.png", caption_en: "Atmospheric Short Film - 'Summer Noise' (夏噪)", caption_zh: "情绪氛围短片 - 《夏噪》导演作品", projectId: "xia-zao-film" },
  { url: "Photos/CHSchat.png", caption_en: "CHSchat.xyz - Centennial HS Hub Web Dashboard", caption_zh: "CHSchat.xyz - Centennial 校园枢纽主界面", projectId: "chschat-xyz" },
  { url: "Photos/CHSchat-tool.png", caption_en: "CHSchat Custom Utility Tools & Student Workflows", caption_zh: "CHSchat 定制化高中生实用工具集", projectId: "chschat-xyz" },
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
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80", caption_en: "Structural Architecture & Geometric Angles", caption_zh: "结构建筑学与几何线条" }
];

// Global Gallery and Lightbox synchronization state
let currentLightboxGalleryIndex = -1;
let _syncGalleryFn = null;

function initDesignGallery() {
  const slidesContainer = document.getElementById('dial-photo-slides');
  const counterCurrentEl = document.getElementById('dial-current-index');
  const dialWrapper = document.getElementById('photo-dial-wrapper');
  const auroraRing = document.getElementById('aurora-ring-container');
  const touchOverlay = document.getElementById('dial-touch-overlay');

  if (!slidesContainer || !dialWrapper || !auroraRing || !touchOverlay) return;

  let currentIndex = 0;
  
  // Drag/Scrub & Click detection variables
  let isDragging = false;
  let hasMoved = false;
  let prevAngle = 0;
  let accumulatedAngle = 0;
  let downPos = { x: 0, y: 0, time: 0 };
  
  // 1. Generate images in the DOM
  slidesContainer.innerHTML = DIAL_PHOTOS.map((photo, index) => {
    return `<img src="${resolveAssetPath(photo.url)}" class="photo-slide ${index === 0 ? 'active' : ''}" data-index="${index}" alt="Gallery Image ${index + 1}" draggable="false">`;
  }).join('');

  function openCurrentDialPhoto() {
    const photo = DIAL_PHOTOS[currentIndex];
    if (!photo) return;
    const caption = currentLang === 'zh' ? (photo.caption_zh || '') : (photo.caption_en || '');
    openImageLightbox(resolveAssetPath(photo.url), caption, photo.projectId, currentIndex);
  }

  // Bind expand button in header
  const expandHeaderBtn = document.getElementById('dial-expand-action-btn');
  if (expandHeaderBtn && !expandHeaderBtn.dataset.listener) {
    expandHeaderBtn.dataset.listener = 'true';
    expandHeaderBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCurrentDialPhoto();
    });
  }

  function updateGalleryUI() {
    if (counterCurrentEl) counterCurrentEl.textContent = currentIndex + 1;
  }

  // Initial UI Render
  updateGalleryUI();

  // 3. Tab translation function for photos
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

  // External sync callback for Lightbox
  _syncGalleryFn = function(targetIndex) {
    targetIndex = ((targetIndex % DIAL_PHOTOS.length) + DIAL_PHOTOS.length) % DIAL_PHOTOS.length;
    const slides = slidesContainer.querySelectorAll('.photo-slide');
    slides.forEach(s => {
      s.classList.remove('active', 'leaving-ccw', 'entering-ccw', 'leaving-cw', 'entering-cw');
    });
    if (slides[targetIndex]) {
      slides[targetIndex].classList.add('active');
    }
    currentIndex = targetIndex;
    accumulatedAngle = targetIndex * 18;
    auroraRing.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
    auroraRing.style.transform = `rotate(${accumulatedAngle}deg)`;
    updateGalleryUI();
  };

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
    hasMoved = false;
    downPos = { x: clientX, y: clientY, time: Date.now() };
    auroraRing.style.transition = 'none'; // Instant feedback on drag move
    prevAngle = getPointerAngle(clientX, clientY);
  }

  // Dragging
  function onDragMove(clientX, clientY) {
    if (!isDragging) return;
    
    const moveDist = Math.hypot(clientX - downPos.x, clientY - downPos.y);
    if (moveDist > 6) {
      hasMoved = true;
    }

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
  function onDragEnd(clientX, clientY) {
    if (!isDragging) return;
    isDragging = false;
    auroraRing.style.transition = 'transform 0.05s linear';

    // If user tapped/clicked without substantial dragging, open in Lightbox!
    const elapsed = Date.now() - downPos.time;
    if (!hasMoved && elapsed < 350) {
      openCurrentDialPhoto();
    }
  }

  // Bind Mouse Events
  touchOverlay.addEventListener('mousedown', (e) => {
    onDragStart(e.clientX, e.clientY);
  });

  window.addEventListener('mousemove', (e) => {
    onDragMove(e.clientX, e.clientY);
  });

  window.addEventListener('mouseup', (e) => {
    onDragEnd(e.clientX, e.clientY);
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

  window.addEventListener('touchend', (e) => {
    const touch = e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches[0] : { clientX: downPos.x, clientY: downPos.y };
    onDragEnd(touch.clientX, touch.clientY);
  });
}

// ==========================================================================
// Image Lightbox Preview System
// ==========================================================================
function initImageLightbox() {
  if (document.getElementById('image-lightbox-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'image-lightbox-modal';
  modal.className = 'lightbox-modal';
  modal.innerHTML = `
    <button class="lightbox-close-btn" aria-label="Close image preview" title="关闭预览 / Close">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <button class="lightbox-nav-btn prev-btn" id="lightbox-prev-btn" aria-label="Previous Image" title="上一张 / Previous (←)">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button class="lightbox-nav-btn next-btn" id="lightbox-next-btn" aria-label="Next Image" title="下一张 / Next (→)">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="lightbox-content-card">
      <div class="lightbox-image-frame">
        <img id="lightbox-preview-img" src="" alt="Project Image Preview">
      </div>
      <div class="lightbox-caption-pill" id="lightbox-preview-caption"></div>
      <div id="lightbox-preview-actions" style="display: flex; gap: 12px; align-items: center; justify-content: center;"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.lightbox-close-btn');
  closeBtn.addEventListener('click', closeImageLightbox);

  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightboxGallery(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightboxGallery(1);
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-content-card')) {
      closeImageLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeImageLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightboxGallery(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightboxGallery(1);
      }
    }
  });
}

function openImageLightbox(src, title, projectId, galleryIndex = -1) {
  initImageLightbox();
  currentLightboxGalleryIndex = galleryIndex;

  const modal = document.getElementById('image-lightbox-modal');
  const imgEl = document.getElementById('lightbox-preview-img');
  const captionEl = document.getElementById('lightbox-preview-caption');
  const actionsEl = document.getElementById('lightbox-preview-actions');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (!modal || !imgEl) return;

  imgEl.src = src;
  imgEl.alt = title || '';

  if (title && title.trim()) {
    captionEl.textContent = title;
    captionEl.style.display = 'block';
  } else {
    captionEl.style.display = 'none';
  }

  if (actionsEl) {
    if (projectId) {
      actionsEl.innerHTML = `
        <button class="lightbox-project-jump-btn" onclick="jumpToProjectCard('${projectId}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <span>${currentLang === 'zh' ? '在作品集中查看对应项目详情' : 'View Project Details in Portfolio'}</span>
        </button>
      `;
      actionsEl.style.display = 'flex';
    } else {
      actionsEl.innerHTML = '';
      actionsEl.style.display = 'none';
    }
  }

  // Show/Hide prev & next buttons depending on whether opened from gallery
  if (galleryIndex >= 0) {
    if (prevBtn) prevBtn.style.display = 'flex';
    if (nextBtn) nextBtn.style.display = 'flex';
    if (typeof _syncGalleryFn === 'function') {
      _syncGalleryFn(galleryIndex);
    }
  } else {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function navigateLightboxGallery(step) {
  if (currentLightboxGalleryIndex < 0) return;
  const newIndex = ((currentLightboxGalleryIndex + step) % DIAL_PHOTOS.length + DIAL_PHOTOS.length) % DIAL_PHOTOS.length;
  currentLightboxGalleryIndex = newIndex;

  const photo = DIAL_PHOTOS[newIndex];
  const caption = currentLang === 'zh' ? (photo.caption_zh || '') : (photo.caption_en || '');

  const imgEl = document.getElementById('lightbox-preview-img');
  const captionEl = document.getElementById('lightbox-preview-caption');
  const actionsEl = document.getElementById('lightbox-preview-actions');

  if (imgEl) {
    imgEl.style.opacity = '0';
    imgEl.style.transform = 'scale(0.97)';
    imgEl.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    setTimeout(() => {
      imgEl.src = resolveAssetPath(photo.url);
      imgEl.alt = caption;
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    }, 150);
  }

  if (captionEl) {
    captionEl.textContent = caption;
    captionEl.style.display = caption ? 'block' : 'none';
  }

  if (actionsEl) {
    if (photo.projectId) {
      actionsEl.innerHTML = `
        <button class="lightbox-project-jump-btn" onclick="jumpToProjectCard('${photo.projectId}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <span>${currentLang === 'zh' ? '在作品集中查看对应项目详情' : 'View Project Details in Portfolio'}</span>
        </button>
      `;
      actionsEl.style.display = 'flex';
    } else {
      actionsEl.innerHTML = '';
      actionsEl.style.display = 'none';
    }
  }

  // Real-time synchronization with Design Gallery dial on overview page!
  if (typeof _syncGalleryFn === 'function') {
    _syncGalleryFn(newIndex);
  }
}

function closeImageLightbox() {
  const modal = document.getElementById('image-lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  // Ensure the gallery dial on the overview page stays aligned on the exact last viewed index
  if (currentLightboxGalleryIndex >= 0 && typeof _syncGalleryFn === 'function') {
    _syncGalleryFn(currentLightboxGalleryIndex);
  }
}

// Jump from gallery/lightbox directly to the project card in the Projects tab
function jumpToProjectCard(projectId) {
  if (!projectId) return;
  closeImageLightbox();

  const projTab = document.querySelector('.nav-tab[data-tab="projects"]');
  if (projTab) {
    projTab.click();

    setTimeout(() => {
      // Ensure "All" filter is active to show the target card
      const allFilter = document.querySelector('#projects .filter-btn[data-filter="all"]');
      if (allFilter && !allFilter.classList.contains('active')) {
        allFilter.click();
      }

      setTimeout(() => {
        const targetCard = document.querySelector(`#projects .project-card[data-project-id="${projectId}"]`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.remove('card-highlight-pulse');
          void targetCard.offsetWidth; // Force reflow
          targetCard.classList.add('card-highlight-pulse');
          setTimeout(() => targetCard.classList.remove('card-highlight-pulse'), 2500);
        }
      }, 120);
    }, 850);
  }
}

// ==========================================================================
// Case Study Modal System (HCI / Technical Deep Dive)
// ==========================================================================
function initCaseStudyModal() {
  if (document.getElementById('protocolModal')) return;

  const modal = document.createElement('div');
  modal.id = 'protocolModal';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-container">
      <div class="modal-header">
        <span class="modal-title" id="caseStudyModalTitle">HCI Case Study</span>
        <button class="modal-close" onclick="closeCaseStudyModal()">&times;</button>
      </div>
      <div class="modal-body" id="caseStudyModalBody">
        <!-- Injected dynamically -->
      </div>
    </div>
  `;
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCaseStudyModal();
    }
  });
  document.body.appendChild(modal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCaseStudyModal();
    }
  });
}

// ==========================================
// Three-Layer Navigation Showcase Controllers & Renderer
// ==========================================
let v4IsNavExpanded = false;
let v4CurrentPrimaryTab = 'school';

function v4UpdatePrimaryTabUI() {
  const schoolBtn = document.getElementById('v4_btnMorphSchool');
  const clubBtn = document.getElementById('v4_btnMorphClub');
  const statusText = document.getElementById('v4_currentStatusText');
  if (!schoolBtn || !clubBtn || !statusText) return;

  if (v4CurrentPrimaryTab === 'school') {
    schoolBtn.style.color = '#ffffff';
    schoolBtn.style.background = '#2C2C2E';
    clubBtn.style.color = '#8E8E93';
    clubBtn.style.background = 'transparent';
    statusText.innerText = "School News";
  } else {
    schoolBtn.style.color = '#8E8E93';
    schoolBtn.style.background = 'transparent';
    clubBtn.style.color = '#ffffff';
    clubBtn.style.background = '#2C2C2E';
    statusText.innerText = "Club News";
  }
}

function v4SelectPrimaryTab(tabType, e) {
  if (e) e.stopPropagation();
  v4CurrentPrimaryTab = tabType;
  if (v4IsNavExpanded) {
    v4CollapseMorphNav();
  } else {
    v4UpdatePrimaryTabUI();
  }
}

function v4SelectSubTab(tabId, e) {
  if (e) e.stopPropagation();
  const tabs = ['joint', 'discover', 'events'];
  const names = { 'joint': 'My Joint Clubs', 'discover': 'Discover New Clubs', 'events': 'Recent Club Events' };
  const statusText = document.getElementById('v4_currentStatusText');

  tabs.forEach(id => {
    const btn = document.getElementById('v4_subTab_' + id);
    if (!btn) return;
    if (id === tabId) {
      btn.style.color = '#ffffff';
      btn.style.background = '#2C2C2E';
      if (statusText) statusText.innerText = names[id];
    } else {
      btn.style.color = '#8E8E93';
      btn.style.background = 'transparent';
    }
  });
}

function v4ExpandMorphNav(e) {
  if (e) e.stopPropagation();
  if (v4IsNavExpanded) return;
  v4IsNavExpanded = true;

  const schoolBtn = document.getElementById('v4_btnMorphSchool');
  const clubBtn = document.getElementById('v4_btnMorphClub');
  const schoolText = document.getElementById('v4_textSchoolFull');
  const clubText = document.getElementById('v4_textClubFull');
  const discoverBlock = document.getElementById('v4_discoverPillBlock');
  const iconWrapper = document.getElementById('v4_discoverIconWrapper');
  const subTabs = document.getElementById('v4_subClubTabs');

  if (!schoolBtn || !clubBtn || !schoolText || !clubText || !discoverBlock || !iconWrapper || !subTabs) return;

  // 1. S and C become plain text
  schoolBtn.style.color = '#8E8E93';
  schoolBtn.style.background = 'transparent';
  clubBtn.style.color = '#8E8E93';
  clubBtn.style.background = 'transparent';

  // 2. Discover container removes background to let child active tabs render background
  discoverBlock.style.background = 'transparent';

  // 3. Text morphing animation
  schoolText.style.maxWidth = "0px";
  schoolText.style.opacity = "0";
  clubText.style.maxWidth = "0px";
  clubText.style.opacity = "0";

  schoolBtn.style.maxWidth = "26px";
  clubBtn.style.maxWidth = "26px";

  discoverBlock.style.width = "calc(100% - 60px)";

  iconWrapper.style.opacity = "0";
  iconWrapper.style.transform = "scale(0.5)";
  subTabs.style.opacity = "1";
  subTabs.style.pointerEvents = "auto";

  v4SelectSubTab('joint', null);
}

function v4CollapseMorphNav() {
  if (!v4IsNavExpanded) return;
  v4IsNavExpanded = false;

  const schoolBtn = document.getElementById('v4_btnMorphSchool');
  const clubBtn = document.getElementById('v4_btnMorphClub');
  const schoolText = document.getElementById('v4_textSchoolFull');
  const clubText = document.getElementById('v4_textClubFull');
  const discoverBlock = document.getElementById('v4_discoverPillBlock');
  const iconWrapper = document.getElementById('v4_discoverIconWrapper');
  const subTabs = document.getElementById('v4_subClubTabs');

  if (!schoolBtn || !clubBtn || !schoolText || !clubText || !discoverBlock || !iconWrapper || !subTabs) return;

  v4UpdatePrimaryTabUI();

  discoverBlock.style.background = '#2C2C2E';

  schoolText.style.maxWidth = "80px";
  schoolText.style.opacity = "1";
  clubText.style.maxWidth = "80px";
  clubText.style.opacity = "1";

  schoolBtn.style.maxWidth = "120px";
  clubBtn.style.maxWidth = "120px";

  discoverBlock.style.width = "28px";

  iconWrapper.style.opacity = "1";
  iconWrapper.style.transform = "scale(1)";
  subTabs.style.opacity = "0";
  subTabs.style.pointerEvents = "none";
}

// Variation 1 & 2 & 3 Interactive Handlers
function v1SelectTab(type, val) {
  const status = document.getElementById('v1_status');
  const sBtn = document.getElementById('v1_l2_school');
  const cBtn = document.getElementById('v1_l2_club');
  const compassBtn = document.getElementById('v1_l2_compass');
  const l3Container = document.getElementById('v1_l3_container');
  const jBtn = document.getElementById('v1_l3_joint');
  const dBtn = document.getElementById('v1_l3_discover');

  if (type === 'l2') {
    if (val === 'school') {
      if (sBtn) { sBtn.style.color = '#fff'; sBtn.style.background = '#2C2C2E'; }
      if (cBtn) { cBtn.style.color = '#8E8E93'; cBtn.style.background = 'transparent'; }
      if (compassBtn) { compassBtn.style.color = '#8E8E93'; compassBtn.style.background = 'transparent'; }
      if (l3Container) { l3Container.style.display = 'none'; }
      if (status) status.innerText = 'School News';
    } else if (val === 'club') {
      if (cBtn) { cBtn.style.color = '#fff'; cBtn.style.background = '#2C2C2E'; }
      if (sBtn) { sBtn.style.color = '#8E8E93'; sBtn.style.background = 'transparent'; }
      if (compassBtn) { compassBtn.style.color = '#8E8E93'; compassBtn.style.background = 'transparent'; }
      if (l3Container) { l3Container.style.display = 'none'; }
      if (status) status.innerText = 'Club News';
    } else if (val === 'compass') {
      if (compassBtn) { compassBtn.style.color = '#fff'; compassBtn.style.background = '#2C2C2E'; }
      if (sBtn) { sBtn.style.color = '#8E8E93'; sBtn.style.background = 'transparent'; }
      if (cBtn) { cBtn.style.color = '#8E8E93'; cBtn.style.background = 'transparent'; }
      if (l3Container) { l3Container.style.display = 'flex'; }
      if (status) status.innerText = 'My Joint Clubs';
    }
  } else if (type === 'l3') {
    if (compassBtn) { compassBtn.style.color = '#fff'; compassBtn.style.background = '#2C2C2E'; }
    if (sBtn) { sBtn.style.color = '#8E8E93'; sBtn.style.background = 'transparent'; }
    if (cBtn) { cBtn.style.color = '#8E8E93'; cBtn.style.background = 'transparent'; }
    if (val === 'joint') {
      if (jBtn) { jBtn.style.color = '#fff'; jBtn.style.borderBottom = '2px solid #fff'; }
      if (dBtn) { dBtn.style.color = '#8E8E93'; dBtn.style.borderBottom = 'none'; }
      if (status) status.innerText = 'My Joint Clubs';
    } else {
      if (dBtn) { dBtn.style.color = '#fff'; dBtn.style.borderBottom = '2px solid #fff'; }
      if (jBtn) { jBtn.style.color = '#8E8E93'; jBtn.style.borderBottom = 'none'; }
      if (status) status.innerText = 'Discover New Clubs';
    }
  }
}

function v2SelectL2(val) {
  const sBtn = document.getElementById('v2_l2_school');
  const cBtn = document.getElementById('v2_l2_club');
  const compassBtn = document.getElementById('v2_l2_compass');
  const l3Container = document.getElementById('v2_l3_container');
  const status = document.getElementById('v2_status');

  if (val === 'school') {
    if (sBtn) { sBtn.style.color = '#fff'; sBtn.style.background = '#2C2C2E'; }
    if (cBtn) { cBtn.style.color = '#8E8E93'; cBtn.style.background = 'transparent'; }
    if (compassBtn) { compassBtn.style.color = '#8E8E93'; compassBtn.style.background = 'transparent'; }
    if (l3Container) { l3Container.style.display = 'none'; }
    if (status) status.innerText = 'School News';
  } else if (val === 'club') {
    if (cBtn) { cBtn.style.color = '#fff'; cBtn.style.background = '#2C2C2E'; }
    if (sBtn) { sBtn.style.color = '#8E8E93'; sBtn.style.background = 'transparent'; }
    if (compassBtn) { compassBtn.style.color = '#8E8E93'; compassBtn.style.background = 'transparent'; }
    if (l3Container) { l3Container.style.display = 'none'; }
    if (status) status.innerText = 'Club News';
  } else if (val === 'compass') {
    if (compassBtn) { compassBtn.style.color = '#fff'; compassBtn.style.background = '#2C2C2E'; }
    if (sBtn) { sBtn.style.color = '#8E8E93'; sBtn.style.background = 'transparent'; }
    if (cBtn) { cBtn.style.color = '#8E8E93'; cBtn.style.background = 'transparent'; }
    if (l3Container) { l3Container.style.display = 'block'; }
    v2SelectTab('joint');
  }
}

function v2SelectTab(val) {
  const sBtn = document.getElementById('v2_l2_school');
  const cBtn = document.getElementById('v2_l2_club');
  const compassBtn = document.getElementById('v2_l2_compass');
  const l3Container = document.getElementById('v2_l3_container');
  if (l3Container) { l3Container.style.display = 'block'; }
  if (compassBtn) { compassBtn.style.color = '#fff'; compassBtn.style.background = '#2C2C2E'; }
  if (sBtn) { sBtn.style.color = '#8E8E93'; sBtn.style.background = 'transparent'; }
  if (cBtn) { cBtn.style.color = '#8E8E93'; cBtn.style.background = 'transparent'; }

  const tabs = ['joint', 'discover', 'events'];
  const names = { 'joint': 'My Joint Clubs', 'discover': 'Discover New Clubs', 'events': 'Recent Club Events' };
  const status = document.getElementById('v2_status');
  tabs.forEach(id => {
    const btn = document.getElementById('v2_l3_' + id);
    if (!btn) return;
    if (id === val) {
      btn.style.color = '#fff'; btn.style.background = '#2C2C2E';
      if (status) status.innerText = names[id];
    } else {
      btn.style.color = '#8E8E93'; btn.style.background = 'transparent';
    }
  });
}

function v3SelectL2(val) {
  const sBtn = document.getElementById('v3_l2_school');
  const cBtn = document.getElementById('v3_l2_club');
  const compassBtn = document.getElementById('v3_l2_compass');
  const railContainer = document.getElementById('v3_rail_container');
  const contentEl = document.getElementById('v3_content');
  const status = document.getElementById('v3_status');

  if (val === 'school') {
    if (sBtn) { sBtn.style.color = '#fff'; sBtn.style.background = '#2C2C2E'; }
    if (cBtn) { cBtn.style.color = '#8E8E93'; cBtn.style.background = 'transparent'; }
    if (compassBtn) { compassBtn.style.color = '#8E8E93'; compassBtn.style.background = 'transparent'; }
    if (railContainer) { railContainer.style.display = 'none'; }
    if (contentEl) { contentEl.style.marginLeft = '14px'; }
    if (status) status.innerText = 'School News';
  } else if (val === 'club') {
    if (cBtn) { cBtn.style.color = '#fff'; cBtn.style.background = '#2C2C2E'; }
    if (sBtn) { sBtn.style.color = '#8E8E93'; sBtn.style.background = 'transparent'; }
    if (compassBtn) { compassBtn.style.color = '#8E8E93'; compassBtn.style.background = 'transparent'; }
    if (railContainer) { railContainer.style.display = 'none'; }
    if (contentEl) { contentEl.style.marginLeft = '14px'; }
    if (status) status.innerText = 'Club News';
  } else if (val === 'compass') {
    if (compassBtn) { compassBtn.style.color = '#fff'; compassBtn.style.background = '#2C2C2E'; }
    if (sBtn) { sBtn.style.color = '#8E8E93'; sBtn.style.background = 'transparent'; }
    if (cBtn) { cBtn.style.color = '#8E8E93'; cBtn.style.background = 'transparent'; }
    if (railContainer) { railContainer.style.display = 'flex'; }
    if (contentEl) { contentEl.style.marginLeft = '0'; }
    v3SelectRail('joint');
  }
}

function v3SelectRail(val) {
  const sBtn = document.getElementById('v3_l2_school');
  const cBtn = document.getElementById('v3_l2_club');
  const compassBtn = document.getElementById('v3_l2_compass');
  const railContainer = document.getElementById('v3_rail_container');
  const contentEl = document.getElementById('v3_content');
  if (railContainer) { railContainer.style.display = 'flex'; }
  if (contentEl) { contentEl.style.marginLeft = '0'; }
  if (compassBtn) { compassBtn.style.color = '#fff'; compassBtn.style.background = '#2C2C2E'; }
  if (sBtn) { sBtn.style.color = '#8E8E93'; sBtn.style.background = 'transparent'; }
  if (cBtn) { cBtn.style.color = '#8E8E93'; cBtn.style.background = 'transparent'; }

  const rails = ['joint', 'discover', 'events'];
  const names = { 'joint': 'My Joint Clubs', 'discover': 'Discover New Clubs', 'events': 'Recent Club Events' };
  const status = document.getElementById('v3_status');
  rails.forEach(id => {
    const btn = document.getElementById('v3_rail_' + id);
    if (!btn) return;
    if (id === val) {
      btn.style.color = '#fff'; btn.style.background = '#2C2C2E';
      if (status) status.innerText = names[id];
    } else {
      btn.style.color = '#8E8E93'; btn.style.background = 'transparent';
    }
  });
}

window.v4SelectPrimaryTab = v4SelectPrimaryTab;
window.v4SelectSubTab = v4SelectSubTab;
window.v4ExpandMorphNav = v4ExpandMorphNav;
window.v4CollapseMorphNav = v4CollapseMorphNav;
window.v1SelectTab = v1SelectTab;
window.v2SelectL2 = v2SelectL2;
window.v2SelectTab = v2SelectTab;
window.v3SelectL2 = v3SelectL2;
window.v3SelectRail = v3SelectRail;

function renderThreeLayerShowcase(isZh) {
  const titleText = isZh ? '多形态导航布局演进与交互实验场' : 'Multi-Variant Navigation Evolution & Interactive Prototype Playground';
  const badgeText = isZh ? '4 种形态实测' : '4 Layout Variations';
  const subtitleText = isZh 
    ? '下方为 4 种导航形态的高保真交互模拟器。在「方案四 (Apple Morph)」中点击右侧指南针图标，可实时体验苹果级平滑流体变形动效。' 
    : 'High-fidelity interactive prototype simulators for the 4 evaluated variations. In Variation 4, click the compass icon on the right to test the fluid morphing animation in real time.';

  const v1Tag = isZh ? 'A-B-A 视觉跳跃' : 'A-B-A Visual Jump';
  const v1Note = isZh ? '文字-按钮-文字 破坏认知层级' : 'Text-Button-Text breaks hierarchy';

  const v2Tag = isZh ? '按键视觉过载' : 'Button Overload';
  const v2Note = isZh ? '双排高密度胶囊按钮造成操作疲劳' : 'Stacked button rows cause cognitive fatigue';

  const v3Tag = isZh ? '侧边空间解耦' : 'Spatial Decoupling';
  const v3Note = isZh ? '解耦至左侧纵向，但侵占内容区宽度' : 'Decoupled to vertical rail, takes content width';

  const v4Tag = isZh ? '苹果流体变形 · 最终选定' : 'Apple Morph · Selected';
  const v4Note = isZh ? '点击指南针展开，点击 S / C 折叠还原' : 'Click compass to expand, click S/C to collapse';

  return `
    <div class="cs-showcase-container">
      <div class="cs-showcase-header">
        <div class="cs-showcase-title-row">
          <span class="cs-showcase-title">${titleText}</span>
          <span class="cs-showcase-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            ${badgeText}
          </span>
        </div>
        <div class="cs-showcase-subtitle">${subtitleText}</div>
      </div>

      <div class="cs-variations-grid">
        <!-- Variation 1: Text Link -->
        <div class="cs-nav-sim-card">
          <div style="padding: 16px 14px 10px; flex-shrink: 0;">
            <div class="cs-card-header-badge">
              <span>Variation 1: Text Link</span>
              <span class="cs-card-flaw-tag">${v1Tag}</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: flex-end; height: 28px;">
              <button style="font-size: 19px; font-weight: 700; color: #fff; line-height: 1; background: none; border: none; cursor: pointer; padding: 0;">News</button>
              <button style="font-size: 15px; font-weight: 700; color: #8E8E93; line-height: 1; margin-bottom: 1px; background: none; border: none; cursor: pointer; padding: 0;">Tools</button>
              <button style="font-size: 15px; font-weight: 700; color: #8E8E93; line-height: 1; margin-bottom: 1px; background: none; border: none; cursor: pointer; padding: 0;">Social</button>
            </div>
            <div style="margin-top: 10px; height: 32px;">
              <div style="display: flex; background: rgba(255, 255, 255, 0.1); border-radius: 9px; padding: 3px; height: 100%; align-items: center; gap: 2px;">
                <button id="v1_l2_school" onclick="v1SelectTab('l2', 'school')" style="flex: 1; text-align: center; font-size: 11px; font-weight: 700; height: 100%; display: flex; align-items: center; justify-content: center; color: #8E8E93; background: transparent; border-radius: 6px; border: none; cursor: pointer;">School News</button>
                <button id="v1_l2_club" onclick="v1SelectTab('l2', 'club')" style="flex: 1; text-align: center; font-size: 11px; font-weight: 700; height: 100%; display: flex; align-items: center; justify-content: center; color: #8E8E93; background: transparent; border-radius: 6px; border: none; cursor: pointer;">Club News</button>
                <button id="v1_l2_compass" onclick="v1SelectTab('l2', 'compass')" style="width: 26px; height: 100%; display: flex; align-items: center; justify-content: center; background: #2C2C2E; border-radius: 6px; color: #fff; border: none; cursor: pointer; flex-shrink: 0;" title="Discover">
                  <svg style="width: 13px; height: 13px;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                </button>
              </div>
            </div>
            <div id="v1_l3_container" style="display: flex; gap: 12px; align-items: flex-end; margin-top: 10px; height: 28px;">
              <button id="v1_l3_joint" onclick="v1SelectTab('l3', 'joint')" style="font-size: 13px; font-weight: 700; color: #fff; border-bottom: 2px solid #fff; padding-bottom: 2px; line-height: 1; background: none; border-top: none; border-left: none; border-right: none; cursor: pointer;">My Joint</button>
              <button id="v1_l3_discover" onclick="v1SelectTab('l3', 'discover')" style="font-size: 13px; font-weight: 700; color: #8E8E93; padding-bottom: 2px; line-height: 1; background: none; border: none; cursor: pointer;">Discover</button>
            </div>
          </div>
          <div style="flex: 1; border-top: 1px solid rgba(255, 255, 255, 0.06); padding: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 11px; color: #8E8E93; background: rgba(0,0,0,0.15); text-align: center;">
            <span id="v1_status" style="font-weight: 700; color: #fff; margin-bottom: 4px; font-size: 12px;">My Joint Clubs</span>
            <span style="font-size: 10px; color: #71717a;">${v1Note}</span>
          </div>
        </div>

        <!-- Variation 2: Buttons -->
        <div class="cs-nav-sim-card">
          <div style="padding: 16px 14px 10px; flex-shrink: 0;">
            <div class="cs-card-header-badge">
              <span>Variation 2: Buttons</span>
              <span class="cs-card-flaw-tag">${v2Tag}</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: flex-end; height: 28px;">
              <button style="font-size: 19px; font-weight: 700; color: #fff; line-height: 1; background: none; border: none; cursor: pointer; padding: 0;">News</button>
              <button style="font-size: 15px; font-weight: 700; color: #8E8E93; line-height: 1; margin-bottom: 1px; background: none; border: none; cursor: pointer; padding: 0;">Tools</button>
              <button style="font-size: 15px; font-weight: 700; color: #8E8E93; line-height: 1; margin-bottom: 1px; background: none; border: none; cursor: pointer; padding: 0;">Social</button>
            </div>
            <div style="margin-top: 10px; height: 32px;">
              <div style="display: flex; background: rgba(255, 255, 255, 0.1); border-radius: 9px; padding: 3px; height: 100%; align-items: center; gap: 2px;">
                <button id="v2_l2_school" onclick="v2SelectL2('school')" style="flex: 1; text-align: center; font-size: 11px; font-weight: 700; height: 100%; display: flex; align-items: center; justify-content: center; color: #8E8E93; background: transparent; border-radius: 6px; border: none; cursor: pointer;">School News</button>
                <button id="v2_l2_club" onclick="v2SelectL2('club')" style="flex: 1; text-align: center; font-size: 11px; font-weight: 700; height: 100%; display: flex; align-items: center; justify-content: center; color: #8E8E93; background: transparent; border-radius: 6px; border: none; cursor: pointer;">Club News</button>
                <button id="v2_l2_compass" onclick="v2SelectL2('compass')" style="width: 26px; height: 100%; display: flex; align-items: center; justify-content: center; background: #2C2C2E; border-radius: 6px; color: #fff; border: none; cursor: pointer; flex-shrink: 0;" title="Discover">
                  <svg style="width: 13px; height: 13px;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                </button>
              </div>
            </div>
            <div id="v2_l3_container" style="margin-top: 10px; height: 32px;">
              <div style="display: flex; background: rgba(255, 255, 255, 0.1); border-radius: 9px; padding: 3px; height: 100%; align-items: center; gap: 2px;">
                <button id="v2_l3_joint" onclick="v2SelectTab('joint')" style="flex: 1; text-align: center; font-size: 10px; font-weight: 700; height: 100%; background: #2C2C2E; border-radius: 6px; color: #fff; border: none; cursor: pointer;">My Joint</button>
                <button id="v2_l3_discover" onclick="v2SelectTab('discover')" style="flex: 1; text-align: center; font-size: 10px; font-weight: 700; height: 100%; color: #8E8E93; background: transparent; border-radius: 6px; border: none; cursor: pointer;">Discover</button>
                <button id="v2_l3_events" onclick="v2SelectTab('events')" style="flex: 1; text-align: center; font-size: 10px; font-weight: 700; height: 100%; color: #8E8E93; background: transparent; border-radius: 6px; border: none; cursor: pointer;">Events</button>
              </div>
            </div>
          </div>
          <div style="flex: 1; border-top: 1px solid rgba(255, 255, 255, 0.06); padding: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 11px; color: #8E8E93; background: rgba(0,0,0,0.15); text-align: center;">
            <span id="v2_status" style="font-weight: 700; color: #fff; margin-bottom: 4px; font-size: 12px;">My Joint Clubs</span>
            <span style="font-size: 10px; color: #71717a;">${v2Note}</span>
          </div>
        </div>

        <!-- Variation 3: Vertical Icons -->
        <div class="cs-nav-sim-card">
          <div style="padding: 16px 14px 10px; flex-shrink: 0;">
            <div class="cs-card-header-badge">
              <span>Variation 3: Vertical Icons</span>
              <span class="cs-card-flaw-tag">${v3Tag}</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: flex-end; height: 28px;">
              <button style="font-size: 19px; font-weight: 700; color: #fff; line-height: 1; background: none; border: none; cursor: pointer; padding: 0;">News</button>
              <button style="font-size: 15px; font-weight: 700; color: #8E8E93; line-height: 1; margin-bottom: 1px; background: none; border: none; cursor: pointer; padding: 0;">Tools</button>
              <button style="font-size: 15px; font-weight: 700; color: #8E8E93; line-height: 1; margin-bottom: 1px; background: none; border: none; cursor: pointer; padding: 0;">Social</button>
            </div>
            <div style="margin-top: 10px; height: 32px;">
              <div style="display: flex; background: rgba(255, 255, 255, 0.1); border-radius: 9px; padding: 3px; height: 100%; align-items: center; gap: 2px;">
                <button id="v3_l2_school" onclick="v3SelectL2('school')" style="flex: 1; text-align: center; font-size: 11px; font-weight: 700; height: 100%; display: flex; align-items: center; justify-content: center; color: #8E8E93; background: transparent; border-radius: 6px; border: none; cursor: pointer;">School News</button>
                <button id="v3_l2_club" onclick="v3SelectL2('club')" style="flex: 1; text-align: center; font-size: 11px; font-weight: 700; height: 100%; display: flex; align-items: center; justify-content: center; color: #8E8E93; background: transparent; border-radius: 6px; border: none; cursor: pointer;">Club News</button>
                <button id="v3_l2_compass" onclick="v3SelectL2('compass')" style="width: 26px; height: 100%; display: flex; align-items: center; justify-content: center; background: #2C2C2E; border-radius: 6px; color: #fff; border: none; cursor: pointer; flex-shrink: 0;" title="Discover">
                  <svg style="width: 13px; height: 13px;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                </button>
              </div>
            </div>
          </div>
          <div style="display: flex; flex: 1; min-height: 0; margin-top: 8px;">
            <div id="v3_rail_container" style="display: flex; flex-direction: column; gap: 6px; padding: 0 6px 14px 14px; flex-shrink: 0;">
              <button id="v3_rail_joint" onclick="v3SelectRail('joint')" style="width: 32px; height: 32px; background: #2C2C2E; border-radius: 7px; display: flex; align-items: center; justify-content: center; color: #fff; border: none; cursor: pointer;" title="My Joint">
                <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </button>
              <button id="v3_rail_discover" onclick="v3SelectRail('discover')" style="width: 32px; height: 32px; background: transparent; border-radius: 7px; display: flex; align-items: center; justify-content: center; color: #8E8E93; border: none; cursor: pointer;" title="Discover">
                <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
              </button>
              <button id="v3_rail_events" onclick="v3SelectRail('events')" style="width: 32px; height: 32px; background: transparent; border-radius: 7px; display: flex; align-items: center; justify-content: center; color: #8E8E93; border: none; cursor: pointer;" title="Recent Events">
                <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </button>
            </div>
            <div id="v3_content" style="flex: 1; padding: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 11px; color: #8E8E93; background: rgba(0,0,0,0.2); margin: 0 14px 14px 0; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); text-align: center;">
              <span id="v3_status" style="font-weight: 700; color: #fff; margin-bottom: 4px; font-size: 12px;">My Joint Clubs</span>
              <span style="font-size: 10px; color: #71717a;">${v3Note}</span>
            </div>
          </div>
        </div>

        <!-- Variation 4: Apple Morph -->
        <div class="cs-nav-sim-card">
          <div style="padding: 16px 14px 10px; flex-shrink: 0; position: relative; z-index: 20;">
            <div class="cs-card-header-badge">
              <span>Variation 4: Apple Morph</span>
              <span class="cs-card-flaw-tag highlight">${v4Tag}</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: flex-end; height: 28px;">
              <button style="font-size: 19px; font-weight: 700; color: #fff; line-height: 1; background: none; border: none; cursor: pointer; padding: 0;">News</button>
              <button style="font-size: 15px; font-weight: 700; color: #8E8E93; line-height: 1; margin-bottom: 1px; background: none; border: none; cursor: pointer; padding: 0;">Tools</button>
              <button style="font-size: 15px; font-weight: 700; color: #8E8E93; line-height: 1; margin-bottom: 1px; background: none; border: none; cursor: pointer; padding: 0;">Social</button>
            </div>
            <div style="margin-top: 10px; height: 32px; width: 100%; position: relative;">
              <div id="v4_morphNavContainer" style="display: flex; background: rgba(255, 255, 255, 0.1); border-radius: 9px; padding: 3px 34px 3px 3px; height: 100%; align-items: center; gap: 2px; overflow: hidden; position: relative;">
                
                <button id="v4_btnMorphSchool" onclick="v4SelectPrimaryTab('school', event)" style="max-width: 120px; flex: 1; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; height: 100%; border-radius: 6px; color: #fff; background: #2C2C2E; border: none; cursor: pointer;" class="apple-morph">
                  <span>S</span><span id="v4_textSchoolFull" style="max-width: 80px; opacity: 1; overflow: hidden; white-space: nowrap;" class="apple-morph">chool News</span>
                </button>

                <button id="v4_btnMorphClub" onclick="v4SelectPrimaryTab('club', event)" style="max-width: 120px; flex: 1; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; height: 100%; border-radius: 6px; color: #8E8E93; background: transparent; border: none; cursor: pointer;" class="apple-morph">
                  <span>C</span><span id="v4_textClubFull" style="max-width: 80px; opacity: 1; overflow: hidden; white-space: nowrap;" class="apple-morph">lub News</span>
                </button>

                <div id="v4_discoverPillBlock" onclick="v4ExpandMorphNav(event)" style="position: absolute; right: 3px; top: 3px; bottom: 3px; width: 26px; background: #2C2C2E; border-radius: 6px; cursor: pointer; z-index: 20; overflow: hidden;" class="apple-morph" title="Click to expand Discover">
                  
                  <div id="v4_discoverIconWrapper" style="position: absolute; right: 0; top: 0; bottom: 0; width: 26px; display: flex; align-items: center; justify-content: center; pointer-events: none; opacity: 1; transform: scale(1);" class="apple-morph">
                    <svg style="width: 13px; height: 13px; color: #fff;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                  </div>

                  <div id="v4_subClubTabs" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: space-between; gap: 2px; font-size: 10px; font-weight: 700; opacity: 0; pointer-events: none;" class="apple-morph">
                    <button id="v4_subTab_joint" onclick="v4SelectSubTab('joint', event)" style="flex: 1; height: 100%; color: #fff; background: #2C2C2E; border-radius: 5px; border: none; cursor: pointer; white-space: nowrap; text-align: center; font-size: 9.5px; padding: 0;">My Joint</button>
                    <button id="v4_subTab_discover" onclick="v4SelectSubTab('discover', event)" style="flex: 1; height: 100%; color: #8E8E93; background: transparent; border-radius: 5px; border: none; cursor: pointer; white-space: nowrap; text-align: center; font-size: 9.5px; padding: 0;">Discover</button>
                    <button id="v4_subTab_events" onclick="v4SelectSubTab('events', event)" style="flex: 1; height: 100%; color: #8E8E93; background: transparent; border-radius: 5px; border: none; cursor: pointer; white-space: nowrap; text-align: center; font-size: 9.5px; padding: 0;">Events</button>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div style="flex: 1; border-top: 1px solid rgba(255, 255, 255, 0.06); padding: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 11px; color: #8E8E93; background: rgba(0,0,0,0.15); text-align: center;">
            <span id="v4_currentStatusText" style="font-weight: 700; color: #fff; margin-bottom: 4px; font-size: 12px;">School News</span>
            <span style="font-size: 10px; color: #71717a;">${v4Note}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openCaseStudyModal(projectId) {
  initCaseStudyModal();
  const modal = document.getElementById('protocolModal');
  const titleEl = document.getElementById('caseStudyModalTitle');
  const body = document.getElementById('caseStudyModalBody');
  if (!modal || !body) return;

  const activeData = getActiveData();
  const project = activeData.projects.find(p => p.id === projectId);
  if (!project || !project.caseStudy) return;

  const cs = project.caseStudy;
  if (titleEl) {
    titleEl.textContent = cs.title;
  }

  const isZh = currentLang === 'zh';
  const thField = isZh ? '分析维度 / 核心阶段' : 'Dimension / Phase';
  const thSpec = isZh ? '设计推演与交互规范说明' : 'UX Analysis & Specification Details';
  const summaryLabel = isZh ? '概要说明' : 'Summary';

  // Render Interactive Prototype Showcase if Three-Layer Navigation Case Study
  const showcaseHtml = (cs.id === 'three-layer-layout' || projectId === 'chschat-xyz') 
    ? renderThreeLayerShowcase(isZh) 
    : '';

  const rowsHtml = cs.sections.map(sec => `
    <tr>
      <td style="width: 20%; font-weight: 700; color: var(--text-color);">
        <strong>${sec.heading}</strong>
      </td>
      <td>
        ${sec.content ? `<p style="margin-bottom: ${sec.bullets && sec.bullets.length ? '10px' : '0'}; line-height: 1.6; color: var(--text-color);">${sec.content}</p>` : ''}
        ${sec.bullets ? `
          <ul class="case-study-bullets" style="margin: 0; padding-left: 18px; line-height: 1.6; color: var(--text-color);">
            ${sec.bullets.map(b => `<li style="margin-bottom: 6px;">${b}</li>`).join('')}
          </ul>
        ` : ''}
      </td>
    </tr>
  `).join('');

  body.innerHTML = `
    ${showcaseHtml}
    <table class="protocol-table">
      <thead>
        <tr>
          <th style="width: 20%;">${thField}</th>
          <th>${thSpec}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="width: 20%; font-weight: 700; color: var(--text-color);"><strong>${summaryLabel}</strong></td>
          <td style="color: var(--text-color); line-height: 1.6;">${cs.subtitle}</td>
        </tr>
        ${rowsHtml}
      </tbody>
    </table>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Initialize V4 state if present
  if (document.getElementById('v4_btnMorphSchool')) {
    v4IsNavExpanded = false;
    v4CurrentPrimaryTab = 'school';
    v4CollapseMorphNav();
  }
}

function closeCaseStudyModal() {
  const modal = document.getElementById('protocolModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.openCaseStudyModal = openCaseStudyModal;
window.closeCaseStudyModal = closeCaseStudyModal;

// Global Click Delegation to ensure instant responsiveness on any device
document.addEventListener('click', (e) => {
  const pillBtn = e.target.closest('.case-study-pill-btn') || e.target.closest('.project-case-study-trigger');
  if (pillBtn) {
    e.preventDefault();
    e.stopPropagation();
    const card = pillBtn.closest('.project-card');
    const projId = card ? card.getAttribute('data-project-id') : 'chschat-xyz';
    openCaseStudyModal(projId || 'chschat-xyz');
  }
});









