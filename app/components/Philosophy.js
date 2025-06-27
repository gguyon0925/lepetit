import Image from "next/image";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  const principles = [
    {
      title: "Pure Natural Ingredients",
      description:
        "We source only the finest organic oils, botanicals, and essential oils from sustainable farms across France and Europe.",
      features: [
        "Organic olive oil base",
        "Wild-harvested botanicals",
        "Pure essential oils",
        "No synthetic additives",
      ],
    },
    {
      title: "Traditional Craftsmanship",
      description:
        "Each soap is handcrafted using time-honored French soap-making techniques passed down through generations.",
      features: [
        "Cold-process method",
        "6-week curing period",
        "Hand-cut precision",
        "Small batch production",
      ],
    },
    {
      title: "Sustainable Practices",
      description:
        "Our commitment to the environment guides every decision, from ingredient sourcing to packaging materials.",
      features: [
        "Zero waste production",
        "Biodegradable packaging",
        "Local ingredient sourcing",
        "Carbon-neutral shipping",
      ],
    },
  ];

  const ingredients = [
    {
      name: "Essential Oils",
      origin: "Around The World",
      benefit: "Calming & antiseptic properties",
      description:
        "Hand-picked at dawn when essential oils are most concentrated and blended with the finest ingredients to create the most luxurious soaps",
    },
    {
      name: "Luxury Butters",
      origin: "Around The World",
      benefit: "Conditioning & Moisturizing",
      description:
        "Rich in fatty acids that reduce inflammation and redness and signs of aging",
    },
    {
      name: "Olive Oil",
      origin: "Tuscany, Italy",
      benefit: "Deep moisturizing & gentle cleansing",
      description: "Cold-pressed within 24 hours of harvest for maximum purity",
    },
    {
      name: "Carrying Oils",
      origin: "Around The World",
      benefit: "Nourishing & Protecting Properties",
      description:
        "Rich in vitamins, antioxidants, and essential fatty acids that nourish and protect the skin",
    },
  ];

  return (
    <section className={styles.philosophy} id="values">
      <div className={styles.philosophyContainer}>
        {/* Header */}
        <div className={styles.philosophyHeader}>
          <h2 className={styles.philosophyTitle}>Our Philosophy</h2>
          <p className={styles.philosophySubtitle}>
            Rooted in tradition, inspired by nature, crafted with purpose
          </p>
        </div>

        {/* Principles Grid */}
        <div className={styles.principlesGrid}>
          {principles.map((principle, index) => (
            <div key={index} className={styles.principleCard}>
              <div className={styles.principleNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className={styles.principleTitle}>{principle.title}</h3>
              <p className={styles.principleDescription}>
                {principle.description}
              </p>
              <ul className={styles.principleFeatures}>
                {principle.features.map((feature, idx) => (
                  <li key={idx} className={styles.principleFeature}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.5 4.5L6.5 11.5L2.5 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Ingredients */}
        <div className={styles.ingredientsSection}>
          <div className={styles.ingredientsHeader}>
            <h3 className={styles.ingredientsTitle}>Signature Ingredients</h3>
            <p className={styles.ingredientsSubtitle}>
              Each ingredient is carefully selected for its purity, potency, and
              sustainable origin
            </p>
          </div>

          <div className={styles.ingredientsGrid}>
            {ingredients.map((ingredient, index) => (
              <div key={index} className={styles.ingredientCard}>
                <div className={styles.ingredientHeader}>
                  <h4 className={styles.ingredientName}>{ingredient.name}</h4>
                  <span className={styles.ingredientOrigin}>
                    {ingredient.origin}
                  </span>
                </div>
                <div className={styles.ingredientBenefit}>
                  {ingredient.benefit}
                </div>
                <p className={styles.ingredientDescription}>
                  {ingredient.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Promise */}
        <div className={styles.qualityPromise}>
          <div className={styles.promiseContent}>
            <div className={styles.promiseIcon}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M20 32l8 8 16-16"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className={styles.promiseTitle}>Our Quality Promise</h3>
            <p className={styles.promiseText}>
              Every bar of Le Petit Soap represents our unwavering commitment to
              natural luxury. We guarantee that each ingredient meets our strict
              standards for purity, sustainability, and ethical sourcing. If
              you're not completely satisfied, we'll make it right.
            </p>
            <div className={styles.promiseBadges}>
              <span className={styles.promiseBadge}>100% Natural</span>
              <span className={styles.promiseBadge}>Cruelty-Free</span>
              <span className={styles.promiseBadge}>Vegan</span>
              <span className={styles.promiseBadge}>Sustainable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
