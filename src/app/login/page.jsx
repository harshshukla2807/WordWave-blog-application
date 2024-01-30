"use client"
import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Loading from "../Loading";



const LoginPage = () => {
  
  const { data , status} = useSession()

  const router= useRouter()
  
  if(status==="loading"){
    return <div className={styles.loading}>Loading...</div>
  }
  if(status==="authenticated"){
    router.push('/')
  }
  
  console.log(data,status)
  return (
    <Suspense fallback={<Loading/>} >
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={()=>signIn("google")}>Sign in with Google</div>
        <div className={styles.socialButton} onClick={()=>signIn("github")}>Sign in with Github</div>
      </div>
    </div>
    </Suspense>
  );
};

export default LoginPage;