import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>Stay Connected</h2>
        <p className={styles.ctaSubtitle}>
          Join our community for exclusive offers and soap-making tips
        </p>
        <form className={styles.emailForm}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
