import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./MenuPosts.module.css"

const MenuPosts = ({widhImage}) => {
  return (
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
        {widhImage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill sizes='' className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel} `}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}> john doe</span>
            <span className={styles.date}>10.03.2023</span>
          </div>
        </div>
        </Link>
        <Link href="/" className={styles.item}>
       { widhImage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill sizes='' className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture} `}>Culture</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}> john doe</span>
            <span className={styles.date}>10.03.2023</span>
          </div>
        </div>
        </Link>
        <Link href="/" className={styles.item}>
        {widhImage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill sizes='' className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food} `}>Food</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}> john doe</span>
            <span className={styles.date}>10.03.2023</span>
          </div>
        </div>
        </Link>
        <Link href="/" className={styles.item}>
       {widhImage &&  <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill sizes='' className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion} `}>Fashion</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}> john doe</span>
            <span className={styles.date}>10.03.2023</span>
          </div>
        </div>
        </Link>
      </div>
  )
}

export default MenuPosts