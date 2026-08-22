const PORTFOLIO_DATA = {
  en: {
    profile: {
      name: "Application Hub",
      targetMajor: "Human-Computer Interaction (HCI)",
      focus: "Tech-focused with UI/UX Integration",
      gpa: {
        unweighted: 3.76,
        weighted: 3.93,
        credits: 25.75,
        history: [
          { grade: "9th Grade", uw: 3.85, w: 0, credits: 12.75 },
          { grade: "10th Grade", uw: 3.71, w: 3.86, credits: 13.00 }
        ]
      }
    },
    projects: [
      {
        id: "epaper-assistant",
        title: "Smart E-Paper Classroom Clicker & Educator Assistant",
        category: ["tech", "ux"],
        tags: ["Hardware & IoT", "Web Bluetooth", "FastAPI / WebSocket", "E-Paper Display", "Interaction Design"],
        description: "Engineered a low-power, eye-friendly smart e-paper hardware & web ecosystem to relieve teachers' administrative communication burdens and facilitate real-time classroom feedback.",
        image: "Photos/Photo of DIY.jpg",
        highlights: [
          "Developed dual-mode communication: direct browser Web Bluetooth wireless control and FastAPI + Bleak WebSocket remote gateway",
          "Implemented frontend graphical typesetting engine supporting multi-color layers (Black/Red), halftone dithering algorithms, and ESP32 serial packet dispatch",
          "Integrated ESP32 microcontroller with a 2.13-inch tri-color e-paper screen and physical A-D answer clicker buttons for millisecond-level feedback"
        ],
        link: "https://epaper-composer.vercel.app/"
      },
      {
        id: "personal-web",
        title: "Personal Portfolio Website",
        category: ["tech", "ux"],
        tags: ["HTML/CSS/JS", "HCI Portfolio", "Responsive Design"],
        description: "Designed and built a custom, agency-free portfolio from scratch to showcase academic projects and UX research work.",
        dashboardHidden: true,
        highlights: [
          "Rejects generic template frameworks for a unique, personalized expression",
          "Implements premium micro-interactions and dark-mode aesthetic"
        ]
      },
      {
        id: "usaco",
        title: "USACO Silver Division",
        category: ["tech"],
        tags: ["Algorithms", "Java", "Competitive Programming"],
        description: "USACO is the premier algorithmic programming olympiad in the US. Promoted to Silver Division, validating advanced data structures, computational thinking, and problem-solving skills in Java.",
        highlights: []
      },
      {
        id: "tianhe-ux",
        title: "Fashion Tianhe Signage System Optimization",
        category: ["ux"],
        tags: ["Wayfinding Systems", "User Research", "Interaction Prototyping"],
        description: "A comprehensive UX case study investigating the complex wayfinding system of Guangzhou's largest underground mall, Fashion Tianhe.",
        dashboardHidden: true,
        highlights: [
          "Conducting user observations and task tests to document navigation failure points",
          "Developing a revised layout prototype to improve wayfinding and spatial navigation",
          "Target completion: July 30, including iterative feedback loops"
        ]
      },
      {
        id: "gz-traffic-video",
        title: "Guangzhou Congestion: Are Electric Scooters to Blame?",
        category: ["humanities", "ux"],
        tags: ["Urban Sociology", "Data Analysis", "Video Essay"],
        description: "A popular science video essay mapping urban space usage and social behaviors in relation to traffic congestion, reaching 50,000+ views online.",
        highlights: [
          "Analyzed spatial conflicts between micro-mobility vehicles and pedestrians",
          "Created custom visualizations to explain complex urban dynamics to the general public"
        ],
        link: "https://www.bilibili.com/video/BV1qN4y1X7pz",
        linkText: "Watch Video (Bilibili)"
      },
      {
        id: "youth-league-video",
        title: "Youth League Recruitment Motivation Study",
        category: ["humanities"],
        tags: ["Social Research", "Qualitative Survey", "Bilibili Video Essay"],
        description: "A sociological research video essay examining the underlying motivations of high school students joining the Communist Youth League, reaching 100,000+ views online.",
        highlights: [
          "Conducted student interviews and analyzed patterns of motivation and institutional participation",
          "Synthesized findings into an accessible video format that went viral in the student community"
        ],
        link: "https://www.bilibili.com/video/BV1yK421k7T8",
        linkText: "Watch Video (Bilibili)"
      },
      {
        id: "script-killing-intern",
        title: "MBTI Match & Romance Index AI Model Design",
        category: ["leadership"],
        tags: ["Product Design", "User Psychology", "AI Framework", "Cross-team Leadership"],
        description: "Interned at an innovative script-killing company targeting young demographics. Structured MBTI and matchmaking analytics models.",
        highlights: [
          "Designed the analysis logical framework to infer player MBTI & dating risk indexes from gameplay choices",
          "Collaborated with and guided the data science/AI team to deploy the analytical engine",
          "Optimized onboarding and user psychology alignment to boost matching success rate"
        ]
      },
      {
        id: "xia-zao-film",
        title: "Short Film: 'Summer Noise' (夏噪)",
        category: ["humanities", "leadership"],
        tags: ["Directing", "Project Coordination", "Cinematography"],
        description: "Directed an atmospheric short film, coordinating schedules, cinematography, and logistics across school departments. Gained 70,000+ online views.",
        image: "Photos/xiazao.png",
        imagePosition: "78% center",
        highlights: [
          "Organized 1-week screening event on campus big screens, reaching 5,000+ students and visitors",
          "Managed cross-functional student crew (sound, acting, post-production) under tight deadlines"
        ],
        link: "https://www.bilibili.com/video/BV11i421m7TV",
        linkText: "Watch Film (Bilibili)"
      },
      {
        id: "chschat-xyz",
        title: "CHSchat.xyz - Centennial HS Hub",
        category: ["tech", "ux", "leadership"],
        tags: ["Full-Stack Web App", "Micro-App SDK", "Liquid Glass UI", "HCI Case Study"],
        description: "Engineered and deployed a modular campus web platform for Centennial High School, integrating real-time communication, campus news feeds, and an extensible suite of student-built academic tools.",
        images: [
          "Photos/CHSchat.png",
          "Photos/CHSchat-tool.png"
        ],
        imagePositions: [
          "left top",
          "center top"
        ],
        highlights: [
          "Built a modular micro-app ecosystem supporting custom academic extensions (AP Calculus 3D visualizers, logic gate simulators, IR research canvas, and campus lunch/bell utilities)",
          "Engineered a bidirectional JavaScript Bridge SDK enabling sandboxed iframe extensions to sync dark mode, native modals, and notifications",
          "Researched & tackled the 'Three Layer Layout' UX challenge to eliminate viewport conflict, scroll-locking, and gesture collisions between heavy tools, real-time feeds, and floating controls"
        ],
        caseStudy: {
          id: "three-layer-layout",
          badgeText: "Three-Layer Navigation Case Study",
          title: "Solving Three-Layer Navigation in a 1/5 Screen Space",
          subtitle: "How to fit three nested tiers into a narrow panel without 3 horizontal lines, A-B-A visual confusion, or button overload.",
          sections: [
            {
              heading: "1. The 1/5 Width Problem",
              content: "On our left panel (about 1/5 of the screen width), we faced a real UX problem with three nested levels. Stacking three horizontal tab bars on top of each other is an immediate visual disaster. Most of the time users only see two tiers — Tier 1 (News, Tools, Social) and Tier 2 (School News, Club News, Discover Clubs). But once someone clicks 'Discover Clubs', we have to show joined clubs, clubs to explore, and recent club events. That created a third level inside this tiny space."
            },
            {
              heading: "2. Why Conventional Approaches Broke Down",
              content: "A standard guideline for multi-level layouts is that if the first layer sits on top, subsequent layers should move to the left. But all three layers should never be forced into horizontal rows. When designing the third tier, we ran into two traps:",
              bullets: [
                "Using plain text for Layer 3 (The A-B-A Visual Jump) — If Layer 3 uses text while Layer 1 is text and Layer 2 is buttons, Layer 1 and Layer 3 look identical. By Gestalt grouping, the brain pairs them together, completely destroying the broad-to-specific hierarchy. Two elements separated by two logical levels should never look the same.",
                "Using buttons for Layer 3 (Button Overload) — If Layer 3 also uses buttons like Layer 2, you get two dense rows of button containers stacked together. No matter how much you tweak the colors or sizes, having that many buttons in a 1/5-width column causes immediate cognitive overload."
              ]
            },
            {
              heading: "3. The Spatial Decoupling Decision",
              content: "To avoid both visual jumps and button fatigue, we decoupled the layout directions:",
              bullets: [
                "Layers 1 and 2 stay horizontal at the top — Layer 1 uses clean text headers (no background boxes), and Layer 2 uses clear pill button containers.",
                "Layer 3 shifts to a contextual vertical layout on the left — It only slides open when the user actively enters the Discover/Clubs section.",
                "Result — Keeps the main workspace clean, prevents accidental clicks, and provides an effortless mental model for students."
              ]
            }
          ]
        },
        link: "https://chschat.xyz"
      },
      {
        id: "tedx-organizer",
        title: "TEDx Youth Event Organizer",
        category: ["leadership"],
        tags: ["Event Planning", "Licensing", "Public Speaking"],
        description: "Leading the licensing, speaker curation, and event execution of a TEDx youth event planned for December 2026.",
        dashboardHidden: true,
        highlights: [
          "Managing licensing applications with TED organization in New York",
          "Coordinating team structures and venue logistics ahead of the event"
        ]
      },
      {
        id: "badminton-club",
        title: "Centennial Badminton Club Co-President",
        category: ["leadership"],
        tags: ["Club Operations", "Event Planning", "Tournament Hosting"],
        description: "Served as Co-President, leading club operations, organizing school-wide badminton tournaments, and coordinating practice venues and logistics.",
        highlights: []
      },
      {
        id: "teen-mental-health-research",
        title: "Research: How Social Media Comparison Affects Teen Mental Health",
        category: ["ux", "humanities"],
        tags: ["Mental Health", "Social Media", "Interaction Design", "Academic Research"],
        description: "An independent research paper analyzing the effects of upward comparison and algorithms on adolescent mental health.",
        dashboardHidden: true,
        highlights: [
          "Investigated depression rate surges since 2010 linked to highlight reel comparison",
          "Conducted semi-structured interviews with five psychology and technology experts",
          "Proposed media literacy and parental guidance frameworks for teenager protection"
        ],
        link: "socialmediaportfolio.html"
      }
    ],
    courses: {
      g10g11: [
        { name: "American Government", grade: "A", level: "Honor" },
        { name: "Independent Research", grade: "A", level: "GT" },
        { name: "Advance Object Oriented Design", grade: "A", level: "GT" },
        { name: "English", grade: "B", level: "Honor" },
        { name: "Video Production", grade: "A", level: "GT" },
        { name: "AP Psychology", grade: "A", level: "AP" },
        { name: "AP Calculus BC", grade: "B", level: "AP" },
        { name: "AP Computer Science A", grade: "A", level: "AP" },
        { name: "AP Micro Economics", grade: "A", level: "AP" }
      ],
      g12: [
        { name: "Intern/Mentor I - GT", level: "GT", expected: "A", status: "Planned" },
        { name: "AP Compare Gov/Pol", level: "AP", expected: "A", status: "Planned" },
        { name: "AP Physics C: Mechanics", level: "AP", expected: "B", status: "Planned" },
        { name: "Forensic Science", level: "—", expected: "A", status: "Planned" },
        { name: "Princ of Bus and Mgt - GT CC", level: "GT CC", expected: "A", status: "Planned" },
        { name: "English 12 - Honor", level: "Honor", expected: "A", status: "Planned" },
        { name: "AP Statistics", level: "AP", expected: "A", status: "Planned" }
      ]
    },
    toefl: [
      { date: "Current Best (Dec 2025)", r: 24, l: 28, s: 26, w: 24, total: 102 }
    ],
    toeflNote: "* Note: The Listening 28 score was taken under the NEEC testing system, which is separate from ets.org TOEFL records; the MyBest score on ETS is officially recorded as 100.",
    volunteering: [
      { name: "Bio-Island & Xiaozhou Village: Environmental Protection Publicity", hours: 7 },
      { name: "Memorial Museum of the 3rd National Congress of the CPC: Volunteer Service", hours: 4 },
      { name: "Aier Eye Hospital Clinic: Eye Care Volunteer Station", hours: 3 },
      { name: "ICBC Guangzhou Junjing Branch: Anti-Fraud Campaign", hours: 3 },
      { name: "BNU Guangzhou Experimental School: Sports Carnival Volunteer", hours: 10 },
      { name: "Longhu Street Library: Volunteer Service", hours: 4 },
      { name: "Huacheng Volunteer Station: Environmental Protection Publicity", hours: 4 },
      { name: "Other Community Services (Accumulated)", hours: 65 }
    ],
    milestones: [
      { date: "June 25, 2026", task: "Draft each project's: research questions, target users, methodology, evaluation metrics, and planned sample sizes." },
      { date: "June 30, 2026", task: "Create and publish the initial version of the personal website." },
      { date: "July 30, 2026", task: "Complete the Fashion Tianhe wayfinding study (complete user observations, task testing, data recording, first prototype, and first round of testing; compile into a Case Study with diagrams, data, and iterations)." },
      { date: "July 30, 2026", task: "Anonymize the internship project (document the system architecture, evaluation criteria, and deployment results; build a runnable interactive demo with simulated data)." },
      { date: "September 30, 2026", task: "Take the final TOEFL exam to achieve the target score." },
      { date: "December 2026", task: "Host and organize the TEDx Centennial High School Youth event as the organizer (licensing pending after multiple submissions; planning to hold it in December 2026)." }
    ]
  },
  zh: {
    profile: {
      name: "申请中心",
      targetMajor: "人机交互 (HCI)",
      focus: "偏技术同时融合 UI/UX",
      gpa: {
        unweighted: 3.76,
        weighted: 3.93,
        credits: 25.75,
        history: [
          { grade: "九年级", uw: 3.85, w: 0, credits: 12.75 },
          { grade: "十年级", uw: 3.71, w: 3.86, credits: 13.00 }
        ]
      }
    },
    projects: [
      {
        id: "epaper-assistant",
        title: "智能墨水屏答题与教务助手系统 (E-Paper Composer)",
        category: ["tech", "ux"],
        tags: ["物联网与硬件", "Web 蓝牙", "FastAPI / WebSocket", "三色墨水屏", "交互设计"],
        description: "针对中小学教师繁重的通知与回执统计负担，自研了一套无感、护眼、超长续航的软硬件墨水屏教务与课堂互动反馈系统。",
        image: "Photos/Photo of DIY.jpg",
        highlights: [
          "支持浏览器原生 Web Bluetooth 直连无线下发与 FastAPI + Bleak WebSocket 远程网桥双通道通信",
          "自研前端可视化排版引擎，支持多色图层分离、半色调抖动算法与 ESP32 串行数据包分发",
          "硬件端深度整合 ESP32 主控、2.13 寸三色墨水屏与 ABCD 实体交互按键，实现毫秒级课堂答题与确认回传"
        ],
        link: "https://epaper-composer.vercel.app/"
      },
      {
        id: "personal-web",
        title: "个人作品集网站",
        category: ["tech", "ux"],
        tags: ["HTML/CSS/JS", "人机交互作品集", "响应式设计"],
        description: "从零设计并搭建个人作品集网站，不依赖任何第三方机构，展示学术项目及用户体验（UX）研究成果。",
        dashboardHidden: true,
        highlights: [
          "拒绝套用模板框架，展现独特且个性化的个人风采",
          "实现高级微交互效果与深色模式视觉美学"
        ]
      },
      {
        id: "usaco",
        title: "USACO 银牌组 (Silver Division)",
        category: ["tech"],
        tags: ["算法", "Java", "计算机竞赛"],
        description: "USACO是美国最具含金量的高中生权威计算机奥赛。成功晋级银牌组（Silver Division），展现了扎实的高级算法、数据结构与编程问题解决能力。",
        highlights: []
      },
      {
        id: "tianhe-ux",
        title: "时尚天河导视系统优化研究",
        category: ["ux"],
        tags: ["导视系统", "用户研究", "交互原型设计"],
        description: "针对广州最大的地下商场——时尚天河复杂的导视系统，进行了一项全面的用户体验（UX）案例研究。",
        dashboardHidden: true,
        highlights: [
          "进行用户观察与任务测试，记录导航失败的痛点",
          "开发改良版的版面原型，以优化寻路和空间导航体验",
          "目标完成时间：7月30日（包含迭代反馈闭环）"
        ]
      },
      {
        id: "gz-traffic-video",
        title: "视频短片-广州拥堵真的是电动车导致的吗？",
        category: ["humanities", "ux"],
        tags: ["城市社会学", "数据分析", "视频短片"],
        description: "一部探讨城市空间利用、社会行为与交通拥堵关联的科普类视频短片，全网播放量达5万+。",
        highlights: [
          "分析了微型代步工具与行人之间的空间冲突",
          "制作自定义可视化图表，向公众解释复杂的城市动态"
        ],
        link: "https://www.bilibili.com/video/BV1qN4y1X7pz",
        linkText: "观看视频 (B站)"
      },
      {
        id: "youth-league-video",
        title: "B站视频-学生加入共青团的动机研究",
        category: ["humanities"],
        tags: ["社会学研究", "定性调查", "B站视频短片"],
        description: "一项考察高中生加入共青团底层动机的社会学研究视频短片，网络播放量达到10万+播放量。",
        highlights: [
          "开展学生访谈，分析动机模式与组织参与度",
          "将研究结果整理成通俗易懂的视频形式，在学生群体中广泛传播"
        ],
        link: "https://www.bilibili.com/video/BV1yK421k7T8",
        linkText: "观看视频 (B站)"
      },
      {
        id: "script-killing-intern",
        title: "实习项目：MBTI 匹配与恋爱风险指数 AI 模型设计",
        category: ["leadership"],
        tags: ["产品设计", "用户心理学", "AI框架", "跨团队领导力"],
        description: "在一家以非典型剧本杀吸引年轻玩家、促成配对的公司实习，负责设计分析模型以推测玩家MBTI及恋爱风险指数。",
        highlights: [
          "从用户行为和心理出发，设计玩家选项推测其 MBTI 及恋爱风险指数的分析逻辑与框架",
          "跨团队指导并配合数据与 AI 团队，完成分析引擎的落地",
          "优化玩家交互体验，促进匹配成功率与用户心理契合"
        ]
      },
      {
        id: "xia-zao-film",
        title: "情绪短片《夏噪》",
        category: ["humanities", "leadership"],
        tags: ["导演", "项目统筹", "摄影"],
        description: "执导一部充满氛围感的情绪短片《夏噪》，协调演员档期并统筹各部门工作，网络播放量达7万+。",
        image: "Photos/xiazao.png",
        imagePosition: "78% center",
        highlights: [
          "获得在拥有5000名师生的学校大屏幕上进行为期1周的展映机会，向校内外人员展示",
          "在紧迫的截止日期下，管理包括声音、表演和后期制作在内的跨职能学生团队"
        ],
        link: "https://www.bilibili.com/video/BV11i421m7TV",
        linkText: "观看短片 (B站)"
      },
      {
        id: "chschat-xyz",
        title: "CHSchat.xyz - 校园集成平台与微应用生态",
        category: ["tech", "ux", "leadership"],
        tags: ["全栈Web开发", "微应用SDK", "Liquid Glass", "HCI交互探究"],
        description: "为 Centennial High School 从零设计并独立上线的模块化校园集成平台，将实时校内通讯、新闻资讯与学生自主开发的学术微应用生态深度整合。",
        images: [
          "Photos/CHSchat.png",
          "Photos/CHSchat-tool.png"
        ],
        imagePositions: [
          "left top",
          "center top"
        ],
        highlights: [
          "搭建模块化微应用平台，支持接入 AP 微积分 3D 旋转体积分可视化、逻辑门模拟器、独立课题研究（IR）画布等学术工具",
          "自研双向通信 JS Bridge SDK，实现沙盒 iframe 微应用与宿主平台在深色模式、系统弹窗及通知上的无缝同步",
          "深入探究并解决 'Three Layer Layout（三层布局架构）' 交互难题，消除复杂工具、实时流与悬浮控制层之间的视口与手势冲突"
        ],
        caseStudy: {
          id: "three-layer-layout",
          badgeText: "Three Layer Layout 交互设计探究",
          title: "1/5 狭窄屏幕下的三级菜单布局解法",
          subtitle: "在 1/5 屏幕宽度内避免三层横向堆叠，解决 A-B-A 视觉跳跃与认知负荷，从横向中解耦出按需展开的纵向层级。",
          sections: [
            {
              heading: "1. 1/5 屏宽下的排版难题",
              content: "在左侧占据屏幕仅约 1/5 宽度的受限面板中，界面面临三级嵌套菜单的排版挑战。如果把三层菜单全部横向堆叠，在狭窄空间内极度破坏用户体验。平时用户大多只看到两层：顶部一级（新闻 News、工具 Tools、社交 Social，文字形态），二级（校园新闻 School News、社团新闻 Club News、探索/社团 Discover/Clubs，按钮形态）。但当用户点击 Discover/Clubs 时，系统必须呈现已加入社团、待发现社团及近期活动，这便在仅 1/5 宽度的区域催生出了第三级菜单。"
            },
            {
              heading: "2. 常规方案为何走不通",
              content: "行业常有多级菜单规则（如'一级在顶则二三级在左'），但三层全部做成横向是反用户体验的。在尝试三级形态时，我们深入推演了两种常规方案的硬伤：",
              bullets: [
                "三级用纯文字（引发 A-B-A 视觉跳跃）—— 如果三级也用文字，会导致一级与三级在形态上完全重合（文字-按钮-文字）。根据格式塔心理学，人脑本能会将相似形态归为同类，这直接打破了从大到小的认知层级。相差两级的元素在视觉上表现相同，属于信息架构的大忌。",
                "三级用按钮（引发认知负荷过载）—— 如果让三级也用按钮以保持逻辑统一，会导致狭窄区域内连续堆砌两层密密麻麻的按钮容器。无论如何微调细节，高密度的按钮堆积都会给日常使用带来沉重的认知负荷。"
              ]
            },
            {
              heading: "3. 空间解耦与按需展开决策",
              content: "为了同时避开视觉跳跃与按钮过载两大问题，我们将交互维度进行了空间解耦：",
              bullets: [
                "一二级常驻顶部横向 —— 一二级作为高频入口保留在顶部，大字无背景 vs 独立胶囊按钮清晰区分主次权重。",
                "三级解耦为左侧纵向 —— 将第三级从横向体系中分离，做成左侧纵向形态，仅在点击 Discover/Clubs 时按需展开。",
                "交互收益 —— 物理空间与视觉形态的双重解耦，既杜绝了横向三行堆叠的拥挤感，又让操作直观自然。"
              ]
            }
          ]
        },
        link: "https://chschat.xyz"
      },
      {
        id: "tedx-organizer",
        title: "TEDx 活动主办与筹办",
        category: ["leadership"],
        tags: ["活动策划", "牌照申请", "公共演讲"],
        description: "作为主要承办人，负责筹备将于2026年12月举办的TEDx青年活动，包括牌照申请、讲者筛选和活动落地。",
        dashboardHidden: true,
        highlights: [
          "与纽约TED总部直接对接并管理牌照申请流程",
          "在活动开始前统筹团队架构和场地物流工作"
        ]
      },
      {
        id: "badminton-club",
        title: "Centennial Badminton Club",
        category: ["leadership"],
        tags: ["俱乐部运营", "赛事统筹", "场地协调"],
        description: "担任社长期间负责俱乐部日常运营，统筹组织全校羽毛球锦标赛（Tournament）并协调训练排期与比赛场地。",
        highlights: []
      },
      {
        id: "teen-mental-health-research",
        title: "研究：社交媒体对比如何影响青少年心理健康",
        category: ["ux", "humanities"],
        tags: ["心理健康", "社交媒体", "交互设计", "学术研究"],
        description: "一项关于向上社会比较和算法推荐对青少年心理健康影响的独立研究报告。",
        dashboardHidden: true,
        highlights: [
          "调研了2010年以来因“精彩集锦”式对比导致的青少年抑郁率上升",
          "对5位心理学和社交媒体技术领域的专家进行了半结构化访谈",
          "提出了旨在保护青少年心理健康的媒介素养和家长引导框架"
        ],
        link: "socialmediaportfolio.html"
      }
    ],
    courses: {
      g10g11: [
        { name: "美国政府", grade: "A", level: "Honor" },
        { name: "独立研究", grade: "A", level: "GT" },
        { name: "高级面向对象设计", grade: "A", level: "GT" },
        { name: "英语", grade: "B", level: "Honor" },
        { name: "视频制作", grade: "A", level: "GT" },
        { name: "AP 心理学", grade: "A", level: "AP" },
        { name: "AP 微积分 BC", grade: "B", level: "AP" },
        { name: "AP 计算机科学 A", grade: "A", level: "AP" },
        { name: "AP 微观经济学", grade: "A", level: "AP" }
      ],
      g12: [
        { name: "实习/导师项目 I - GT", level: "GT", expected: "A", status: "已规划" },
        { name: "AP 比较政府与政治", level: "AP", expected: "A", status: "已规划" },
        { name: "AP 物理 C：力学", level: "AP", expected: "B", status: "已规划" },
        { name: "法证科学", level: "—", expected: "A", status: "已规划" },
        { name: "商业管理原理 - GT CC", level: "GT CC", expected: "A", status: "已规划" },
        { name: "英语 12 - Honor", level: "Honor", expected: "A", status: "已规划" },
        { name: "AP 统计学", level: "AP", expected: "A", status: "已规划" }
      ]
    },
    toefl: [
      { date: "当前最佳 (2025年12月)", r: 24, l: 28, s: 26, w: 24, total: 102 }
    ],
    toeflNote: "* 注：听力 28 分为 NEEC 体系下的考试成绩，因成绩与 ets.org 托福系统不互通，ETS 官方记录的 MyBest Score 为 100 分。",
    volunteering: [
      { name: "生物岛小洲村: 环保宣传", hours: 7 },
      { name: "中共三大会议旧址纪念馆: 志愿者服务", hours: 4 },
      { name: "爱尔眼科诊所爱眼小驿站", hours: 3 },
      { name: "工行广州骏景支行: 反诈宣传", hours: 3 },
      { name: "北师大广实学校：体育嘉年华志愿者", hours: 10 },
      { name: "龙湖街图书馆：志愿服务", hours: 4 },
      { name: "花城驿站：环保宣传", hours: 4 },
      { name: "其他社区志愿服务（累计）", hours: 65 }
    ],
    milestones: [
      { date: "2026年6月25日", task: "撰写各个项目的研究问题、目标用户、研究方法、评估指标以及计划样本量。" },
      { date: "2026年6月30日", task: "制作并发布个人网站初版。" },
      { date: "2026年7月30日", task: "完成时尚天河导视系统优化研究（完成观察/任务测试/数据记录/第一版原型/第一轮测试，并撰写成包含图表、数据和迭代过程的案例研究）。" },
      { date: "2026年7月30日", task: "完成实习项目匿名化处理（写清系统架构、评估标准和落地情况，并制作一个可运行的交互式 Demo，支持模拟数据）。" },
      { date: "2026年9月30日", task: "参加最后一次托福考试，争取达到预定目标。" },
      { date: "2026年12月", task: "主办并筹办 TEDx Centennial High School Youth 青年活动（目前已申请数次牌照仍未下发，计划于12月举办，争取尽早获批）。" }
    ]
  }
};
