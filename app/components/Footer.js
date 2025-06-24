import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>About</h3>
          <ul>
            <li>
              <a href="#story">Our Story</a>
            </li>
            <li>
              <a href="#ingredients">Ingredients</a>
            </li>
            <li>
              <a href="#process">Our Process</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#shipping">Shipping Info</a>
            </li>
            <li>
              <a href="#returns">Returns</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#newsletter">Newsletter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
