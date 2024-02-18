"use client";
import React, { useEffect, useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FaPenNib } from "react-icons/fa";

function AuthLink() {
  const { status } = useSession();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (status === "loading") {
    return null;
  }

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          <span className={`${styles.link_button} ${styles.button_style}`}>
            Login
          </span>
        </Link>
      ) : (
        <>
          <Link
            href="/write"
            className={`${styles.link} ${styles.button_style} ${styles.writeLink}`}
          >
            <FaPenNib className={styles.navIcon} />
            Write
          </Link>
          <span className={`${styles.link}  ${styles.logoutSpan}`} onClick={() => signOut()}>
            <div className={`${styles.link_button} ${styles.link_rev}`}>
              Logout
            </div>
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link
            href="/"
            className={styles.burger_link}
            onClick={() => setOpen(!open)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={styles.burger_link}
            onClick={() => setOpen(!open)}
          >
            Blog
          </Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={() => setOpen(!open)}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" onClick={() => setOpen(!open)}>
                Write
              </Link>
                <span className={`${styles.link} ${styles.logout}`} onClick={() => signOut()}>
                  Logout
                </span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLink;
