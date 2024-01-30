import React from 'react'
import styles from "./Featured.module.css"
import Image from 'next/image'
import Link from 'next/link'


function Featured() {
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>
        <b>Explore WordWave,</b>  Where Stories Unfold and Creativity Takes Flight! 
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/travel/travelsafe.jpeg" fill sizes=''  alt='' className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Top 5 Safety Tips for Travelers</h1>
          <p className={styles.postDesc}>Staying safe on the road is a universal concern for every traveler. Whether it's avoiding scams or being prepared for emergencies, here are five concise safety tips to ensure a smooth journey:</p>
          <button className={styles.button}><Link href="/posts/top-5-safety-tips-for-travelers">Read More...</Link></button>
          
        </div>
      </div>
    </div>
  )
}

export default Featured