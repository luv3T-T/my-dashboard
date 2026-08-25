import { ArrowUpRight, FileText, LayoutDashboard, PieChart } from "lucide-react";
import { projects } from "../data.js";
import SectionLiquid from "./SectionLiquid.jsx";
import WarpHeading from "./WarpHeading.jsx";

const icons = {
  dashboard: LayoutDashboard,
  report: FileText,
  data: PieChart,
};

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="section projects" id="projects">
      <SectionLiquid />
      <div className="section-head reveal">
        <span className="section-index">02</span>
        <div>
          <p className="section-kicker">SELECTED WORKS</p>
          <WarpHeading text="精选项目" className="section-title-warp" />
        </div>
        <p className="section-note">以腾讯、网易为例的完整财务分析链路</p>
      </div>

      <article className="project-featured reveal">
        <a className="project-media" href="#contact" aria-label={featured.title}>
          <img
            src={featured.image}
            alt={featured.title}
            loading="lazy"
            decoding="async"
          />
          <span className="project-open">
            <ArrowUpRight size={22} />
          </span>
        </a>
        <div className="project-featured-body">
          <div className="project-tags">
            {featured.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h3>{featured.title}</h3>
          <p className="project-subtitle">{featured.subtitle}</p>
          <p className="project-desc">{featured.description}</p>
          <div className="project-stats">
            {featured.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <a className="text-link" href="#contact">
            获取完整项目资料
            <ArrowUpRight size={16} />
          </a>
        </div>
      </article>

      <div className="project-grid">
        {rest.map((project) => {
          const Icon = icons[project.id] || PieChart;
          return (
            <article className="project-card reveal" key={project.id}>
              <a className="project-card-media" href="#contact" aria-label={project.title}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
                <span className="project-card-icon">
                  <Icon size={20} />
                </span>
              </a>
              <div className="project-card-body">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>
                <div className="project-stats">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
