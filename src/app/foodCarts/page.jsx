import styles from "./page.module.css";

const FoodCarts = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.selectTitle}>List of food carts</h1>
        <ul className={styles.item}>
          <li className={styles.desc}>
            International Tech Park, Alahawas, Sector 59, Gurugram, Haryana
            122102 (Optum)
          </li>
          <li className={styles.desc}>Magnum towers, Sector 58, Gurugram</li>
          <li className={styles.desc}>
            108, LGF-2, SECTOR 44, GURGAON-122001(HR)
          </li>
          <li className={styles.desc}>Hudamarket, Sector 56</li>
        </ul>
      </div>
    </div>
  );
};

export default FoodCarts;
