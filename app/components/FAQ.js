"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      question: "What makes Le Petit Soap different from other natural soaps?",
      answer:
        "Our soaps are crafted using traditional French soap-making techniques passed down through generations. We use only the finest natural ingredients, essential oils, and botanicals sourced sustainably. Each bar is hand-cut and cured for at least 6 weeks to ensure the highest quality and longest-lasting fragrance.",
    },
    {
      question: "Are your soaps suitable for sensitive skin?",
      answer:
        "Yes, our soaps are formulated to be gentle on all skin types, including sensitive skin. We use natural, plant-based ingredients and avoid harsh chemicals, synthetic fragrances, and artificial colors. However, we always recommend doing a patch test if you have specific allergies or very sensitive skin.",
    },
    {
      question: "How long do the soaps last?",
      answer:
        "Our artisan soaps typically last 4-6 weeks with daily use, depending on storage conditions and usage. To extend the life of your soap, store it in a well-draining soap dish away from direct water when not in use.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we ship within France and to select European countries. We're working on expanding our shipping options to include worldwide delivery. Please contact us if you're interested in international shipping to your location.",
    },
    {
      question: "What ingredients do you use in your soaps?",
      answer:
        "We use a base of premium olive oil, coconut oil, and sustainable palm oil. Each soap variety includes specific essential oils and natural botanicals - for example, our Lavender Dreams contains organic lavender essential oil and dried lavender flowers from Provence.",
    },
    {
      question: "Are your products vegan and cruelty-free?",
      answer:
        "Absolutely! All of our products are 100% vegan - we never use animal-derived ingredients. We're also completely cruelty-free and have never tested on animals. We believe in creating beautiful products that are ethical and sustainable.",
    },
    {
      question: "How should I store my soap?",
      answer:
        "Store your soap in a cool, dry place away from direct sunlight. Use a well-draining soap dish to prevent the soap from sitting in water. Proper storage will help maintain the soap's quality and extend its lifespan.",
    },
    {
      question: "Can I return or exchange products?",
      answer:
        "We stand behind the quality of our products. If you're not completely satisfied, please contact us within 30 days of purchase. We'll work with you to resolve any issues, including exchanges or refunds for unopened products.",
    },
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <p className={styles.faqSubtitle}>
            Everything you need to know about our artisan soaps and natural
            ingredients
          </p>
        </div>

        <div className={styles.faqContent}>
          <div className={styles.faqList}>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  openItems.has(index) ? styles.open : ""
                }`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.has(index)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.toggleIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div className={styles.faqAnswer}>
                  <div className={styles.answerContent}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className={styles.faqCta}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M24 16v8m0 8h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className={styles.ctaTitle}>Still have questions?</h3>
              <p className={styles.ctaText}>
                We're here to help! Contact our customer service team and we'll
                get back to you within 24 hours.
              </p>
              <a href="#contact" className={styles.ctaButton}>
                <span>Contact Us</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 10h10m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
