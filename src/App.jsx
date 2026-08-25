import { useRef } from "react";
import About from "./components/About.jsx";
import ContactFooter from "./components/ContactFooter.jsx";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "./components/Projects.jsx";
import Strengths from "./components/Strengths.jsx";
import usePremiumAnimations from "./hooks/usePremiumAnimations.js";

export default function App() {
  const rootRef = useRef(null);
  usePremiumAnimations(rootRef);

  return (
    <div className="app">
      <Nav />
      <main ref={rootRef}>
        <Hero />
        <About />
        <Projects />
        <Strengths />
        <ContactFooter />
      </main>
    </div>
  );
}
