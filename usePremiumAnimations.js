import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const EASE = "power4.out";
const EASE_SOFT = "power3.out";

export default function usePremiumAnimations(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isDesktop = window.matchMedia("(min-width: 980px)").matches;

      if (reduceMotion) {
        gsap.set(".hero, .section, .contact", { autoAlpha: 1 });
        gsap.set(".hero-title-mask, .section-head h2, .contact-title", {
          clipPath: "inset(0 0 0% 0)",
          yPercent: 0,
        });
        return;
      }

      // ---------- Hero opening ----------
      gsap.set(".nav", { yPercent: -120 });
      gsap.set(".hero-title-mask", {
        clipPath: "inset(0 0 100% 0)",
        yPercent: 46,
        scaleY: 1.14,
      });
      gsap.set(".hero-title-mask .warp-text", { yPercent: 16 });
      gsap.set(".eyebrow-line", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(
        ".eyebrow, .hero-sub, .hero-actions, .hero-metrics > div, .scroll-cue, .hero-side-label",
        { autoAlpha: 0, y: 34 },
      );
      gsap.set(".hero-marketline", { autoAlpha: 0 });
      gsap.set(".hero-marketline path", {
        strokeDasharray: 1600,
        strokeDashoffset: 1600,
      });
      gsap.set(".hero-ticker", { yPercent: 100 });
      gsap.set(".hero-shade", { autoAlpha: 0 });
      gsap.set(".hero-grid", { autoAlpha: 0 });

      const opening = gsap.timeline({
        defaults: { ease: EASE },
      });

      opening
        .to(".hero-shade", { autoAlpha: 1, duration: 1.4 }, 0.1)
        .to(".hero-grid", { autoAlpha: 1, duration: 1.3 }, 0.3)
        .to(".nav", { yPercent: 0, duration: 1.15 }, 0.45)
        .to(
          ".hero-title-mask",
          {
            clipPath: "inset(0 0 0% 0)",
            yPercent: 0,
            scaleY: 1,
            duration: 1.9,
          },
          0.6,
        )
        .to(".hero-title-mask .warp-text", { yPercent: 0, duration: 1.7 }, 0.6)
        .to(".eyebrow-line", { scaleX: 1, duration: 1.0 }, 1.25)
        .to(".eyebrow", { autoAlpha: 1, y: 0, duration: 0.95 }, 1.4)
        .fromTo(
          ".hero-marketline path",
          { strokeDashoffset: 1600 },
          { strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut" },
          1.15,
        )
        .to(".hero-marketline", { autoAlpha: 1, duration: 0.9 }, 1.15)
        .to(".hero-sub", { autoAlpha: 1, y: 0, duration: 1.05 }, 1.6)
        .to(".hero-actions", { autoAlpha: 1, y: 0, duration: 1.0 }, 1.78)
        .to(
          ".hero-metrics > div",
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 },
          1.95,
        )
        .to(".hero-side-label", { autoAlpha: 1, y: 0, duration: 0.9 }, 2.1)
        .to(".scroll-cue", { autoAlpha: 1, y: 0, duration: 0.9 }, 2.2)
        .to(".hero-ticker", { yPercent: 0, duration: 1.1, ease: EASE_SOFT }, 2.3);

      // ---------- Section headers ----------
      const sections = [".about", ".projects", ".strengths", ".contact"];
      sections.forEach((section) => {
        gsap.fromTo(
          `${section} .section-kicker`,
          { xPercent: -30, autoAlpha: 0 },
          {
            xPercent: 0,
            autoAlpha: 1,
            duration: 1.15,
            ease: EASE,
            scrollTrigger: {
              trigger: `${section} .section-head`,
              start: "top 82%",
              once: true,
            },
          },
        );
        gsap.fromTo(
          `${section} .section-index`,
          { yPercent: 90, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1.0,
            ease: EASE,
            scrollTrigger: {
              trigger: `${section} .section-head`,
              start: "top 82%",
              once: true,
            },
          },
        );
        gsap.fromTo(
          `${section} .section-title-warp`,
          { clipPath: "inset(0 0 100% 0)", yPercent: 80 },
          {
            clipPath: "inset(0 0 0% 0)",
            yPercent: 0,
            duration: 1.3,
            ease: EASE,
            scrollTrigger: {
              trigger: `${section} .section-head`,
              start: "top 82%",
              once: true,
            },
          },
        );
        gsap.fromTo(
          `${section} .section-note`,
          { y: 26, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.95,
            ease: EASE_SOFT,
            scrollTrigger: {
              trigger: `${section} .section-head`,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      // ---------- About ----------
      gsap.fromTo(
        ".avatar-card",
        { clipPath: "inset(0 0 100% 0)", y: 80 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 1.35,
          ease: EASE,
          scrollTrigger: { trigger: ".about-side", start: "top 80%", once: true },
        },
      );
      gsap.fromTo(
        ".cert-box",
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.0,
          ease: EASE_SOFT,
          scrollTrigger: { trigger: ".cert-box", start: "top 85%", once: true },
        },
      );
      gsap.fromTo(
        ".about-intro",
        { y: 64, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: EASE,
          scrollTrigger: { trigger: ".about-main", start: "top 82%", once: true },
        },
      );
      gsap.fromTo(
        ".stat-cell",
        { y: 54, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.0,
          stagger: 0.12,
          ease: EASE_SOFT,
          scrollTrigger: { trigger: ".stats-row", start: "top 82%", once: true },
        },
      );
      gsap.fromTo(
        ".timeline-item",
        { x: 56, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.1,
          stagger: 0.16,
          ease: EASE,
          scrollTrigger: { trigger: ".timeline", start: "top 82%", once: true },
        },
      );

      // ---------- Projects ----------
      gsap.fromTo(
        ".project-featured",
        { clipPath: "inset(0 0 100% 0)", y: 70 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 1.4,
          ease: EASE,
          scrollTrigger: {
            trigger: ".project-featured",
            start: "top 84%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".project-card",
        { y: 90, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.15,
          stagger: 0.16,
          ease: EASE,
          scrollTrigger: {
            trigger: ".project-grid",
            start: "top 82%",
            once: true,
          },
        },
      );

      // ---------- Strengths ----------
      gsap.fromTo(
        ".strength-card",
        { y: 84, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.1,
          stagger: 0.11,
          ease: EASE,
          scrollTrigger: {
            trigger: ".strength-grid",
            start: "top 80%",
            once: true,
          },
        },
      );

      // ---------- Contact ----------
      gsap.fromTo(
        ".contact-title-warp",
        { clipPath: "inset(0 0 100% 0)", yPercent: 80 },
        {
          clipPath: "inset(0 0 0% 0)",
          yPercent: 0,
          duration: 1.5,
          ease: EASE,
          scrollTrigger: {
            trigger: ".contact-inner",
            start: "top 74%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".contact-actions .btn",
        { y: 62, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.0,
          stagger: 0.13,
          ease: EASE_SOFT,
          scrollTrigger: {
            trigger: ".contact-actions",
            start: "top 82%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".contact-links",
        { y: 42, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.0,
          ease: EASE_SOFT,
          scrollTrigger: {
            trigger: ".contact-links",
            start: "top 88%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".contact-footer",
        { y: 22, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-footer",
            start: "top 95%",
            once: true,
          },
        },
      );

      // ---------- Image reveal + parallax ----------
      gsap.utils.toArray([".project-media", ".project-card-media"]).forEach((media) => {
        gsap.fromTo(
          media,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.35,
            ease: EASE,
            scrollTrigger: {
              trigger: media,
              start: "top 86%",
              once: true,
            },
          },
        );

        if (!isDesktop) return;
        const img = media.querySelector("img");
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: media,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      });

    }, root);

    const onLoad = () => ScrollTrigger.refresh();
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [rootRef]);
}
