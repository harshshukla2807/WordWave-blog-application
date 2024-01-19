import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/Comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  const data = res.json();
  return data;
};
const SinglePage = async({params}) => {
  
  const {slug}= params;
  
const data= await getData(slug)
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>
            {data.title}
          </h1>
          <div className={styles.user}>
           {data?.user?.image && <div className={styles.userImageContainer}>
              <Image src={data.user.image} alt="" fill sizes="" className={styles.image} />
            </div>}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data.user.name}</span>
              <span className={styles.date}>{data.createdAt.substring(0,10)}</span>
            </div>
          </div>
        </div>
       {data?.img && <div className={styles.imageContainer}>
          <Image src={data.img} alt="" sizes="" fill className={styles.image} />
        </div>}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} dangerouslySetInnerHTML={{__html: data?.desc}}/>
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <div className={styles.menuDiv}>
        </div>
          <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
