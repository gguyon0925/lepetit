"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroLuxury.module.css";

export default function HeroLuxury() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/soap.jpeg", "/soap2.jpg", "/soap3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.badge}>Est. 2018</div>

            <h1 className={styles.heroTitle}>
              <span className={styles.titleLight}>The Art of</span>
              <span className={styles.titleBold}>Natural</span>
              <span className={styles.titleBold}>Luxury</span>
            </h1>

            <p className={styles.description}>
              Each bar is meticulously crafted using centuries-old French
              techniques, combining pure essential oils with sustainably sourced
              botanicals to create an unparalleled sensory experience.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureNumber}>01</span>
                <span className={styles.featureText}>100% Natural</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureNumber}>02</span>
                <span className={styles.featureText}>Handcrafted</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureNumber}>03</span>
                <span className={styles.featureText}>Sustainable</span>
              </div>
            </div>

            <a href="#showcase" className={styles.ctaButton}>
              <span>Explore Collection</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m0 0l-7-7m7 7l-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Left: Image Carousel */}
        <div className={styles.imageSection}>
          <div className={styles.imageCarousel}>
            {images.map((img, index) => (
              <div
                key={img}
                className={`${styles.imageSlide} ${
                  index === currentImage ? styles.active : ""
                }`}
              >
                <Image
                  src={img}
                  alt="Luxury artisan soap"
                  width={800}
                  height={1000}
                  priority={index === 0}
                  className={styles.heroImage}
                />
              </div>
            ))}
          </div>
          <div className={styles.imageIndicators}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentImage ? styles.active : ""
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Content */}
      </div>
    </section>
  );
}
