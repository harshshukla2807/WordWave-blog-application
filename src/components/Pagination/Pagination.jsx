"use client";
import React from "react";
import styles from "./Pagination.module.css";
import { useRouter } from "next/navigation";

function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
