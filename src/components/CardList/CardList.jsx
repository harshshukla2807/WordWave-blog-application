import React from "react";
import Pagination from "../Pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../Card/Card";
  
const getData = async (page,cat) => {
  const res = await fetch(`wordwavee.vercel.app/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  const data = res.json();
  return data;
};  

async function CardList({ page,cat }) {

  const {posts,count} = await getData(page,cat);

  
  const POST_PER_PAGE=2
  
  const hasPrev= POST_PER_PAGE*(page-1) > 0
  const hasNext= POST_PER_PAGE * (page-1) + POST_PER_PAGE < count
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((item) => (
          <Card item={item} key={item._id}/>
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  );
}

export default CardList;
