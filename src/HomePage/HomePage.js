import React from 'react'
import styles from '../HomePage/HomePage.module.css'
import logo from '../assets/Rut_Logo.png'
import { motion } from 'framer-motion'
import { FaHtml5, FaJava, FaPython, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 }, // Slide in from left
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};


const skills = [
  { name: "HTML & CSS", icon: <FaHtml5 color="#e34c26" size={50} /> },
  { name: "Java", icon: <FaJava color="#007396" size={50} /> },
  { name: "Python", icon: <FaPython color="#3776AB" size={40} /> },
  { name: "JavaScript", icon: <FaJsSquare color="#f7df1e" size={40} /> },
  { name: "ReactJS", icon: <FaReact color="#61DBFB" size={40} /> },
  { name: "NodeJS", icon: <FaNodeJs color="#68A063" size={40} /> },
  { name: "SQL", icon: <FaDatabase color="#00758f" size={40} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={40} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" size={40} /> },
];

const projects = [
  {
    title: 'Real-Time ASL Recognition',
    description: 'Built an LSTM model with MediaPipe for gesture classification. Improved accuracy by 30%.',
    link: 'https://github.com/Rutk39/ASL-Recognition',
  },
  {
    title: 'IoT Smart Garden System',
    description: 'Automated irrigation using sensors and Flask dashboard. Reduced water usage by 33%.',
    link: 'https://github.com/Rutk39/Smart-Garden',
  },
  {
    title: 'WeCureIT Healthcare Platform',
    description: 'Full-stack Django app for patient records and appointments. Deployed on AWS.',
    link: 'https://github.com/Rutk39/WeCureIT',
  },
];


function HomePage() {
  return (
    <div className={styles.homepage}>
      <section className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <button className={styles.tabs}> About </button>
        <button className={styles.tabs}
          onClick={() => {
              const section = document.getElementById('projectSection');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }> Projects </button>
        <button className={styles.tabs}> Contact </button>
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
          
        <button className={styles.downArrow}
          onClick={() => {
            const section = document.getElementById('targetSection');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}> V 
        </button>
          
       </section>
        <section className={`${styles.content} ${styles.sectionWithBackground2}`} id="targetSection">
        <div className={styles.webBackground}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.webSvg}>
            {[...Array(10)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 10}
                x2="100"
                y2={i * 10}
                className={styles.webLine}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 10}
                y1="0"
                x2={i * 10}
                y2="100"
                className={styles.webLine}
              />
            ))}
          </svg>
        </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.aboutme}>
              
              <div className={styles.horizontalLine2}>  
              </div>
              <div className={styles.name2}> <br></br><h2>About me</h2>
              <p className={styles.description2}>I’m a data science graduate student passionate about building AI-powered systems that solve real-world problems. With hands-on experience in machine learning, cloud platforms, and full-stack development, I’ve led impactful academic and personal projects—from real-time ASL recognition to IoT-based automation.
              </p>
              <button className={styles.learnmoreButton}
              onClick={() => {
                const section = document.getElementById('targetSection');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}> Learn More </button>
              </div>
              
              <div className={styles.horizontalLine2}>  
              </div>
              <div className={styles.name2}><h2>My Extensive skills in: </h2>
              </div>
            </motion.div>
            
            <motion.div
              className={styles.middleSection}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <div className={styles.skillSlider} variants={containerVariants} initial="hidden" animate="visible">
                {skills.map((skill, index) => (
                  <motion.div key={index} className={styles.skillcard} variants={cardVariants}>
                    {skill.icon}
                    <p>{skill.name}</p>
                  </motion.div>
                ))}
              </div>

            </motion.div>

          
        </section>
        <section className={`${styles.content} ${styles.sectionWithBackground2}`} id="projectSection">
        <div className={styles.webBackground}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.webSvg}>
            {[...Array(10)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 10}
                x2="100"
                y2={i * 10}
                className={styles.webLine}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 10}
                y1="0"
                x2={i * 10}
                y2="100"
                className={styles.webLine}
              />
            ))}
          </svg>
        </div>
          <motion.div className={styles.sectionHeader}>
            <motion.div className={styles.horizontalLine3}></motion.div>
            <h2 className={styles.name3}>Projects</h2>
          </motion.div>

          <motion.div
            className={styles.projectCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            
            {projects.map((project, index) => (
              <motion.div key={index} className={styles.projectCard} variants={cardVariants}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                  View Project
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section className={`${styles.content} ${styles.sectionWithBackground2}`} id="projectSection">
        <div className={styles.webBackground}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.webSvg}>
            {[...Array(10)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 10}
                x2="100"
                y2={i * 10}
                className={styles.webLine}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 10}
                y1="0"
                x2={i * 10}
                y2="100"
                className={styles.webLine}
              />
            ))}
          </svg>
        </div>
          <motion.div className={styles.sectionHeader}>
            <motion.div className={styles.horizontalLine3}></motion.div>
            <h2 className={styles.name3}>Contact</h2>
          </motion.div>

          <motion.div
            className={styles.contactContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.p className={styles.contactText} variants={cardVariants}>
              I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </motion.p>

            <motion.div className={styles.contactLinks} variants={cardVariants}>
              <a href="mailto:rutpatel392@gmail.com" className={styles.contactLink}>
                <MdEmail size={24} /> rutpatel392@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/rut-p-9b2bb7185" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <FaLinkedin size={24} /> LinkedIn
              </a>
              <a href="https://github.com/Rutk39" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <FaGithub size={24} /> GitHub
              </a>
            </motion.div>
          </motion.div>

        </section>
    </div>
  )
}

export default HomePage