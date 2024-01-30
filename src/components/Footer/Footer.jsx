import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import  "@/app/globals.css"
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo2.png" alt="wordwavelogo" width={50} height={50} />
          <h1 className="blogName_styles">WordWave</h1>
        </div>
        <p className={styles.desc}>
        "WordWave: Your haven for inspiration, creativity, and captivating stories. Join us on this literary journey as we explore the boundless realms of imagination and share the magic of words!"
        </p>
      </div>
      <div className={styles.links}>
      <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/write">Write</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=travel">Travel</Link>
          <Link href="/blog?cat=sports">sports</Link>
          <Link href="/blog?cat=tech">tech</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
