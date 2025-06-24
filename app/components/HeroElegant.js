"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./HeroElegant.module.css";

export default function HeroElegant() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Left: Founder Story */}
        <div className={styles.storySection}>
          <div className={styles.storyContent}>
            <div className={styles.storyBadge}>
              <span>Founder's Story</span>
            </div>

            <h1 className={styles.heroTitle}>
              <span className={styles.titleAccent}>From farmers markets</span>
              <span className={styles.titleMain}>to your home</span>
            </h1>

            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${
                  activeTab === "story" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("story")}
              >
                Our Beginning
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "mission" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "story" && (
                <p className={styles.storyText}>
                  What started as a passion project at local farmers markets has
                  grown into a beloved collection of artisanal soaps. Each bar
                  is still crafted with the same care and attention that our
                  founder brought to that very first batch.
                </p>
              )}
              {activeTab === "mission" && (
                <p className={styles.storyText}>
                  We believe in the power of pure, natural ingredients to
                  nourish your skin. Every soap is a testament to traditional
                  French techniques, sustainable practices, and the beauty of
                  handmade luxury.
                </p>
              )}
            </div>

            <div className={styles.ctaGroup}>
              <a href="#showcase" className={styles.primaryBtn}>
                Shop Collection
              </a>
              <a href="#story" className={styles.secondaryBtn}>
                Read Full Story
              </a>
            </div>

            {/* Decorative Elements */}
            <div className={styles.decorativeCircle}></div>
          </div>
        </div>

        {/* Right: Premium Image Grid */}
        <div className={styles.imageSection}>
          <div className={styles.imageGrid}>
            <div className={styles.mainImage}>
              <Image
                src="/about-image.jpeg"
                alt="Founder at farmers market"
                width={600}
                height={800}
                priority
                className={styles.gridImage}
              />
              <div className={styles.imageCaption}>
                <span>Farmers Market</span>
                <span className={styles.captionDivider}>•</span>
                <span>Where it all began</span>
              </div>
            </div>

            <div className={styles.productImages}>
              <div className={styles.productImage}>
                <Image
                  src="/soap.jpeg"
                  alt="Artisan soap"
                  width={300}
                  height={300}
                  className={styles.gridImage}
                />
              </div>
              <div className={styles.productImage}>
                <Image
                  src="/soap2.jpg"
                  alt="Natural soap bar"
                  width={300}
                  height={300}
                  className={styles.gridImage}
                />
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className={styles.floatingBadge}>
            <span className={styles.badgeNumber}>100%</span>
            <span className={styles.badgeText}>Natural</span>
          </div>
        </div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className={styles.patternOverlay}></div>
    </section>
  );
}
