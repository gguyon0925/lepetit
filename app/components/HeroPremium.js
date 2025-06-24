"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./HeroPremium.module.css";

export default function HeroPremium() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    { id: 1, name: "Lavender Dreams", image: "/soap.jpeg" },
    { id: 2, name: "Rose Garden", image: "/soap2.jpg" },
    { id: 3, name: "Mint Fresh", image: "/soap3.jpg" },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>Elevate Your</span>
              <span className={styles.titleLine2}>Daily Ritual</span>
            </h1>
            <p className={styles.heroDesc}>
              Experience the perfect blend of traditional French craftsmanship
              and modern luxury. Each bar is a work of art, meticulously created
              to transform your daily routine into a moment of pure indulgence.
            </p>
          </div>

          <div className={styles.productShowcase}>
            <h3 className={styles.showcaseTitle}>Featured Collection</h3>
            <div className={styles.productGrid}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={styles.productCard}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className={styles.productImageWrapper}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className={styles.productImage}
                    />
                    {hoveredProduct === product.id && (
                      <div className={styles.productOverlay}>
                        <span>View Details</span>
                      </div>
                    )}
                  </div>
                  <h4 className={styles.productName}>{product.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.ctaSection}>
            <a href="#showcase" className={styles.primaryCta}>
              Explore Full Collection
            </a>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>25+</span>
                <span className={styles.statLabel}>Unique Scents</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Natural</span>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetric Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.mainImageWrapper}>
            <Image
              src="/about-image.jpeg"
              alt="Le Petit Soap founder at market"
              width={800}
              height={1000}
              priority
              className={styles.mainImage}
            />
            <div className={styles.imageGradient}></div>
          </div>

          <div className={styles.founderBadge}>
            <div className={styles.badgeInner}>
              <span className={styles.badgeTitle}>Meet the Founder</span>
              <span className={styles.badgeText}>
                From farmers markets to your home
              </span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className={styles.floatingElement1}></div>
          <div className={styles.floatingElement2}></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className={styles.bgPattern}></div>
    </section>
  );
}
