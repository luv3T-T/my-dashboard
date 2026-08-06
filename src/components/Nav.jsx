import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "关于我" },
  { href: "#projects", label: "精选项目" },
  { href: "#strengths", label: "个人优势" },
  { href: "#contact", label: "联系" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="回到首页">
          <span className="brand-mark">A</span>
          <span className="brand-name">
            艾欣 <em>AIXIN</em>
          </span>
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="主导航">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
            联系我
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </a>
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-label="打开菜单"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
