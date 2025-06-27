import styles from "./Story.module.css";

export default function Story() {
  return (
    <section className={styles.story} id="story">
      <div className={styles.storyContainer}>
        <div className={styles.founderImage}>
          <img
            src="/about-image.jpeg"
            alt="Founder of Le Petit Soap Company"
            className={styles.founderPhoto}
          />
          <div className={styles.imageCaption}>
            <span className={styles.captionText}>
              Sharing our passion for natural skincare at a local market.
            </span>
          </div>
        </div>

        <div className={styles.storyContent}>
          <div className={styles.storyHeader}>
            <p className={styles.storySubtitle}>Our Origin</p>
            <h2 className={styles.storyTitle}>A Story of Purity & Passion</h2>
          </div>

          <blockquote className={styles.storyQuote}>
            "We believe in the art of soap-making, a tradition of turning
            simple, natural ingredients into an everyday luxury."
          </blockquote>

          <div className={styles.storyText}>
            <p>
              Le Petit Soap Company was born from a personal quest for skincare
              that is both pure and effective. Inspired by time-honored French
              saponification methods, our founder began crafting small-batch
              soaps from a home studio, using only the finest botanicals and
              natural oils.
            </p>
            <p>
              This journey, from humble beginnings to a celebrated name at local
              artisan markets, is fueled by a simple philosophy: your skin
              deserves the most thoughtful, nourishing care that nature can
              offer. Each bar is a testament to this belief—handcrafted with
              precision, patience, and the highest quality ingredients.
            </p>
          </div>

          <div className={styles.founderSignature}>
            <span className={styles.founderName}>Sarah Mitchell</span>
            <span className={styles.founderTitle}>Founder & Artisan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
