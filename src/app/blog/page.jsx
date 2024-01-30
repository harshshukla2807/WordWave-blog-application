import React, { Suspense } from 'react'
import styles from './blogPage.module.css'
import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
import Loading from '../Loading'

const BlogPage = ({searchParams}) => {
  
  const page= parseInt(searchParams.page)||1;
  const {cat} = searchParams
  
  return (
    <Suspense fallback={<Loading/>}>
    <div className={styles.container}> 
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
         <CardList page={page} cat={cat}/>
         <Menu/>
        </div>
    </div>
    </Suspense>
  )
}

export default BlogPage