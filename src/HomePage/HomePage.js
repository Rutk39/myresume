import React, { useState, useEffect } from 'react'
import styles from '../HomePage/HomePage.module.css'
import logo from '../assets/Rut_Logo.png'
//import profile from '../assets/Untitled.svg'

function HomePage() {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    let timeout;
    if (hovered) {
      timeout = setTimeout(() => {
        setHovered(null);
      }, 1000); // 1 second timeout
    }
    return () => clearTimeout(timeout);
  }, [hovered]);

  return (
    <div className={styles.homepage}>
      <section className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <div className={styles.tabs}> About </div>
        <div className={styles.tabs}> Projects </div>
        <div className={styles.tabs}> Contact </div>
      </section>
      
      <section className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.jobtitle}>Designer</div>
          <div className={styles.jobtitle4}>Product desiging specializing in<br></br> UI design and system design</div>
        </div>
        <div className={styles.right}>
          <div className={styles.jobtitle2}>coder</div>
          <div className={styles.jobtitle3}>Front-End developer who writes clean,<br></br> elegant and efficent code</div>
        </div>
      </section>
      <section className={styles.projects}>
        <div className={styles.left}>
          <div className={styles.jobtitle}>Designer</div>
          <div className={styles.jobtitle4}>Product desiging specializing in<br></br> UI design and system design</div>
        </div>
        <div className={styles.right}>
          <div className={styles.jobtitle2}>coder</div>
          <div className={styles.jobtitle3}>Front-End developer who writes clean,<br></br> elegant and efficent code</div>
        </div>
      </section>
    </div>
  )
}

export default HomePage