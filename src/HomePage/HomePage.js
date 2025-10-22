import React from 'react'
import styles from '../HomePage/HomePage.module.css'
import logo from '../assets/Rut_Logo.png'
//import profile from '../assets/Untitled.svg'

function HomePage() {
  return (
    <div className={styles.homepage}>
      <section className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <div className={styles.tabs}> About </div>
        <div className={styles.tabs}> Projects </div>
        <div className={styles.tabs}> Contact </div>
      </section>
      
    </div>
  )
}

export default HomePage