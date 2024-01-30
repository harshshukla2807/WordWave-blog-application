import Featured from "@/components/Featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";
import { Suspense } from "react";
import Loading from "./Loading";
import BottomButton from "@/components/BottomButton/BottomButton";

export default function Home({searchParams}) {

const page= parseInt(searchParams.page)||1;

  return (
    <div className={styles.container}>
    <Suspense fallback={<Loading/>}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
      <BottomButton/>
    </Suspense>
    </div>
  );
}
