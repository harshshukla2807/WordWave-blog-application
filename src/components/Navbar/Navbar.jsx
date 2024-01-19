import React from 'react'
import styles from '../Navbar/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLink from '../AuthLinks/AuthLink'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/facebook.png" alt='facebook' width={25} height={24}/>
            <Image src="/instagram.png" alt='instagram' width={25} height={24}/>
            <Image src="/tiktok.png" alt='tiktok' width={25} height={24}/>
            <Image src="/youtube.png" alt='facebook' width={25} height={24}/>
        </div>
        <div className={styles.logo}>Blog</div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link href="/" className={styles.link}>Homepage</Link>
            <Link href="/" className={styles.link}>Contact</Link>
            <Link href="/" className={styles.link}>About</Link>
            <AuthLink/>
        </div>
    </div>
  )
} 

export default Navbar