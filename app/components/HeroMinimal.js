"use client";

import Image from "next/image";
import styles from "./HeroMinimal.module.css";

export default function HeroMinimal() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Large Typography */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.smallText}>
              Handcrafted in small batches
            </span>
            <span className={styles.largeText}>Pure</span>
            <span className={styles.largeText}>Natural</span>
            <span className={styles.largeText}>Artisan</span>
          </h1>

          <div className={styles.heroMeta}>
            <p className={styles.tagline}>
              Traditional French soap-making
              <br />
              meets modern skincare
            </p>
            <a href="#showcase" className={styles.ctaButton}>
              Discover Collection
            </a>
          </div>
        </div>

        {/* Floating Image */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/about-image.jpeg"
              alt="Artisan soap making process"
              width={600}
              height={800}
              priority
              className={styles.heroImage}
            />
          </div>
          <div className={styles.imageDecoration}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
