
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "BUILD",
    description:
      "Turn ideas into functional digital products through thoughtful engineering.",
  },
  {
    number: "02",
    title: "EXPLORE",
    description:
      "Learn through experimentation across software, data, and AI.",
  },
  {
    number: "03",
    title: "IMPROVE",
    description:
      "Keep refining my problem-solving skills and understanding of systems.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="about-section container-main">
      <div className="about-topline">
        <p className="section-label">03 / A LITTLE ABOUT ME</p>
        <span className="about-index">THE PERSON BEHIND THE CODE</span>
      </div>

      <div className="about-intro">
        <motion.h2
          className="about-title"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          CURIOUS
          <br />
          BY NATURE.
          <br />
          <span className="text-accent">BUILT THROUGH CODE.</span>
        </motion.h2>

        <div className="about-copy">
          <span className="about-copy-label">HELLO, I'M SATHWIK.</span>

          <p>
            I'm a computer science student interested in building useful
            software, understanding data, and exploring artificial
            intelligence.
          </p>

          <p>
            I enjoy turning ideas into projects, learning how systems
            work behind the scenes, and improving through hands-on
            experimentation.
          </p>

          <a href="#skills" className="about-link">
            EXPLORE MY CAPABILITIES
            <ArrowDownRight size={17} />
          </a>
        </div>
      </div>

      <div className="about-divider">
        <span>HOW I APPROACH MY WORK</span>
        <ArrowUpRight size={16} />
      </div>

      <div className="about-principles">
        {principles.map((principle, index) => (
          <motion.article
            className="about-principle"
            key={principle.number}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: reduceMotion ? 0 : index * 0.1,
            }}
          >
            <span className="principle-number">{principle.number}</span>

            <h3>{principle.title}</h3>

            <p>{principle.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
