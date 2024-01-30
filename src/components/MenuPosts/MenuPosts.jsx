import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./MenuPosts.module.css"

const MenuPosts = ({widhImage}) => {
  return (
      <div className={styles.items}>
        <Link href="/posts/top-5-safety-tips-for-travelers" className={styles.item}>
        {widhImage && <div className={styles.imageContainer}>
          <Image src="/travel/travelsafe.jpeg" alt="" fill sizes='' className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel} `}>Travel</span>
          <h3 className={styles.postTitle}>Top 5 Safety Tips for Travelers</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Harsh Shukla</span>
            <span className={styles.date}>  -  2024-01-23</span>
          </div>
        </div>
        </Link>
        <Link href="/posts/dhoni-please-retire-choker-dhoni" className={styles.item}>
       { widhImage && <div className={styles.imageContainer}>
          <Image src="/sports/dhoni.webp" alt="" fill sizes='' className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture} `}>Sports</span>
          <h3 className={styles.postTitle}>Dhoni Please Retire" Choker dhoni?.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Harsh Shukla</span>
            <span className={styles.date}>  -  2024-01-27</span>
          </div>
        </div>
        </Link>
        <Link href="/posts/demystifying-kubernetes-a-brief-overview" className={styles.item}>
        {widhImage && <div className={styles.imageContainer}>
          <Image src="/tech/Kubernetes.png" alt="" fill sizes='' className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food} `}>Tech</span>
          <h3 className={styles.postTitle}>Demystifying Kubernetes: A Brief Overview</h3>
          <div className={styles.detail}>
            <span className={styles.username}> Srishti </span>
            <span className={styles.date}>  -  2024-01-30</span>
          </div>
        </div>
        </Link>
      </div>
  )
}

export default MenuPosts