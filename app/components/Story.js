import styles from "./Story.module.css";

export default function Story() {
  return (
    <section className={styles.story} id="story">
      <div className={styles.storyContainer}>
        <blockquote className={styles.storyQuote}>
          "Every bar tells a story of natural beauty and artisan craftsmanship."
        </blockquote>
        <div className={styles.storyText}>
          <p>
            Our journey began in the lavender fields of Provence, where
            traditional soap-making techniques have been passed down through
            generations. Each Le Petit Soap is lovingly handcrafted using only
            the finest natural ingredients, essential oils, and botanical
            extracts. We believe in creating products that not only cleanse and
            nourish your skin but also provide a moment of daily luxury and
            self-care. From our family to yours, we&apos;re committed to
            bringing you the purest, most beautiful soaps nature has to offer.
          </p>
        </div>
      </div>
    </section>
  );
}
