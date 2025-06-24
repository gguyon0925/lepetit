import styles from "./Values.module.css";

export default function Values() {
  return (
    <section className={styles.values}>
      <div className={styles.valuesContainer}>
        <div className={styles.valueItem}>
          <div className={styles.valueIcon}>🐰</div>
          <span className={styles.valueText}>Cruelty-Free</span>
        </div>
        <div className={styles.valueItem}>
          <div className={styles.valueIcon}>🌱</div>
          <span className={styles.valueText}>100% Vegan</span>
        </div>
        <div className={styles.valueItem}>
          <div className={styles.valueIcon}>♻️</div>
          <span className={styles.valueText}>Eco-Friendly</span>
        </div>
      </div>
    </section>
  );
}
