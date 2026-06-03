"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-data";

const COMPACT_SCROLL_Y = 72;

export function SiteHeader() {
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsCompact(window.scrollY > COMPACT_SCROLL_Y);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  useEffect(() => {
    if (isCompact) {
      setIsMobileMenuOpen(false);
    }
  }, [isCompact]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((current) => !current);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header${isCompact ? " site-header-compact" : ""}${
        isMobileMenuOpen ? " site-header-menu-open" : ""
      }`}
    >
      <div className="container header-shell">
        <div className="header-top">
          <Link href="/" className="brand" aria-label="The Grand Ayo Festival home">
            <div className="brand-mark">
              <Image src="/assets/logo.jpeg" alt="Ayo Festival logo" fill sizes="96px" />
            </div>
            <div className="brand-copy">
              <p className="brand-title">The Grand Ayo Festival</p>
              <p className="brand-subtitle">Àjọyọ̀ Nlá Ayò Ọ̀pọ́n</p>
            </div>
            <div className="brand-mark brand-mark-ogun">
              <Image src="/assets/ogun.jpeg" alt="Ogun logo" fill sizes="72px" />
            </div>
          </Link>

          <div className="header-actions">
            <Link href="/tournament-registration" className="header-cta">
              Register Now
            </Link>
            <button
              type="button"
              className="mobile-nav-toggle"
              aria-expanded={isMobileMenuOpen}
              aria-controls="primary-navigation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMobileMenu}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          id="primary-navigation"
          className={`nav${isMobileMenuOpen ? " nav-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/tournament-registration"
            className="nav-link nav-cta-link"
            onClick={closeMobileMenu}
          >
            Register Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
