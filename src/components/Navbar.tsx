
"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container-main">
      <nav className="navbar">
        <a
          href="#home"
          className="navbar-logo"
          aria-label="Sathwik home"
          onClick={() => setMenuOpen(false)}
        >
          SATHWIK<span className="text-accent">®</span>
        </a>

        <div className="navbar-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}

          <a href="#contact" className="navbar-contact">
            LET&apos;S TALK <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar-mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </header>
  );
}
