import styles from "./Story2.module.css";

export default function Story() {
  return (
    <section className={styles.story} id="story">
      <div className={styles.storyContainer}>
        <div className={styles.founderImage}>
          <img
            src="/about-image.jpeg"
            alt="Le Petit Soap Company founder at farmers market"
            className={styles.founderPhoto}
          />
        </div>

        <div className={styles.storyContent}>
          <div className={styles.storyHeader}>
            <h2 className={styles.storyTitle}>Meet the Founder</h2>
            <p className={styles.storySubtitle}>
              A passion for natural beauty, handcrafted with love
            </p>
          </div>

          <blockquote className={styles.storyQuote}>
            "Every bar tells a story of natural beauty and artisan
            craftsmanship."
          </blockquote>

          <div className={styles.storyText}>
            <p>
              What started as a personal quest for truly natural skincare has
              blossomed into Le Petit Soap Company. Inspired by traditional
              French soap-making techniques passed down through generations, I
              began crafting small batches in my kitchen using only the finest
              natural ingredients.
            </p>
            <p>
              From those humble beginnings to sharing our soaps at local farmers
              markets, every step of this journey has been guided by one simple
              belief: your skin deserves the purest, most nourishing care nature
              can provide. Each bar is still lovingly handcrafted, using
              carefully sourced essential oils, botanical extracts, and
              time-honored techniques.
            </p>
            <p>
              Today, Le Petit Soap continues to grow as a family business,
              bringing you artisanal soaps that transform your daily routine
              into a moment of natural luxury and self-care.
            </p>
          </div>

          <div className={styles.founderSignature}>
            <div className={styles.signatureLine}></div>
            <p className={styles.signatureText}>
              <span className={styles.founderName}>Cynthia Guyon</span>
              <span className={styles.founderTitle}>
                Founder & Artisan Soap Maker
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
