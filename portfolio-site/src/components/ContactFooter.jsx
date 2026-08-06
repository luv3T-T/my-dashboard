import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data.js";
import SectionLiquid from "./SectionLiquid.jsx";
import WarpHeading from "./WarpHeading.jsx";

export default function ContactFooter() {
  return (
    <footer className="contact" id="contact">
      <SectionLiquid className="contact-liquid" />
      <div className="contact-inner">
        <div className="section-head reveal">
          <span className="section-index">04</span>
          <div>
            <p className="section-kicker">CONTACT</p>
          </div>
          <p className="section-note">税收是国家血脉，征纳和谐共筑繁荣。</p>
        </div>

        <WarpHeading
          text="与我联系"
          className="contact-title-warp"
          fontSize="clamp(66px, 8vw, 120px)"
          fontWeight={900}
          height={150}
        />

        <div className="contact-actions reveal">
          <a className="btn btn-gold btn-lg" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
            <ArrowUpRight size={17} />
          </a>
          <a className="btn btn-ghost btn-lg" href={`tel:${profile.phone}`}>
            <Phone size={18} />
            {profile.phone}
          </a>
        </div>

        <div className="contact-links reveal">
          <span>
            开放机会：财务分析 · 经营分析 · 数据分析师 · 报表分析 · 资金管理 · 财务BP · AI+财务
          </span>
          <div className="contact-socials">
            <a href="mailto:19356210821@163.com" aria-label="邮箱">
              <Mail size={18} />
            </a>
            <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <p>© 2026 艾欣 · 财务数据分析作品集</p>
          <a href="#top">
            回到顶部
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
