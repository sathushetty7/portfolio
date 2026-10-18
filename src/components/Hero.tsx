
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero-reference">
      <div className="hero-reference-grid" aria-hidden="true" />

      <div className="hero-background-word hero-word-top" aria-hidden="true">
        ENGINEER
      </div>

      <div className="hero-background-word hero-word-bottom" aria-hidden="true">
        SOLUTIONS
      </div>

      <motion.div
        className="hero-reference-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero-reference-eyebrow">
          COMPUTER SCIENCE • TECHNOLOGY • INNOVATION
        </p>

        <h1 className="hero-reference-title">
          SATHWIK<span>.</span>
        </h1>

        <p className="hero-reference-role">
          Computer Science <span>Engineer</span>
        </p>

        <p className="hero-reference-location">
          INDIA <span>|</span> SOFTWARE • AI/ML • DEVELOPMENT
        </p>

        <a href="#work" className="hero-reference-button">
          View My Work <ArrowUpRight size={18} />
        </a>
      </motion.div>

      <motion.div
        className="hero-reference-portrait"
        initial={reduceMotion ? false : { opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        <img
          src="/images/sathwik-portrait.png"
          alt="Sathwik — Computer Science Engineer"
        />
      </motion.div>

      <div className="hero-reference-bottom">
        <span>IDEAS INTO REALITY.</span>
        <a href="#about">
          DISCOVER MY JOURNEY <ArrowUpRight size={15} />
        </a>
        <span>PORTFOLIO — 2026</span>
      </div>
    </section>
  );
}
