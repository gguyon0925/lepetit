"use client";

import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "New York, NY",
      rating: 5,
      text: "The quality of these soaps is absolutely exceptional. My skin has never felt so soft and nourished. The lavender scent is divine and lasts all day.",
      product: "Lavender Dreams",
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      text: "I've been searching for truly natural soaps for years. Le Petit Soap exceeded all my expectations. The craftsmanship is evident in every bar.",
      product: "Rose Garden",
    },
    {
      name: "Marie Dubois",
      location: "Paris, France",
      rating: 5,
      text: "These soaps remind me of my grandmother's handmade ones. The traditional techniques really make a difference. I'm a customer for life.",
      product: "Honey Oat",
    },
    {
      name: "Jennifer Adams",
      location: "San Francisco, CA",
      rating: 5,
      text: "The packaging is beautiful and the soaps are even better. My friends always ask what fragrance I'm wearing - it's just the natural soap scent!",
      product: "Citrus Burst",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={index < rating ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10 1l2.5 6.5H19l-5.5 4 2 6.5L10 14l-5.5 4 2-6.5L1 7.5h6.5L10 1z" />
      </svg>
    ));
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsHeader}>
          <h2 className={styles.testimonialsTitle}>What Our Customers Say</h2>
          <p className={styles.testimonialsSubtitle}>
            Real experiences from people who love natural luxury
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className={styles.testimonialCarousel}>
          <div className={styles.carouselTrack}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${styles.testimonialSlide} ${
                  index === currentTestimonial ? styles.active : ""
                }`}
              >
                <div className={styles.quoteIcon}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8v16c0 4.4-3.6 8-8 8H12c-4.4 0-8-3.6-8-8V24c0-4.4 3.6-8 8-8h4z"
                      fill="currentColor"
                      opacity="0.08"
                    />
                    <path
                      d="M44 24c0-4.4 3.6-8 8-8s8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8V24c0-4.4 3.6-8 8-8h4z"
                      fill="currentColor"
                      opacity="0.08"
                    />
                  </svg>
                </div>

                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className={styles.testimonialText}>
                  "{testimonial.text}"
                </blockquote>

                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <span className={styles.avatarInitial}>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className={styles.authorDetails}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorLocation}>
                      {testimonial.location}
                    </p>
                    <p className={styles.productPurchased}>
                      <span className={styles.productLabel}>
                        Verified Purchase:
                      </span>
                      <span className={styles.productName}>
                        {testimonial.product}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className={styles.carouselIndicators}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentTestimonial ? styles.active : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={() =>
              setCurrentTestimonial(
                currentTestimonial === 0
                  ? testimonials.length - 1
                  : currentTestimonial - 1
              )
            }
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={() =>
              setCurrentTestimonial(
                (currentTestimonial + 1) % testimonials.length
              )
            }
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className={styles.trustIndicators}>
          <div className={styles.trustItem}>
            <div className={styles.trustNumber}>500+</div>
            <div className={styles.trustLabel}>Happy Customers</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNumber}>4.9</div>
            <div className={styles.trustLabel}>Average Rating</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNumber}>100%</div>
            <div className={styles.trustLabel}>Natural Ingredients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
