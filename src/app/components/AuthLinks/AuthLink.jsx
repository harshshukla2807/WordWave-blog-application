"use client";
import React, { useEffect, useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";

function AuthLink() {
  const status = "notauthenticated";
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth > 640) {
  //       setOpen(false);
  //     }
  //   }
  
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); 

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link} >Login</Link>
      ) : (
        <>
          <Link href="/Write" className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (  
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/Write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLink;
