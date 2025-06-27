import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h2 className={styles.contactTitle}>Get in Touch</h2>
          <p className={styles.contactSubtitle}>
            We'd love to hear from you. Send us a message and we'll respond.
          </p>
        </div>

        <div className={styles.contactContent}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  className={styles.formInput}
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Visit Our Studio</h3>
                <p className={styles.infoText}>
                  123 Artisan Way
                  <br />
                  Provence, France 84000
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 6v6l4 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Business Hours</h3>
                <p className={styles.infoText}>
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Email Us</h3>
                <p className={styles.infoText}>
                  hello@lepetitsoap.com
                  <br />
                  orders@lepetitsoap.com
                </p>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Follow Our Journey</h3>
              <div className={styles.socialLinks}>
                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Pinterest"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 16v6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
