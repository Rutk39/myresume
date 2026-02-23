import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaDatabase,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLinkedin,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiMongodb, SiTypescript } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import portraitImage from '../assets/Pixelate.png';
import SiteHeader from '../components/SiteHeader';
import ParticleBackground from '../components/ParticleBackground';
import styles from './HomePage.module.css';

const skills = [
  { name: 'HTML & CSS', icon: <FaHtml5 color="#e34c26" size={26} /> },
  { name: 'Java', icon: <FaJava color="#007396" size={26} /> },
  { name: 'Python', icon: <FaPython color="#3776AB" size={24} /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#f7df1e" size={24} /> },
  { name: 'ReactJS', icon: <FaReact color="#61DBFB" size={24} /> },
  { name: 'NodeJS', icon: <FaNodeJs color="#68A063" size={24} /> },
  { name: 'SQL', icon: <FaDatabase color="#00758f" size={24} /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={24} /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178c6" size={24} /> },
];

const projects = [
  {
    title: 'Real-Time ASL Recognition',
    description:
      'Built an LSTM model with MediaPipe for gesture classification and improved recognition accuracy by 30%.',
    link: 'https://github.com/Rutk39/ASL-Recognition',
  },
  {
    title: 'IoT Smart Garden System',
    description:
      'Automated irrigation through sensors and a Flask dashboard, reducing water usage by 33%.',
    link: 'https://github.com/Rutk39/Smart-Garden',
  },
  {
    title: 'WeCureIT Healthcare Platform',
    description:
      'Developed a full-stack Django platform for appointments and records management, deployed on AWS.',
    link: 'https://github.com/Rutk39/WeCureIT',
  },
];

function HomePage() {
  useEffect(() => {
    const targetId = sessionStorage.getItem('homeScrollTarget');
    if (!targetId) {
      return;
    }

    sessionStorage.removeItem('homeScrollTarget');
    requestAnimationFrame(() => {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, []);

  const goToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.page}>
      <ParticleBackground className={styles.particleMount} />
      <SiteHeader currentPage="home" onNavigateSection={goToSection} />

      <section className={styles.heroScene}>
        <div className={styles.heroBackdrop} />
        <motion.img
          src={portraitImage}
          alt="Rut Patel"
          className={styles.heroPortrait}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />

        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <div className={styles.heroLine} />
          <h1>
            I&apos;m Rut,
            <br />
            a Full Stack Developer
          </h1>
          <br />
          <p>
            passionate about building dynamic, responsive web apps. Explore my skills, projects,
            and journey in web development and feel free to reach out.
          </p>
          <div className={styles.heroActions}>
            <a href="#/research" className={styles.heroActionButton}>
              Explore Research
            </a>
          </div>
        </motion.div>

        <button type="button" className={styles.downArrow} onClick={() => goToSection('aboutSection')}>
          V
        </button>
      </section>

      <section id="aboutSection" className={styles.aboutSection}>
        <motion.div
          className={styles.aboutCard}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <p className={styles.eyebrow}>About</p>
          <h2>From concept to deployment, with measurable impact.</h2>
          <p>
          With a background in Information Technology and a focus on Data Science, I specialize in architecting end-to-end applications that solve real-world challenges. My toolkit includes Python, JavaScript, and AWS, but my greatest asset is my ability to adapt to new technical frontiers.

<br></br>My work ranges from the granular—detecting anomalies in AI-generated media—to the structural—building IoT automation and healthcare platforms. Having operated in fast-paced corporate environments like Amazon, I understand the importance of scalability and documentation. I am driven by curiosity and a commitment to "ownership," ensuring that every solution I deploy is built to last.
          </p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projectsSection" className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Projects</p>
          <h2>Selected work</h2>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                View Project
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contactSection" className={styles.contactSection}>
        <p className={styles.eyebrow}>Contact</p>
        <h2>Let&apos;s build something meaningful.</h2>
        <p className={styles.contactText}>
          I am always open to new opportunities, collaborations, and product conversations.
        </p>

        <div className={styles.contactLinks}>
          <a href="mailto:rutpatel392@gmail.com" className={styles.contactLink}>
            <MdEmail size={20} /> rutpatel392@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/rut-p-9b2bb7185"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com/Rutk39" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <FaGithub size={20} /> GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
