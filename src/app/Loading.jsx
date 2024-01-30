
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.overlay}>
    <div className={styles.overlay__inner}>
        <div className={styles.overlay__content}>
        <span className={styles.spinner} ></span></div>
    </div>
</div>

  )
}