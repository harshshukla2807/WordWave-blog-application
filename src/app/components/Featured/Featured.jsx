import React from 'react'
import styles from "./Featured.module.css"
import Image from 'next/image'

function Featured() {
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>
        <b>Hey, harsh shukla here!</b> Discover my stories and creative ideas 
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" fill   alt='' className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, temporibus?</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate libero vitae ipsum recusandae soluta! Quisquam voluptates atque explicabo repellendus minima quam totam officia, assumenda voluptas, quia hic voluptate modi nihil.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured