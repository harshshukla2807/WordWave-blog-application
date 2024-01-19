'use client'
import React, { useContext } from 'react'
import styles from './ThemeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

function ThemeToggle() {
  
  const {theme,toggle}=useContext(ThemeContext)
// console.log(theme)
  
return (
    <div className={styles.container} onClick={toggle} style={theme==="dark"?{backgroundColor:"white"}:{backgroundColor: "#0f172a"}}>
      <Image src="/moon.png" height={14} width={14} alt=''/>
        <div className={styles.ball} style={theme==="dark"?{left:1,background: "#0f172a"}:{right:1 , background: "white"}}></div>
      <Image src="/sun.png" height={14} width={14} alt=''/>
    </div>
  )
}

export default ThemeToggle