"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import singleStyles from "./HeroSingle.module.css";
import doubleStyles from "./HeroDouble.module.css";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Mobile / single-column hero */}
      <div className={styles.heroSingle}>
        <section className={singleStyles.hero}>
          <div className={singleStyles.heroSingleContainer}>
            <h1 className={singleStyles.heroTitle}>
              <span className={singleStyles.titleLine1}>Artisan Soaps</span>
              <span className={singleStyles.titleLine2}>Crafted with Love</span>
            </h1>

            <div
              className={singleStyles.heroImageWrapper}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={singleStyles.heroImage}
                style={{
                  transform: `perspective(1000px) rotateX(${
                    mousePosition.y * 0.05
                  }deg) rotateY(${mousePosition.x * 0.05}deg)`,
                }}
              >
                <Image
                  src="/about-image.jpeg"
                  alt="Le Petit Soap artisan crafting natural soaps"
                  width={800}
                  height={600}
                  priority
                  className={singleStyles.heroImg}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                  style={{
                    transform: `translate(${mousePosition.x * 0.01}px, ${
                      mousePosition.y * 0.01
                    }px)`,
                  }}
                />
              </div>
              <div className={singleStyles.heroImageAccent}></div>
            </div>

            <p className={singleStyles.heroSubtitle}>
              All natural, handmade bath and body products inspired by
              traditional Provence soap-making techniques passed down through
              generations
            </p>

            <div className={singleStyles.heroActions}>
              <a
                href="#showcase"
                className={`${singleStyles.btn} ${singleStyles.btnPrimary}`}
                onClick={(e) => handleSmoothScroll(e, "#showcase")}
              >
                Shop the Collection
              </a>
              <a
                href="#story"
                className={`${singleStyles.btn} ${singleStyles.btnSecondary}`}
                onClick={(e) => handleSmoothScroll(e, "#story")}
              >
                Our Story
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop / two-column hero */}
      <div className={styles.heroDouble}>
        <section className={doubleStyles.hero}>
          <div className={doubleStyles.heroDoubleContainer}>
            <div className={doubleStyles.heroContent}>
              <h1 className={doubleStyles.heroTitle}>
                <span className={doubleStyles.titleLine1}>Artisan Soaps</span>
                <span className={doubleStyles.titleLine2}>
                  Crafted with Love
                </span>
              </h1>

              <p className={doubleStyles.heroSubtitle}>
                All natural, handmade bath and body products inspired by
                traditional Provence soap-making techniques passed down through
                generations
              </p>

              <div className={doubleStyles.heroActions}>
                <a
                  href="#showcase"
                  className={`${doubleStyles.btn} ${doubleStyles.btnPrimary}`}
                  onClick={(e) => handleSmoothScroll(e, "#showcase")}
                >
                  Shop the Collection
                </a>
                <a
                  href="#story"
                  className={`${doubleStyles.btn} ${doubleStyles.btnSecondary}`}
                  onClick={(e) => handleSmoothScroll(e, "#story")}
                >
                  Our Story
                </a>
              </div>
            </div>

            {/* Desktop Image */}
            <div
              className={doubleStyles.heroImageWrapperDouble}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={doubleStyles.heroImage}
                style={{
                  transform: `perspective(1000px) rotateX(${
                    mousePosition.y * 0.05
                  }deg) rotateY(${mousePosition.x * 0.05}deg)`,
                }}
              >
                <Image
                  src="/about-image.jpeg"
                  alt="Le Petit Soap artisan crafting natural soaps"
                  width={800}
                  height={600}
                  priority
                  className={doubleStyles.heroImg}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                  style={{
                    transform: `translate(${mousePosition.x * 0.01}px, ${
                      mousePosition.y * 0.01
                    }px)`,
                  }}
                />
              </div>
              <div className={doubleStyles.heroImageAccent}></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
