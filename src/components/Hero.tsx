
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero container-main">
      <div className="hero-topline">
        <span>CREATIVE DEVELOPER</span>
        <span className="hero-location">
          <span className="status-dot" />
          BASED IN INDIA
        </span>
        <span className="hero-index">PORTFOLIO / 2026</span>
      </div>

      <div className="hero-main">
        <motion.div
          className="hero-title-wrap"
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-eyebrow">ENGINEERING MEETS CREATIVITY.</p>

          <h1 className="hero-title">
            BUILDING
            <br />
            DIGITAL
            <br />
            <span className="hero-accent">
              EXPERIENCES<span className="hero-period">.</span>
            </span>
          </h1>
        </motion.div>

        <motion.aside
          className="hero-aside"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <span className="hero-aside-number">01 / INTRODUCTION</span>

          <p>
            I'm Sathwik — a computer science student exploring software,
            data, and AI to turn ideas into useful digital products.
          </p>

          <a className="hero-link" href="#work">
            EXPLORE MY WORK
            <ArrowUpRight size={17} />
          </a>
        </motion.aside>
      </div>

      <div className="hero-bottom">
        <span>CODE WITH PURPOSE.</span>

        <a href="#work" className="hero-scroll">
          SCROLL TO EXPLORE
          <ArrowDownRight size={17} />
        </a>

        <span>DESIGN × TECHNOLOGY</span>
      </div>
    </section>
  );
}
