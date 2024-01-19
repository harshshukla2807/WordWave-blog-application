"use client";
import React, { useEffect, useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function AuthLink() {
  const {status} = useSession()
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
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link} >Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={()=>signOut()}>Logout</span>
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
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={signOut()}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLink;
