import Image from "next/image";
import styles from "./Showcase.module.css";

export default function Showcase() {
  const products = [
    {
      src: "/soap.jpeg",
      alt: "Lavender Dreams Soap",
      name: "Lavender Dreams",
      scent: "Calming lavender & chamomile",
    },
    {
      src: "/soap2.jpg",
      alt: "Citrus Burst Soap",
      name: "Citrus Burst",
      scent: "Energizing orange & lemon",
    },
    {
      src: "/soap3.jpg",
      alt: "Rose Garden Soap",
      name: "Rose Garden",
      scent: "Romantic rose & geranium",
    },
    {
      src: "/soap4.jpg",
      alt: "Mint Fresh Soap",
      name: "Mint Fresh",
      scent: "Invigorating mint & eucalyptus",
    },
    {
      src: "/soap5.jpeg",
      alt: "Honey Oat Soap",
      name: "Honey Oat",
      scent: "Nourishing honey & oatmeal",
    },
    {
      src: "/soap6.jpg",
      alt: "Charcoal Detox Soap",
      name: "Charcoal Detox",
      scent: "Purifying charcoal & tea tree",
    },
  ];

  return (
    <section className={styles.showcase} id="showcase">
      <div className={styles.showcaseContainer}>
        <h2 className={styles.sectionTitle}>Our Artisan Collection</h2>
        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <article key={index} className={styles.productCard}>
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
    </section>
  );
}
