import { BarChart3, Cpu, Database, LayoutDashboard, Sparkles, Table2 } from "lucide-react";
import { strengths } from "../data.js";
import SectionLiquid from "./SectionLiquid.jsx";
import WarpHeading from "./WarpHeading.jsx";

const iconMap = {
  bar: BarChart3,
  table: Table2,
  database: Database,
  dashboard: LayoutDashboard,
  spark: Sparkles,
  chip: Cpu,
};

export default function Strengths() {
  return (
    <section className="section strengths" id="strengths">
      <SectionLiquid />
      <div className="section-head reveal">
        <span className="section-index">03</span>
        <div>
          <p className="section-kicker">STRENGTHS</p>
          <WarpHeading text="个人优势" className="section-title-warp" />
        </div>
        <p className="section-note">财务基础 × 数据工具 × 综合素养</p>
      </div>

      <div className="strength-grid">
        {strengths.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <article className="strength-card reveal" key={item.title}>
              <div className="strength-top">
                <span className="strength-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="strength-icon">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
