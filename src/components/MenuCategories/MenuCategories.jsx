import Link from "next/link";
import React from "react";
import styles from "./MenuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=sports"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Sports
      </Link>
      <Link href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>
        Fashion
      </Link>
      <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>
        Food
      </Link>
      <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>
        Travel
      </Link>
      <Link href="/blog?cat=fitness" className={`${styles.categoryItem} ${styles.culture}`}>
        Fitness
      </Link>
      <Link href="/blog?cat=tech" className={`${styles.categoryItem} ${styles.coding}`}>
        Tech
      </Link>
    </div>
  );
};

export default MenuCategories;