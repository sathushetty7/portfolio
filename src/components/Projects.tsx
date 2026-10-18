
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "COASTAL KITS",
    category: "E-COMMERCE / WEB DEVELOPMENT",
    description:
      "A sports jersey shopping experience built around product discovery, a clean storefront, and a seamless customer journey.",
    year: "2026",
    color: "#dce4f8",
    textColor: "#171717",
    visual: "CK.",
    tags: ["NEXT.JS", "TYPESCRIPT", "SUPABASE"],
    href: "https://coastalkits.in",
  },
  {
    number: "02",
    name: "ASTROVIEW",
    category: "SPACE / INTERACTIVE WEB",
    description:
      "An exploration of space through an interactive web experience designed to make astronomical information engaging and accessible.",
    year: "2026",
    color: "#20232c",
    textColor: "#f4f3ef",
    visual: "A*",
    tags: ["NEXT.JS", "API INTEGRATION", "UI DESIGN"],
    href: "",
  },
  {
    number: "03",
    name: "DATAPULSE",
    category: "DATA / ANALYTICS",
    description:
      "A dataset analyzer concept focused on helping users explore data and understand patterns through an accessible interface.",
    year: "2026",
    color: "#dcebe2",
    textColor: "#171717",
    visual: "D/",
    tags: ["PYTHON", "STREAMLIT", "DATA ANALYSIS"],
    href: "",
  },
];

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="projects-section container-main">
      <div className="projects-heading">
        <div>
          <p className="section-label">02 / SELECTED WORK</p>
          <h2 className="projects-title">
            MADE WITH
            <br />
            <span className="text-accent">INTENTION.</span>
          </h2>
        </div>

        <p className="projects-intro">
          A selection of projects exploring development, design, and
          problem-solving.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className="project-item"
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="project-visual"
              style={{
                backgroundColor: project.color,
                color: project.textColor,
              }}
            >
              <span className="project-visual-label">
                PROJECT_{project.number}
              </span>

              <span className="project-visual-mark" aria-hidden="true">
                {project.visual}
              </span>

              <span className="project-visual-year">{project.year}</span>
            </div>

            <div className="project-details">
              <div className="project-meta">
                <span>{project.number} / 03</span>
                <span>{project.category}</span>
              </div>

              <div className="project-title-row">
                <h3>{project.name}</h3>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-open"
                    aria-label={`Open ${project.name}`}
                  >
                    <ArrowUpRight size={22} />
                  </a>
                ) : (
                  <span
                    className="project-open project-open-disabled"
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={22} />
                  </span>
                )}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <a href="#contact" className="projects-bottom-link">
        HAVE A PROJECT IN MIND?
        <ArrowDownRight size={18} />
      </a>
    </section>
  );
}
