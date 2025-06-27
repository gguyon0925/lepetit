"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Showcase.module.css";

export default function Showcase() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      src: "/soap.jpeg",
      alt: "Lavender Dreams Soap",
      name: "Lavender Dreams",
      scent: "Calming lavender & chamomile",
      description:
        "Hand-harvested lavender from Provence meets gentle chamomile in this soothing blend. Perfect for evening rituals and peaceful moments.",
      ingredients:
        "Organic olive oil, coconut oil, lavender essential oil, chamomile extract, natural colorants",
      benefits: "Calms the mind, soothes sensitive skin, promotes relaxation",
      weight: "110g",
    },
    {
      src: "/soap2.jpg",
      alt: "Citrus Burst Soap",
      name: "Citrus Burst",
      scent: "Energizing orange & lemon",
      description:
        "A vibrant awakening of Mediterranean citrus oils that energizes your senses and brightens your morning routine.",
      ingredients:
        "Organic olive oil, sweet orange oil, lemon essential oil, vitamin E, natural citrus zest",
      benefits:
        "Energizes the senses, brightens skin tone, rich in antioxidants",
      weight: "110g",
    },
    {
      src: "/soap3.jpg",
      alt: "Rose Garden Soap",
      name: "Rose Garden",
      scent: "Romantic rose & geranium",
      description:
        "Delicate rose petals and balancing geranium create a luxurious floral symphony that nurtures both skin and spirit.",
      ingredients:
        "Organic olive oil, rose otto, geranium essential oil, dried rose petals, shea butter",
      benefits: "Hydrates deeply, balances skin, promotes emotional well-being",
      weight: "110g",
    },
    {
      src: "/soap4.jpg",
      alt: "Mint Fresh Soap",
      name: "Mint Fresh",
      scent: "Invigorating mint & eucalyptus",
      description:
        "Crisp peppermint and refreshing eucalyptus awaken your senses while providing a cooling, cleansing experience.",
      ingredients:
        "Organic olive oil, peppermint oil, eucalyptus oil, menthol crystals, green clay",
      benefits: "Refreshes and cools, clarifies skin, invigorates the senses",
      weight: "110g",
    },
    {
      src: "/soap5.jpeg",
      alt: "Honey Oat Soap",
      name: "Honey Oat",
      scent: "Nourishing honey & oatmeal",
      description:
        "Golden wildflower honey and finely ground oats create a gentle, nourishing bar perfect for sensitive and dry skin.",
      ingredients:
        "Organic olive oil, wildflower honey, colloidal oatmeal, goat milk, vanilla extract",
      benefits: "Deeply moisturizes, gently exfoliates, soothes irritated skin",
      weight: "110g",
    },
    {
      src: "/soap6.jpg",
      alt: "Charcoal Detox Soap",
      name: "Charcoal Detox",
      scent: "Purifying charcoal & tea tree",
      description:
        "Activated bamboo charcoal and purifying tea tree oil work together to draw out impurities and cleanse deeply.",
      ingredients:
        "Organic olive oil, activated charcoal, tea tree oil, bentonite clay, peppermint oil",
      benefits: "Deep cleanses pores, removes toxins, balances oily skin",
      weight: "110g",
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className={styles.showcase} id="showcase">
      <div className={styles.showcaseContainer}>
        <h2 className={styles.sectionTitle}>Our Artisan Collection</h2>
        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <article
              key={index}
              className={styles.productCard}
              onClick={() => openModal(product)}
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={300}
                height={400}
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                }}
              />
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productScent}>{product.scent}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>

            <div className={styles.modalContent}>
              <div className={styles.modalImage}>
                <Image
                  src={selectedProduct.src}
                  alt={selectedProduct.alt}
                  width={300}
                  height={400}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className={styles.modalDetails}>
                <div className={styles.modalHeader}>
                  <h3 className={styles.modalTitle}>{selectedProduct.name}</h3>
                  <p className={styles.modalScent}>{selectedProduct.scent}</p>
                  <span className={styles.modalWeight}>
                    {selectedProduct.weight}
                  </span>
                </div>

                <div className={styles.modalDescription}>
                  <p>{selectedProduct.description}</p>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.sectionLabel}>Key Benefits</h4>
                  <p className={styles.sectionText}>
                    {selectedProduct.benefits}
                  </p>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.sectionLabel}>Natural Ingredients</h4>
                  <p className={styles.sectionText}>
                    {selectedProduct.ingredients}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
