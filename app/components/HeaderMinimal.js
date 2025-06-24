"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeaderMinimal.module.css";

export default function HeaderMinimal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.headerContent}>
          {/* Minimal Menu Icon */}
          <button
            className={styles.menuTrigger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={styles.menuText}>Menu</span>
            <div className={styles.menuIcon}>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Centered Logo */}
          <div className={styles.logo}>
            <Image
              src="/lepetit-logo.png"
              alt="Le Petit Soap"
              width={280}
              height={120}
              priority
              className={styles.logoImg}
            />
          </div>

          {/* Shop Link */}
          <a href="#showcase" className={styles.shopLink}>
            Shop
          </a>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <div className={`${styles.fullMenu} ${isMenuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeMenu}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <span></span>
          <span></span>
        </button>
        <nav className={styles.menuNav}>
          <a href="#showcase" onClick={() => setIsMenuOpen(false)}>
            <span>01</span>Shop Collection
          </a>
          <a href="#story" onClick={() => setIsMenuOpen(false)}>
            <span>02</span>Our Story
          </a>
          <a href="#values" onClick={() => setIsMenuOpen(false)}>
            <span>03</span>Our Values
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            <span>04</span>Contact
          </a>
        </nav>
      </div>
    </>
  );
}
