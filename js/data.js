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
        id: "personal-web",
        title: "Personal Portfolio Website",
        category: ["tech", "ux"],
        tags: ["HTML/CSS/JS", "HCI Portfolio", "Responsive Design"],
        description: "Designed and built a custom, agency-free portfolio from scratch to showcase academic projects and UX research work.",
        highlights: [
          "Rejects generic template frameworks for a unique, personalized expression",
          "Implements premium micro-interactions and dark-mode aesthetic"
        ]
      },
      {
        id: "usaco",
        title: "USACO Bronze Division promotion",
        category: ["tech"],
        tags: ["Algorithms", "Java", "Competitive Programming"],
        description: "Successfully promoted to Bronze level in the USACO (USA Computing Olympiad) testing algorithmic problem solving.",
        highlights: [
          "Advanced through initial levels demonstrating strong foundation in computing foundations",
          "Applied logic structures similar to Advanced Object Oriented Design (GT)"
        ]
      },
      {
        id: "tianhe-ux",
        title: "Fashion Tianhe Signage System Optimization",
        category: ["ux"],
        tags: ["Wayfinding Systems", "User Research", "Interaction Prototyping"],
        description: "A comprehensive UX case study investigating the complex wayfinding system of Guangzhou's largest underground mall, Fashion Tianhe.",
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
        tags: ["Urban Sociology", "Data Analysis", "Bilibili Video Essay"],
        description: "A popular science video essay mapping urban space usage and social behaviors in relation to traffic congestion, gaining 50,000+ views on Bilibili.",
        highlights: [
          "Analyzed spatial conflicts between micro-mobility vehicles and pedestrians",
          "Created custom visualizations to explain complex urban dynamics to the general public"
        ]
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
        ]
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
        highlights: [
          "Organized 1-week screening event on campus big screens, reaching 5,000+ students and visitors",
          "Managed cross-functional student crew (sound, acting, post-production) under tight deadlines"
        ]
      },
      {
        id: "chschat-xyz",
        title: "CHSchat.xyz - Centennial HS Hub",
        category: ["tech", "humanities", "leadership"],
        tags: ["Web Dev", "Custom Tools", "Campus Media"],
        description: "Developed and launched CHSchat.xyz, a customized hub integrating utility tools, school news, and communication tools for Centennial High School.",
        highlights: [
          "Created a unified dashboard for student life and resource sharing",
          "Custom utility tools designed to match the high school student workflow"
        ]
      },
      {
        id: "tedx-organizer",
        title: "TEDx Youth Event Organizer",
        category: ["leadership"],
        tags: ["Event Planning", "Licensing", "Public Speaking"],
        description: "Leading the licensing, speaker curation, and event execution of a TEDx youth event planned for December 2026.",
        highlights: [
          "Managing licensing applications with TED organization in New York",
          "Coordinating team structures and venue logistics ahead of the event"
        ]
      },
      {
        id: "badminton-club",
        title: "Centennial Badminton Club Co-President",
        category: ["leadership"],
        tags: ["Club Operations", "Event Planning", "Team Leadership"],
        description: "Serving as the Co-President of the Centennial Badminton Club, managing daily operations, practice sessions, and organizing intramural tournaments.",
        highlights: [
          "Organized club tournaments, attracting active members and enriching campus athletic culture",
          "Managed practice schedules and court logistics, fostering skills development and team cohesion"
        ]
      },
      {
        id: "teen-mental-health-research",
        title: "Social Media and Teen Mental Health Research",
        category: ["ux", "humanities"],
        tags: ["Mental Health", "Social Media", "Interaction Design", "Academic Research"],
        description: "An independent research paper analyzing the effects of upward comparison and algorithms on adolescent mental health.",
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
        { name: "AP Psychology", grade: "A (AP 4-5 Target)", level: "AP" },
        { name: "AP Calculus BC", grade: "B (AP 5 Target, G10 Score: 3)", level: "AP" },
        { name: "AP Computer Science A", grade: "AP 4-5 Target (Self-study, G10 Score: 3)", level: "AP" },
        { name: "AP Micro Economics", grade: "AP 4/5 (G10 Result)", level: "AP" }
      ],
      g12: [
        { name: "AP Statistics", detail: "HCC college credit alternative option", expected: "A", status: "Planned" },
        { name: "Advance Topic in CS", detail: "CS continuation track", expected: "A", status: "Planned" },
        { name: "English 12", detail: "Senior English requirement", expected: "A", status: "Planned" },
        { name: "Sports for Life", detail: "Physical education elective", expected: "A", status: "Planned" },
        { name: "Law and the Citizen", detail: "Social sciences elective", expected: "A", status: "Planned" },
        { name: "AP Physics I", detail: "Scientific reasoning requirement", expected: "B-A", status: "Planned" }
      ]
    },
    toefl: [
      { date: "Current Best (Dec 2025)", r: 24, l: 26, s: 26, w: 24, total: 102 },
      { date: "Expected (Sept 2026)", r: 25, l: 27, s: 27, w: 27, total: "108-110", target: true }
    ],
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
        id: "personal-web",
        title: "个人作品集网站",
        category: ["tech", "ux"],
        tags: ["HTML/CSS/JS", "人机交互作品集", "响应式设计"],
        description: "从零设计并搭建个人作品集网站，不依赖任何第三方机构，展示学术项目及用户体验（UX）研究成果。",
        highlights: [
          "拒绝套用模板框架，展现独特且个性化的个人风采",
          "实现高级微交互效果与深色模式视觉美学"
        ]
      },
      {
        id: "usaco",
        title: "USACO 铜牌组晋级",
        category: ["tech"],
        tags: ["算法", "Java", "算法竞赛"],
        description: "在USACO（美国计算机奥林匹克竞赛）中测试算法问题解决能力，并成功晋级铜牌组。",
        highlights: [
          "通过初级关卡，展现了扎实的计算基础",
          "应用了与高级面向对象设计（乔治亚理工GT）类似的逻辑结构"
        ]
      },
      {
        id: "tianhe-ux",
        title: "时尚天河导视系统优化研究",
        category: ["ux"],
        tags: ["导视系统", "用户研究", "交互原型设计"],
        description: "针对广州最大的地下商场——时尚天河复杂的导视系统，进行了一项全面的用户体验（UX）案例研究。",
        highlights: [
          "进行用户观察与任务测试，记录导航失败的痛点",
          "开发改良版的版面原型，以优化寻路和空间导航体验",
          "目标完成时间：7月30日（包含迭代反馈闭环）"
        ]
      },
      {
        id: "gz-traffic-video",
        title: "B站视频-广州拥堵真的是电动车导致的吗？",
        category: ["humanities", "ux"],
        tags: ["城市社会学", "数据分析", "B站视频短片"],
        description: "一部探讨城市空间利用、社会行为与交通拥堵关联的科普类视频短片，在B站获得5万+播放量。",
        highlights: [
          "分析了微型代步工具与行人之间的空间冲突",
          "制作自定义可视化图表，向公众解释复杂的城市动态"
        ]
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
        ]
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
        highlights: [
          "获得在拥有5000名师生的学校大屏幕上进行为期1周的展映机会，向校内外人员展示",
          "在紧迫的截止日期下，管理包括声音、表演和后期制作在内的跨职能学生团队"
        ]
      },
      {
        id: "chschat-xyz",
        title: "为Centennial创建CHSchat.xyz",
        category: ["tech", "humanities", "leadership"],
        tags: ["网页开发", "定制工具", "校园媒介"],
        description: "为Centennial High School开发并发布了CHSchat.xyz，这是一个集定制化工具、校园新闻与日常沟通为一体的网站。",
        highlights: [
          "为学生生活与资源共享打造统一的仪表板",
          "设计了合理契合高中生日常工作流的定制化实用工具"
        ]
      },
      {
        id: "tedx-organizer",
        title: "TEDx 活动主办与筹办",
        category: ["leadership"],
        tags: ["活动策划", "牌照申请", "公共演讲"],
        description: "作为主要承办人，负责筹备将于2026年12月举办的TEDx青年活动，包括牌照申请、讲者筛选和活动落地。",
        highlights: [
          "与纽约TED总部直接对接并管理牌照申请流程",
          "在活动开始前统筹团队架构和场地物流工作"
        ]
      },
      {
        id: "badminton-club",
        title: "Centennial Badminton Club",
        category: ["leadership"],
        tags: ["俱乐部运营", "活动策划", "团队领导力"],
        description: "作为Co-President，日常管理羽毛球俱乐部，负责组织训练、内部选拔以及校内羽毛球赛事的筹办与推广。",
        highlights: [
          "组织并筹办校内羽毛球赛事，为社员提供竞技与交流的平台",
          "统筹日常训练计划，合理调配场地资源，提升社团凝聚力"
        ]
      },
      {
        id: "teen-mental-health-research",
        title: "社交媒体与青少年心理健康研究",
        category: ["ux", "humanities"],
        tags: ["心理健康", "社交媒体", "交互设计", "学术研究"],
        description: "一项关于向上社会比较和算法推荐对青少年心理健康影响的独立研究报告。",
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
        { name: "AP 心理学", grade: "A (AP 4-5分目标)", level: "AP" },
        { name: "AP 微积分 BC", grade: "B (AP 5分目标，十年级成绩：3)", level: "AP" },
        { name: "AP 计算机科学 A", grade: "AP 4-5分目标 (自学，十年级成绩：3)", level: "AP" },
        { name: "AP 微观经济学", grade: "AP 4分 (十年级成绩)", level: "AP" }
      ],
      g12: [
        { name: "AP 统计学", detail: "同学推荐去HCC学，以此免除大学学分", expected: "A", status: "已规划" },
        { name: "高级计算机课题", detail: "确定选 (计算机进阶方向)", expected: "A", status: "已规划" },
        { name: "英语 12", detail: "高年级英语必修", expected: "A", status: "已规划" },
        { name: "终身运动", detail: "确定选 (体育选修)", expected: "A", status: "已规划" },
        { name: "法律与公民", detail: "确定选 (社会科学选修)", expected: "A", status: "已规划" },
        { name: "AP 物理 1", detail: "科学推理必修", expected: "B-A", status: "已规划" }
      ]
    },
    toefl: [
      { date: "当前最佳 (2025年12月)", r: 24, l: 26, s: 26, w: 24, total: 102 },
      { date: "目标成绩 (2026年9月)", r: 25, l: 27, s: 27, w: 27, total: "108-110", target: true }
    ],
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
