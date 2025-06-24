"use client";

import { useState, useEffect } from "react";
import styles from "./HeaderElegant.module.css";

export default function HeaderElegant() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerWrapper}>
        {/* Premium Badge Logo */}
        <div className={styles.logoBadge}>
          <div className={styles.logoInner}>
            <span className={styles.logoTop}>Le Petit</span>
            <span className={styles.logoBottom}>Soap Co.</span>
            <div className={styles.logoAccent}></div>
          </div>
        </div>

        {/* Floating Navigation */}
        <nav className={styles.floatingNav}>
          <a
            href="#showcase"
            className={styles.navLink}
            onMouseEnter={() => setHoveredNav("shop")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <span className={styles.navNumber}>01</span>
            <span className={styles.navText}>Collection</span>
            {hoveredNav === "shop" && (
              <span className={styles.navHint}>View our soaps</span>
            )}
          </a>
          <a
            href="#story"
            className={styles.navLink}
            onMouseEnter={() => setHoveredNav("story")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <span className={styles.navNumber}>02</span>
            <span className={styles.navText}>Our Story</span>
            {hoveredNav === "story" && (
              <span className={styles.navHint}>Meet the founder</span>
            )}
          </a>
          <a
            href="#values"
            className={styles.navLink}
            onMouseEnter={() => setHoveredNav("values")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <span className={styles.navNumber}>03</span>
            <span className={styles.navText}>Process</span>
            {hoveredNav === "values" && (
              <span className={styles.navHint}>How we craft</span>
            )}
          </a>
        </nav>

        {/* Contact Button */}
        <a href="#contact" className={styles.contactBtn}>
          <span>Get in Touch</span>
          <div className={styles.btnGlow}></div>
        </a>
      </div>
    </header>
  );
}
