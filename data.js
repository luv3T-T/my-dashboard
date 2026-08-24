export const profile = {
  name: "艾欣",
  latin: "AIXIN",
  role: "会计助理 / 财务助理",
  focus: "账务处理 / 资金管理 / 票据审核 / 税务方向",
  phone: "19356210821",
  email: "aixin_yuan0821@163.com",
  school: "铜陵学院",
  major: "税收学",
  classNote: "一本专业 · 2027 届",
  intro:
    "税收学专业在读，具备基础财务与资金管理知识。在华诚会计师事务所与制造企业两段实习中，参与补贴资金申请审核、费用审核与资金台账工作，熟悉现金收付、银行结算与对账流程。",
  summary:
    "细致严谨、责任心强，具备良好的沟通协调能力、风险意识与保密意识。熟练使用 Excel、SQL、Power BI 完成数据整理与报表制作，愿意从基础财务工作做起，可稳定长期发展。",
  stats: [
    { value: "2", unit: "段", label: "财务相关实习" },
    { value: "50+", unit: "份", label: "月均报销单审核" },
    { value: "3", unit: "小时", label: "月度费用统计耗时" },
    { value: "零", unit: "", label: "差错 · 经手资金零差错" },
  ],
  certificates: ["初级会计职称证书", "大学英语四级", "普通话一级乙等"],
};

export const experience = [
  {
    period: "2026.08 — 2026.11",
    title: "审计助理",
    org: "华诚会计师事务所",
    points: [
      "参与 2026 年自主品类产品以旧换新数码及智能产品购新补贴资金申请工作，协助收集、整理并提交补贴申请材料，确保资料完整、符合申报要求。",
      "审核购新补贴申请资料，核验购买凭证、发票信息与申报金额的一致性，识别并退回不合规、不完整的单据。",
      "建立补贴审核台账，登记申请受理、审核进度与资金发放状态，编制审核汇总表，为补贴资金申请提供数据支撑。",
      "配合开展补贴资金专项核查，对异常申请进行复核与信息确认，整理并归档审核档案。",
    ],
  },
  {
    period: "2025.07 — 2025.09",
    title: "财务会计助理",
    org: "安徽粤港钢构有限公司",
    points: [
      "负责公司日常款项收付及网银转账操作，逐笔登记现金日记账，坚持日清月结，经手资金零差错。",
      "定期赴银行打印对账单并逐笔核对账面余额，分类归档银行回单、对账单等单据，及时跟进业务部门回款进度，异常情况汇总反馈主管。",
      "用 Excel 建立并持续更新收付款台账，运用数据透视表按部门汇总费用、跟踪回款，月度统计时间由半天缩短至 3 小时内。",
      "审核各部门报销单据，核查发票真伪、金额及审批签字，月均审核 50 余份，对不合规单据及时退回，注重财务信息保密。",
    ],
  },
  {
    period: "2026.02 — 2026.04",
    title: "上市公司财务分析与 AI 提效项目",
    org: "腾讯 / 网易",
    tools: "Excel · Power BI · AI 工具",
    points: [
      "自主收集并清洗目标公司近 3–5 年财务数据，覆盖营业收入、毛利率、费用率、现金流等核心指标，形成规范数据底稿。",
      "用 Excel 完成同比、环比趋势计算与现金流变动归因，制作收入增长与费用结构对比图表，形成明确分析结论。",
      "用 Power BI 搭建核心财务指标看板，整合关键数据并添加筛选器，便于动态查看与汇报。",
      "借助 Codex 辅助资料整理、报告结构优化与润色，减少重复性工作，提高财务分析与报告输出效率。",
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
    subtitle: "分析框架 · 结论提炼 · 报告输出",
    image: "/assets/project-report.webp",
    tags: ["财务分析", "报告", "对比分析"],
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
    tags: ["Excel", "SQL", "数据清洗"],
    description:
      "从原始年报口径整理五年核心指标，完成同比、环比与复合增速计算，支撑看板与报告的指标口径。",
    stats: [
      { value: "42", label: "季度数据" },
      { value: "20+", label: "核心指标" },
      { value: "5", label: "年数据" },
    ],
  },
];

export const strengths = [
  {
    icon: "bar",
    title: "财务与资金",
    text: "熟悉现金收付、银行结算、对账及台账登记流程，参与补贴资金申请审核与费用审核，具备基础财务与资金管理知识。",
  },
  {
    icon: "table",
    title: "Excel 建模",
    text: "熟练使用 VLOOKUP/XLOOKUP、SUMIFS、COUNTIFS 与数据透视表，完成数据整理、费用汇总与财务报表分析。",
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
    text: "会使用 ChatGPT、Codex、Claude 等 AI 办公软件，辅助资料整理、文案润色、报告提纲生成与办公效率提升。",
  },
  {
    icon: "chip",
    title: "综合素质",
    text: "细致严谨、责任心强，具备良好的沟通协调能力、风险意识与保密意识，能配合业务部门完成资金协调与流程跟进，可稳定长期发展。",
  },
];
