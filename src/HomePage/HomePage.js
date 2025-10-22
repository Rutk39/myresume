import React from 'react'
import styles from '../HomePage/HomePage.module.css'
import logo from '../assets/Rut_Logo.png'
import { motion } from 'framer-motion'

//import profile from '../assets/rutpatel.png'
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
      <section className={`${styles.content} ${styles.sectionWithBackground}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      className={styles.intro}>
          <div className={styles.horizontalLine}>
          </div>
          <h1 className={styles.name}>I'm Rut, a <br></br>Full Stack Developer</h1>

          <p className={styles.description}>passionate about building dynamic, responsive web apps. Explore my skills, projects, and journey in web development—and feel free to reach out.
          </p>
        </motion.div>
          
          <button className={styles.downArrow}> V </button>
          
        </section>
      
    </div>
  )
}

export default HomePage