"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Image
              src="/lepetit-logo.png"
              alt="Le Petit Soap"
              className={styles.logoImg}
              width={400}
              height={180}
              priority
              sizes="(max-width: 768px) 300px, (max-width: 1200px) 350px, 400px"
            />
          </div>
          <nav className={styles.nav}>
            <a
              href="#showcase"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, "#showcase")}
            >
              Shop
            </a>
            <a
              href="#story"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, "#story")}
            >
              Our Story
            </a>
            <a
              href="#contact"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contact
            </a>
          </nav>
          <button
            className={`${styles.mobileMenuBtn} ${
              isMenuOpen ? styles.open : ""
            }`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </header>

      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
        <a
          href="#showcase"
          className={styles.mobileNavLink}
          onClick={(e) => handleNavClick(e, "#showcase")}
        >
          Shop
        </a>
        <a
          href="#story"
          className={styles.mobileNavLink}
          onClick={(e) => handleNavClick(e, "#story")}
        >
          Our Story
        </a>
        <a
          href="#contact"
          className={styles.mobileNavLink}
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          Contact
        </a>
      </div>
    </>
  );
}
