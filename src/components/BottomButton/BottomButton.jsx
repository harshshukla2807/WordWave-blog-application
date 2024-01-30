import React from "react";
import styles from "./bottomhomebutton.module.css";
import Link from "next/link";

function BottomButton() {
  return <Link href="/blog"><button className={styles.button}>Explore Blogs</button></Link>;
}

export default BottomButton;
