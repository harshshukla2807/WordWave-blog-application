import React from "react";
import styles from "../Navbar/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLink from "../AuthLinks/AuthLink";
import "@/app/globals.css";
import { FaHome } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";

function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo_item}>
            <Image
              className={styles.logo_img}
              src="/logo2.png"
              alt="logo"
              width={50}
              height={50}
            />
            <div className="blogName_styles">WordWave</div>
          </Link>
        </div>

        <div>
          <ThemeToggle />
        </div>

        <div className={styles.links}>
        <div className={styles.button_style}>
          <Link href="/" className={styles.link}>
            <FaHome className={styles.navIcon} />
            Homepage
          </Link>
        </div>
        <div className={styles.button_style}>
        
          <Link href="/blog" className={styles.link}>
            <TbCategory2 className={styles.navIcon} />
            Blog
          </Link>
        </div>
          <AuthLink />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
