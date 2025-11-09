"use client";

import { useEffect, useState, useRef } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "badges", label: "Badges" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) setActive(id);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  // focus first link when menu opens and handle Escape key to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      firstLinkRef.current?.focus();
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleNav = (id: string) => (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      (el as HTMLElement).focus?.();
    }
    setOpen(false);
  };

  const onKeyDown = (id: string) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleNav(id)(e);
    }
  };

  return (
    <nav role="navigation" aria-label="Main navigation">
      <div className="container nav-row">
        <div className="logo">
          <div className="badge-icon">BC</div>
          <span>Bone Cadets</span>
        </div>

        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path className="line line1" d="M4 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path className="line line2" d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path className="line line3" d="M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <ul className={`nav-list ${open ? "open" : ""}`}>
          {LINKS.map((link, idx) => (
            <li key={link.id}>
              <a
                ref={idx === 0 ? firstLinkRef : undefined}
                href={`#${link.id}`}
                className={`nav-link ${active === link.id ? "active" : ""}`}
                onClick={handleNav(link.id)}
                onKeyDown={onKeyDown(link.id)}
                aria-current={active === link.id ? "page" : undefined}
                tabIndex={0}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile overlay */}
      <div className={`mobile-backdrop ${open ? "visible" : ""}`} onClick={() => setOpen(false)} aria-hidden />
    </nav>
  );
}
