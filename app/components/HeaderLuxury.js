"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeaderLuxury.module.css";

export default function HeaderLuxury() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContent}>
        {/* Left Navigation */}
        <nav className={styles.navLeft}>
          <a href="#showcase" className={styles.navLink}>
            Collection
          </a>
          <a href="#story" className={styles.navLink}>
            Heritage
          </a>
        </nav>

        {/* Center Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logoMark}>
            <span>Le</span>
            <span>Petit</span>
          </div>
          <div className={styles.logoSubtext}>Soap Company</div>
        </div>

        {/* Right Navigation */}
        <nav className={styles.navRight}>
          <a href="#values" className={styles.navLink}>
            Values
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
