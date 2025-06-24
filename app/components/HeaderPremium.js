"use client";

import { useState, useEffect } from "react";
import styles from "./HeaderPremium.module.css";

export default function HeaderPremium() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.headerInner}>
          {/* Left: Menu Toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setShowMenu(true)}
            aria-label="Open menu"
          >
            <span className={styles.menuLines}>
              <span></span>
              <span></span>
            </span>
            <span className={styles.menuLabel}>Menu</span>
          </button>

          {/* Center: Logo */}
          <div className={styles.logo}>
            <div className={styles.logoSymbol}>
              <svg viewBox="0 0 50 50" fill="none">
                <path
                  d="M25 5 L15 15 L15 35 L25 45 L35 35 L35 15 Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="currentColor"
                  fillOpacity="0.1"
                />
                <text
                  x="25"
                  y="30"
                  textAnchor="middle"
                  fontSize="14"
                  fontFamily="Playfair Display"
                  fill="currentColor"
                >
                  LP
                </text>
              </svg>
            </div>
            <div className={styles.logoWordmark}>
              <span className={styles.logoMain}>Le Petit</span>
              <span className={styles.logoTag}>Natural Luxury</span>
            </div>
          </div>

          {/* Right: Shop CTA */}
          <div className={styles.shopCta}>
            <a href="#showcase" className={styles.shopButton}>
              <span>Boutique</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M14 6l-1.5 8h-5L6 6m0 0h8m-8 0l.5-2h7l.5 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Premium Slide Menu */}
      <div className={`${styles.slideMenu} ${showMenu ? styles.show : ""}`}>
        <button
          className={styles.closeMenu}
          onClick={() => setShowMenu(false)}
          aria-label="Close menu"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M24 8L8 24M8 8l16 16"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        <div className={styles.menuContent}>
          <nav className={styles.menuNav}>
            <a href="#showcase" onClick={() => setShowMenu(false)}>
              <span className={styles.navIndex}>01</span>
              <span className={styles.navTitle}>Collection</span>
              <span className={styles.navDesc}>Handcrafted soaps</span>
            </a>
            <a href="#story" onClick={() => setShowMenu(false)}>
              <span className={styles.navIndex}>02</span>
              <span className={styles.navTitle}>Heritage</span>
              <span className={styles.navDesc}>Our story</span>
            </a>
            <a href="#values" onClick={() => setShowMenu(false)}>
              <span className={styles.navIndex}>03</span>
              <span className={styles.navTitle}>Philosophy</span>
              <span className={styles.navDesc}>Natural ingredients</span>
            </a>
            <a href="#contact" onClick={() => setShowMenu(false)}>
              <span className={styles.navIndex}>04</span>
              <span className={styles.navTitle}>Contact</span>
              <span className={styles.navDesc}>Get in touch</span>
            </a>
          </nav>

          <div className={styles.menuFooter}>
            <p className={styles.menuTagline}>
              "Artisanal soaps crafted with
              <br />
              traditional French techniques"
            </p>
            <div className={styles.menuDivider}></div>
            <p className={styles.menuInfo}>Est. 2018 • 100% Natural</p>
          </div>
        </div>
      </div>
    </>
  );
}
