import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { FaHeartbeat, FaLeaf, FaHandsHelping } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';
import SiteHeader from '../components/SiteHeader';
import ParticleBackground from '../components/ParticleBackground';
import styles from './Projects.module.css';

const projectHighlights = [
  {
    id: 'asl',
    icon: <FaHandsHelping />,
    title: 'Real-Time ASL Recognition',
    role: 'Machine Learning Engineer',
    stack: 'Python, TensorFlow/Keras, OpenCV, MediaPipe',
    summary:
      'Designed and implemented an end-to-end gesture recognition pipeline using sequence modeling and computer vision for real-time ASL classification.',
    highlights: [
      'Built data preprocessing and feature extraction workflows to improve sequence quality and training consistency.',
      'Trained and tuned an LSTM-based model for low-latency inference under real-time webcam conditions.',
      'Integrated model inference into a live recognition loop to support practical, user-facing interaction.',
    ],
    impact: 'Improved recognition accuracy by 30%.',
    link: 'https://github.com/Rutk39/ASL-Recognition',
  },
  {
    id: 'garden',
    icon: <FaLeaf />,
    title: 'IoT Smart Garden System',
    role: 'Full-Stack / IoT Developer',
    stack: 'Python, Flask, IoT sensors, automation logic',
    summary:
      'Engineered a sensor-driven irrigation platform that automates watering decisions and surfaces operational status through a web dashboard.',
    highlights: [
      'Implemented control logic that reacts to environmental sensor signals and scheduled thresholds.',
      'Built backend services and dashboard views for monitoring system health and irrigation behavior.',
      'Focused on reliability and maintainability to support autonomous operation in day-to-day usage.',
    ],
    impact: 'Reduced water usage by 33%.',
    link: 'https://github.com/Rutk39/Smart-Garden',
  },
  {
    id: 'wecureit',
    icon: <FaHeartbeat />,
    title: 'WeCureIT Healthcare Platform',
    role: 'Software Engineer (Full-Stack)',
    stack: 'Django, Python, AWS, relational data workflows',
    summary:
      'Developed a full-stack healthcare platform for appointment coordination and patient record workflows with deployment-ready architecture.',
    highlights: [
      'Built secure CRUD workflows for patient and scheduling data with clear role-based interaction paths.',
      'Designed backend modules and data models to support maintainable clinical operations features.',
      'Deployed the application on AWS and validated production-readiness across core user journeys.',
    ],
    impact: 'Deployed to AWS for accessible end-user usage.',
    link: 'https://github.com/Rutk39/WeCureIT',
  },
];

function Projects() {
  const [openProject, setOpenProject] = useState(projectHighlights[0].id);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const craftRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.17]);
  const heroOpacity = useTransform(heroProgress, [0, 0.75, 1], [1, 1, 0.24]);
  const heroTitleY = useTransform(heroProgress, [0, 1], [0, -110]);
  const heroSubtitleY = useTransform(heroProgress, [0, 1], [0, -80]);

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end start'],
  });
  const boardY = useTransform(storyProgress, [0, 1], [18, -24]);
  const boardRotate = useTransform(storyProgress, [0, 1], [3, 0]);
  const textY = useTransform(storyProgress, [0, 1], [20, -12]);
  const textOpacity = useTransform(storyProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.9]);

  const { scrollYProgress: craftProgress } = useScroll({
    target: craftRef,
    offset: ['start end', 'end start'],
  });
  const craftHeaderY = useTransform(craftProgress, [0, 1], [80, -50]);
  const craftHeaderOpacity = useTransform(craftProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.25]);

  return (
    <main className={styles.page}>
      <ParticleBackground className={styles.particleMount} />
      <SiteHeader currentPage="projects" />

      <section className={styles.heroScene} ref={heroRef}>
        <div className={styles.stickyFrame}>
          <motion.div className={styles.heroVisual} style={{ scale: heroScale, opacity: heroOpacity }} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Projects</p>
            <motion.h1 className={styles.title} style={{ y: heroTitleY }}>
              Product-minded engineering across AI, data, and full-stack systems.
            </motion.h1>
            <motion.p className={styles.subtitle} style={{ y: heroSubtitleY }}>
              These are selected builds focused on measurable outcomes, practical UX, and deployable
              architecture.
            </motion.p>
          </div>
        </div>
      </section>

      <section className={styles.storyScene} ref={storyRef}>
        <div className={styles.stickyFrame}>
          <div className={styles.storyGrid}>
            <motion.div className={styles.metricBoard} style={{ y: boardY, rotateX: boardRotate }}>
              <div className={styles.boardLight} />
              <p className={styles.metric}>3</p>
              <p className={styles.metricLabel}>core flagship projects</p>
              <p className={styles.metric}>2</p>
              <p className={styles.metricLabel}>major applied AI + IoT domains</p>
              <p className={styles.metric}>1</p>
              <p className={styles.metricLabel}>goal: measurable real-world impact</p>
            </motion.div>

            <motion.div className={styles.storyText} style={{ y: textY, opacity: textOpacity }}>
              <p className={styles.eyebrow}>Approach</p>
              <h2>Engineer with clarity, measurable outcomes, and production focus.</h2>
              <p>
                Each project starts with a clear problem statement and is implemented with practical
                architecture decisions, strong execution discipline, and iterative validation.
              </p>
              <p>
                The portfolio emphasizes end-to-end ownership: from model or backend design, to interface
                integration, deployment, and performance outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.craftScene} ref={craftRef}>
        <motion.div className={styles.craftHeader} style={{ y: craftHeaderY, opacity: craftHeaderOpacity }}>
          <p className={styles.eyebrow}>Selected Builds</p>
          <h2>Project details</h2>
        </motion.div>

        <div className={styles.roadmap}>
          {projectHighlights.map((project, index) => {
            const isOpen = openProject === project.id;
            return (
              <motion.article
                key={project.id}
                className={styles.roadmapItem}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className={styles.roadmapNode}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className={styles.roadmapCard}>
                  <button
                    type="button"
                    className={styles.roadmapHeader}
                    onClick={() => setOpenProject(isOpen ? '' : project.id)}
                  >
                    <div className={styles.headerLeft}>
                      <span className={styles.projectIcon}>{project.icon}</span>
                      <div>
                        <h3>{project.title}</h3>
                        <p className={styles.meta}>{project.role}</p>
                      </div>
                    </div>
                    <MdExpandMore className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className={styles.roadmapBody}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <p className={styles.meta}>
                          <strong>Stack:</strong> {project.stack}
                        </p>
                        <p>{project.summary}</p>
                        <ul className={styles.highlights}>
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                        <p className={styles.impact}>{project.impact}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View repository
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className={styles.notesCard}>
        <h2>Engineering Standards</h2>
        <p>
          I prioritize clean architecture, readable code, measurable performance, and reliable delivery
          practices so projects are maintainable beyond initial launch.
        </p>
      </section>
    </main>
  );
}

export default Projects;
