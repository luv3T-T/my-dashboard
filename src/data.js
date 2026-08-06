export const profile = {
  name: "艾欣",
  latin: "AIXIN",
  role: "财务数据分析师",
  focus: "财务分析 / 经营分析 / AI 辅助数据分析",
  phone: "19356210821",
  email: "19356210821@163.com",
  school: "铜陵学院",
  major: "税收学",
  classNote: "一本专业 · 2027 届",
  intro:
    "财务专业在读，能独立完成收入成本拆分、费用结构分析和现金流变动归因。熟练使用 Excel、SQL、Power BI 与 AI 工具，擅长把散落的数据整理成清晰、可复用的结论。",
  summary:
    "习惯用结构化方式呈现数据、图表与结论，既能下沉到字段和公式，也能向上提炼经营判断。关注 AI 在财务与办公场景中的落地，主动把工具嵌入分析流程，让常规分析更快、更准。",
  stats: [
    { value: "5", unit: "年", label: "上市公司财务数据" },
    { value: "2", unit: "家", label: "腾讯 / 网易" },
    { value: "40%", unit: "", label: "AI 辅助分析提效" },
    { value: "3", unit: "小时", label: "月度费用统计耗时" },
  ],
  certificates: ["初级会计证书", "大学英语四级", "普通话一级乙等"],
};

export const experience = [
  {
    period: "2025.07 — 2025.09",
    title: "财务会计助理",
    org: "安徽粤港钢构有限公司",
    points: [
      "负责日常现金收付与网银转账，登记现金日记账并日清月结，经手资金无差错。",
      "审核各部门报销单据，月均审核 50 余份，核查发票真伪与审批签字。",
      "用 Excel 搭建收付款台账，以数据透视表按部门汇总费用，月度统计时间由半天缩短至 3 小时内。",
    ],
  },
  {
    period: "2026.02 — 2026.04",
    title: "上市公司财务分析与 AI 辅助报告项目",
    org: "腾讯 / 网易",
    tools: "Excel · Power BI · AI 工具",
    points: [
      "自主收集并清洗两家公司 5 年财务数据，覆盖收入、净利润、毛利率、费用率、现金流等核心指标。",
      "用 Excel 完成同比与环比趋势计算，制作收入增长与费用结构对比图表。",
      "用 Power BI 搭建核心财务指标看板，整合关键数据并添加筛选器，支持动态查看。",
      "用 AI 工具梳理分析框架、提炼报告结构并润色结论，形成收入增速、盈利稳定性、费用控制与现金流走势的明确对比结论。",
    ],
  },
];

export const projects = [
  {
    id: "dashboard",
    title: "核心财务指标看板",
    subtitle: "Power BI 动态财务看板",
    image: "/assets/project-dashboard.webp",
    tags: ["Power BI", "Excel", "财务分析"],
    description:
      "基于腾讯与网易 2021—2025 年财务数据，整合年度与季度指标，构建 3 页动态看板，支持公司、年份、季度筛选联动。",
    stats: [
      { value: "3", label: "报告页" },
      { value: "37", label: "可视化" },
      { value: "16", label: "DAX 度量" },
      { value: "5", label: "表关系" },
    ],
    featured: true,
  },
  {
    id: "report",
    title: "上市公司财务分析报告",
    subtitle: "分析框架 · 结论提炼 · AI 润色",
    image: "/assets/project-report.webp",
    tags: ["财务分析", "报告", "AI 工具"],
    description:
      "梳理收入增速、盈利稳定性、费用控制与现金流走势四条主线，形成腾讯与网易的对比结论与关注点。",
    stats: [
      { value: "10", label: "章节结构" },
      { value: "7", label: "对比表格" },
      { value: "4", label: "分析维度" },
    ],
  },
  {
    id: "data",
    title: "上市公司数据分析",
    subtitle: "同比环比 · 多表关联 · 指标拆解",
    image: "/assets/project-data.webp",
    tags: ["Excel", "SQL", "AI"],
    description:
      "从原始年报口径整理五年核心指标，完成同比、环比与复合增速计算，支撑看板与报告的指标口径。",
    stats: [
      { value: "42", label: "季度数据" },
      { value: "20+", label: "核心指标" },
      { value: "40%", label: "AI 提效" },
    ],
  },
];

export const strengths = [
  {
    icon: "bar",
    title: "财务分析",
    text: "掌握收入、利润、毛利率、净利率、费用率、现金流等指标，能独立完成收入成本拆分、费用结构分析与现金流归因。",
  },
  {
    icon: "table",
    title: "Excel 建模",
    text: "熟练使用 SUMIFS、COUNTIFS、IF、VLOOKUP/XLOOKUP 与数据透视表，完成数据整理和财务报表分析。",
  },
  {
    icon: "database",
    title: "SQL 查询",
    text: "掌握 SELECT、WHERE、GROUP BY、JOIN 等基础语法，能进行数据查询、筛选、分组统计与多表连接。",
  },
  {
    icon: "dashboard",
    title: "Power BI 看板",
    text: "掌握数据导入、基础清洗、图表制作、指标卡与筛选器，能独立搭建可交互的业务数据看板。",
  },
  {
    icon: "spark",
    title: "AI 工具应用",
    text: "熟练使用 ChatGPT、Codex、Claude 等工具完成资料整理、框架搭建、报告润色，常规分析效率提升约 40%。",
  },
  {
    icon: "chip",
    title: "AI 行业理解",
    text: "关注生成式 AI、AI Agent、多模态 AI、AI+财务、AI+办公自动化等趋势，具备持续学习与开源方案复用能力。",
  },
];
