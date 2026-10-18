"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "DEVELOPMENT",
    description: "Building interfaces and functional web applications.",
    skills: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "PROGRAMMING",
    description: "Strengthening programming fundamentals and problem-solving.",
    skills: ["Python", "C", "Java", "Data Structures", "Algorithms"],
  },
  {
    number: "03",
    title: "DATA & AI",
    description: "Exploring data analysis, machine learning, and intelligent systems.",
    skills: ["SQL", "Excel", "Pandas", "Machine Learning", "Deep Learning", "Generative AI"],
  },
  {
    number: "04",
    title: "TOOLS",
    description: "Tools for development, collaboration, and creative work.",
    skills: ["Git", "GitHub", "VS Code", "Flutter", "Streamlit", "DaVinci Resolve"],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="skills-section container-main">
      <div className="skills-heading">
        <div>
          <p className="section-label">04 / THE TOOLKIT</p>
          <h2 className="skills-title">
            SKILLS IN
            <br />
            <span className="text-accent">PROGRESS.</span>
          </h2>
        </div>

        <p className="skills-intro">
          A growing toolkit shaped by curiosity, hands-on projects, and a
          commitment to continuous learning.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.number}
            className="skill-group"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : index * 0.08,
            }}
          >
            <div className="skill-group-top">
              <span>{group.number} / 04</span>
              <ArrowUpRight size={18} />
            </div>

            <h3>{group.title}</h3>
            <p className="skill-group-description">{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="skills-footnote">
        <span className="status-dot" />
        ALWAYS LEARNING. ALWAYS BUILDING.
      </div>
    </section>
  );
}
