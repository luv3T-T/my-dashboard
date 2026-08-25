import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import SectionLiquid from "./SectionLiquid.jsx";
import WarpText from "./WarpText.jsx";

const tickerItems = [
  "腾讯控股 00700.HK",
  "2025 REVENUE ¥7,517.66 亿",
  "营收同比 +13.86%",
  "网易 09999.HK",
  "净利率 30.0%",
  "OCF CAGR 19.45%",
  "毛利率 +10.7pp",
  "销售费用率 -0.96pp",
  "2026Q1 双增长",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="hero-grain" />
      </div>
      <SectionLiquid className="hero-liquid" />

      <svg
        className="hero-marketline"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,150 C90,132 130,172 210,148 C290,124 330,86 410,102 C500,120 540,164 620,142 C700,120 750,66 830,86 C910,106 950,138 1030,116 C1110,94 1150,48 1200,64"
          fill="none"
          stroke="rgba(227,201,130,0.75)"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0,150 C90,132 130,172 210,148 C290,124 330,86 410,102 C500,120 540,164 620,142 C700,120 750,66 830,86 C910,106 950,138 1030,116 C1110,94 1150,48 1200,64"
          fill="none"
          stroke="rgba(201,164,92,0.28)"
          strokeWidth="9"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="1200" cy="64" r="5" fill="#e3c982" />
      </svg>

      <div className="hero-content">
        <p className="eyebrow reveal">
          <span className="eyebrow-line" />
          FINANCE & ACCOUNTING · 会计财务方向
        </p>
        <div className="hero-title reveal">
          <div className="hero-title-mask">
            <WarpText
              className="hero-warp"
              text={"让每一笔账\n都有迹可循"}
              color="#e3c982"
              fontSize="clamp(58px, 7vw, 108px)"
              fontWeight={900}
              fontFamily="inherit"
              letterSpacing={0}
              lineHeight={1.12}
              warpStrength={0.07}
              warpScale={1.8}
              speed={0.55}
              pointerInfluence={0.42}
              pointerStrength={0.5}
              refraction={0.022}
              ripple
              style={{ height: "min(340px, 30vw)", minHeight: 230 }}
            />
          </div>
        </div>
        <h1 className="sr-only">让每一笔账都有迹可循</h1>
        <p className="hero-sub reveal">
          艾欣 · 铜陵学院税收学在读。拥有会计师事务所与制造企业两段财务实习，
          熟悉补贴资金审核、费用审核与资金管理；用 Excel、SQL、Power BI 把数据整理成清晰、可靠的报表与结论。
        </p>
        <div className="hero-actions reveal">
          <a className="btn btn-gold" href="#projects">
            查看精选项目
            <ArrowUpRight size={17} strokeWidth={2} />
          </a>
          <a className="btn btn-ghost" href="#contact">
            与我联系
          </a>
        </div>
        <div className="hero-metrics reveal">
          <div>
            <strong>2</strong>
            <span>段财务实习</span>
          </div>
          <div>
            <strong>50+</strong>
            <span>月均审核报销</span>
          </div>
          <div>
            <strong>零</strong>
            <span>差错 资金结算</span>
          </div>
        </div>
      </div>

      <div className="hero-side-label" aria-hidden="true">
        <span>FINANCE & ACCOUNTING</span>
        <i />
        <span>2026</span>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span className="ticker-item" key={i}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="向下滚动">
        <span>SCROLL</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
