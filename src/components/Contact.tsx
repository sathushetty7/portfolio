"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";

const socialLinks = [
  { label: "GITHUB", href: "https://github.com/sathushetty7" },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/sathwikshetty14",
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <footer id="contact" className="contact-section container-main">
      <div className="contact-topline">
        <p className="section-label">05 / WHAT'S NEXT?</p>
        <span>HAVE A GOOD ONE. MAKE SOMETHING GREAT.</span>
      </div>

      <motion.div
        className="contact-main"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <h2 className="contact-title">
          HAVE AN IDEA?
          <br />
          <span className="text-accent">LET'S BUILD IT.</span>
        </h2>

        <p className="contact-description">
          Interested in collaborating, building something useful, or just
          talking about technology? My inbox is open.
        </p>

        <a
          className="contact-email"
          href="mailto:sathushetty7@gmail.com"
        >
          <span>
            <Mail size={18} />
            GET IN TOUCH
          </span>
          <ArrowUpRight size={24} />
        </a>
      </motion.div>

      <div className="contact-bottom">
        <a href="#home" className="contact-brand">
          SATHWIK<span className="text-accent">®</span>
          <ArrowDownRight size={15} />
        </a>

        <div className="contact-socials">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>

        <span className="contact-copyright">
            © 2026 SATHWIK
        </span>
      </div>
    </footer>
  );
}