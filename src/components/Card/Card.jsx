import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.dataAndTitleInCardTop}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} - {""}
          </span>
          <span className={`${styles.category} ${styles[item.catSlug]}`}>
            {item.catSlug}
          </span>
        </div>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image className={styles.img} src={item.img} width={340} height={250} alt="" />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.dataAndTitleInCard}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} - {""}
          </span>
          <span className={`${styles.category} ${styles[item.catSlug]}`}>
            {item.catSlug}
          </span>
        </div>
        <div>
          <Link href={`/posts/${item.slug}`}>
            <h1 className={styles.title}>{item.title}</h1>
          </Link>
        </div>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 100) }}
        />
        {/* <div className={styles.desc}>{item?.desc}</div> */}
        <div className={styles.readmoreLink}>
          <Link href={`/posts/${item.slug}`}>Read More...</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
