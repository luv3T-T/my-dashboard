import { Briefcase, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { experience, profile } from "../data.js";
import SectionLiquid from "./SectionLiquid.jsx";
import WarpHeading from "./WarpHeading.jsx";

export default function About() {
  return (
    <section className="section about" id="about">
      <SectionLiquid />
      <div className="section-head reveal">
        <span className="section-index">01</span>
        <div>
          <p className="section-kicker">PROFILE</p>
          <WarpHeading text="个人经历" className="section-title-warp" />
        </div>
        <p className="section-note">从数据整理到经营结论，形成可复用的分析路径</p>
      </div>

      <div className="about-grid">
        <aside className="about-side reveal">
          <div className="avatar-card">
            <div className="avatar-ring">
              <img
                src="/assets/avatar.webp"
                alt="艾欣头像"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3>{profile.name}</h3>
            <div className="avatar-divider" />
            <dl>
              <div>
                <dt>
                  <GraduationCap size={15} />
                  教育
                </dt>
                <dd>
                  {profile.school} · {profile.major}
                  <small>{profile.classNote}</small>
                </dd>
              </div>
              <div>
                <dt>
                  <Mail size={15} />
                  邮箱
                </dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>
                  <Phone size={15} />
                  电话
                </dt>
                <dd>
                  <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </dd>
              </div>
              <div>
                <dt>
                  <MapPin size={15} />
                  定位
                </dt>
                <dd>财务分析 / 经营分析 / AI+财务</dd>
              </div>
            </dl>
          </div>
          <div className="cert-box">
            <p>证书与语言</p>
            {profile.certificates.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>

        <div className="about-main">
          <div className="about-intro reveal">
            <p className="lead">{profile.intro}</p>
            <p>{profile.summary}</p>
          </div>

          <div className="stats-row reveal">
            {profile.stats.map((s) => (
              <div className="stat-cell" key={s.label}>
                <strong>
                  {s.value}
                  <span>{s.unit}</span>
                </strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>

          <div className="timeline reveal">
            {experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <strong>{item.org}</strong>
                  {item.tools && <em className="timeline-tools">{item.tools}</em>}
                </div>
                <div className="timeline-body">
                  <h4>
                    <Briefcase size={16} />
                    {item.title}
                  </h4>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
