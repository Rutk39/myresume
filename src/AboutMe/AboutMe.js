import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import styles from './AboutMe.module.css';
import SiteHeader from '../components/SiteHeader';
import ParticleBackground from '../components/ParticleBackground';

const education = [
  {
    degree: 'Master of Science in Data Science',
    university: 'Eastern University',
    timeframe: 'August 2024 - August 2026 (Expected)',
    location: 'St. Davids, Pennsylvania, USA',
    gpa: 'In Progress',
    details:
      'Graduate training focused on advanced analytics, machine learning systems, and modern data engineering practices.',
    coursework: [
      'Statistical Modeling and Data Analysis',
      'Machine Learning and Deep Learning',
      'Database Systems and SQL',
      'Cloud Computing and Data Engineering',
    ],
  },
  {
    degree: 'Bachelor of Engineering in Information Technology',
    university: 'Gujarat Technological University',
    timeframe: 'August 2018 - June 2022',
    location: 'Gujarat, India',
    gpa: '3.74 / 4.0',
    details:
      'Built a strong foundation in software engineering, algorithms, and secure system design through project-based coursework.',
    coursework: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming (Java, C++)',
      'Database Management Systems',
      'Software Engineering and Information Security',
    ],
  },
];

const workExperience = [
  {
    role: 'Data Engineering and Cloud Systems',
    intro:
      'I build scalable, cloud-native data workflows using Python, SQL, and AWS services.',
    details: [
      'Designed and deployed serverless pipelines using AWS Lambda for real-time ASL video processing.',
      'Built ETL workflows that transformed raw media into structured datasets for deepfake detection research.',
      'Applied data modeling and validation techniques to ensure high-quality ML training data.',
      'Managed MySQL and PostgreSQL databases, focusing on indexing, integrity, and secure CRUD operations.',
    ],
    skills:
      'Python • SQL • AWS Lambda • S3 • DynamoDB • Data Modeling • ETL • Serverless Architecture • API Development',
  },
  {
    role: 'Machine Learning, AI and Computer Vision',
    intro:
      'I apply machine learning and computer vision to solve real-world problems with measurable outcomes.',
    details: [
      'Contributed to Springer-published research (2025) on deepfake detection and generative AI ethics.',
      'Built an LSTM-based ASL recognition model achieving 66.66% accuracy.',
      'Used OpenCV and MediaPipe to analyze video frames, detect manipulation patterns, and preprocess large datasets.',
      'Performed ML data validation and anomaly detection to improve model reliability.',
    ],
    skills:
      'TensorFlow • PyTorch • OpenCV • MediaPipe • LSTM • BERT • Hugging Face • Responsible AI • Model Evaluation',
  },
  {
    role: 'Software and Web Development',
    intro:
      'I develop full-stack applications with clean architecture, responsive UI, and optimized performance.',
    details: [
      'Built WeCureIT, a full-stack medical management system using Django and PostgreSQL with secure authentication.',
      'Developed a SaaS web application used by 50+ businesses, reducing load time by 40% through optimization.',
      'Created responsive and accessible interfaces using React, Vue.js, Bootstrap, Tailwind, and modern JavaScript tooling.',
      'Implemented REST APIs, CI/CD workflows, and version-control best practices with Git and Docker.',
    ],
    skills:
      'Django • React • Vue.js • Next.js • JavaScript • Tailwind • Bootstrap • REST APIs • CI/CD • Docker • Git',
  },
  {
    role: 'Data Quality, Annotation and Human-in-the-Loop Systems',
    intro:
      'I ensure that machine learning models are trained on clean, reliable, and well-structured data.',
    details: [
      'Executed rigorous data cleansing and annotation workflows for computer vision and NLP datasets.',
      'Identified edge cases and inconsistencies that improved model accuracy and reduced error propagation.',
      'Collaborated with engineering teams to refine annotation guidelines and improve dataset consistency.',
    ],
    skills:
      'Data Validation • Annotation Tools • Logical Reasoning • Dataset Auditing • ML Quality Assurance',
  },
  {
    role: 'Teaching, Training and Technical Communication',
    intro:
      'I simplify complex technical concepts and deliver them in ways that are clear, engaging, and actionable.',
    details: [
      'Trained new Amazon drivers on safety, compliance, and operational systems with measurable performance improvements.',
      'Taught Python and robotics to students, increasing mastery by 13% through gamified learning.',
      'Communicated technical findings through research writing, documentation, and cross-functional collaboration.',
    ],
    skills:
      'Instructional Design • Technical Training • Communication • Curriculum Development • Documentation',
  },
  {
    role: 'Operational Excellence and Leadership Principles',
    intro:
      'Working inside Amazon HQ2 strengthened my ability to operate with precision, ownership, and customer obsession.',
    details: [
      'Maintained 99%+ accuracy in high-volume corporate operations.',
      'Demonstrated reliability in restricted-access environments requiring strict security compliance.',
      'Applied Amazon Leadership Principles daily, including Bias for Action, Ownership, Deliver Results, and Earn Trust.',
    ],
    skills:
      'Process Optimization • High-Security Operations • Cross-Functional Coordination • Leadership Principles',
  },
];

const technicalSkills = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Django', 'Flask', 'TensorFlow/Keras', 'MediaPipe'],
  },
  {
    title: 'Platforms & Tools',
    items: ['AWS', 'Git/GitHub', 'MongoDB', 'Relational Databases', 'REST APIs'],
  },
];

// TODO(CERTIFICATES): Update this list later with your real certificate details.
// Suggested format: "Certificate Name — Issuer (Year) — optional link/ID"
const certificates = [
  'Add certificate from resume (e.g., cloud, AI/ML, or software engineering credential).',
  'Add certificate from resume (name, issuer, year).',
];

function AboutMe() {
  const showCertificates = false;
  const [openSections, setOpenSections] = useState({
    education: true,
    experience: true,
    skills: true,
    certificates: false,
  });

  const toggleSection = (key) => {
    setOpenSections((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const craftRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.18]);
  const heroOpacity = useTransform(heroProgress, [0, 0.75, 1], [1, 1, 0.25]);
  const heroTitleY = useTransform(heroProgress, [0, 1], [0, -120]);
  const heroSubtitleY = useTransform(heroProgress, [0, 1], [0, -90]);

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end start'],
  });
  const storyPanelY = useTransform(storyProgress, [0, 1], [20, -24]);
  const storyPanelRotate = useTransform(storyProgress, [0, 1], [3, 0]);
  const storyTextY = useTransform(storyProgress, [0, 1], [24, -16]);
  const storyTextOpacity = useTransform(storyProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.9]);

  return (
    <main className={styles.page}>
      <ParticleBackground className={styles.particleMount} />
      <SiteHeader currentPage="aboutme" />

      <section className={styles.heroScene} ref={heroRef}>
        <div className={styles.stickyFrame}>
          <motion.div
            className={styles.heroVisual}
            style={{ scale: heroScale, opacity: heroOpacity }}
          />
          <motion.div className={styles.heroCopy}>
            <p className={styles.eyebrow}>About Me</p>
            <motion.h1 className={styles.title} style={{ y: heroTitleY }}>
              I build useful products with AI, data, and thoughtful design.
            </motion.h1>
            <motion.p className={styles.subtitle} style={{ y: heroSubtitleY }}>
              I am Rut Patel, a Data Science graduate student and full-stack
              developer focused on real-world systems that are fast, clear, and
              reliable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className={styles.storyScene} ref={storyRef}>
        <div className={styles.stickyFrame}>
          <div className={styles.storyGrid}>
            <motion.div
              className={styles.devicePanel}
              style={{ y: storyPanelY, rotateX: storyPanelRotate }}
            >
              <div className={styles.panelLight} />
              <p className={styles.panelMetric}>30%+</p>
              <p className={styles.panelLabel}>ASL model accuracy boost</p>
              <p className={styles.panelMetric}>33%</p>
              <p className={styles.panelLabel}>water saved in IoT automation</p>
            </motion.div>

            <motion.div
              className={styles.storyText}
              style={{ y: storyTextY, opacity: storyTextOpacity }}
            >
              <p className={styles.eyebrow}>Background</p>
              <h2>From machine learning prototypes to production delivery.</h2>
              <p>
                I combine model development, cloud infrastructure, and polished
                front-end execution so systems are measurable, maintainable, and
                useful to people.
              </p>
              <p>
                Recent work includes real-time ASL recognition, healthcare web
                platforms, and IoT-based automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.craftScene} ref={craftRef}>
        <motion.div
          className={styles.craftHeader}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <p className={styles.eyebrow}>Profile</p>
          <h2>Professional Story</h2>
        </motion.div>

        <div className={styles.roadmap}>
          <section className={styles.profileSection}>
            <div className={styles.roadmapNode}>
              <span>01</span>
            </div>
            <div className={styles.roadmapContent}>
              <button
                type="button"
                className={styles.profileSectionTitle}
                onClick={() => toggleSection('education')}
              >
                Education
                <span className={styles.toggleIcon}>{openSections.education ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openSections.education && (
                  <motion.div
                    className={styles.educationGrid}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {education.map((item, index) => (
                      <motion.article
                        key={item.degree}
                        className={styles.educationCard}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.55, delay: index * 0.12 }}
                      >
                        <h3>{item.degree}</h3>
                        <div className={styles.educationMeta}>
                          <img
                            src="/university-logo.png"
                            alt="University logo"
                            className={styles.universityLogo}
                            onError={(event) => {
                              event.currentTarget.style.display = 'none';
                            }}
                          />
                          <div>
                            <p className={styles.universityName}>{item.university}</p>
                            <p className={styles.timeframe}>{item.timeframe}</p>
                            <p className={styles.timeframe}>{item.location}</p>
                            <p className={styles.timeframe}>GPA: {item.gpa}</p>
                          </div>
                        </div>
                        <p>{item.details}</p>
                        <ul className={styles.courseworkList}>
                          {item.coursework.map((topic) => (
                            <li key={topic}>{topic}</li>
                          ))}
                        </ul>
                      </motion.article>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          <section className={styles.profileSection}>
            <div className={styles.roadmapNode}>
              <span>02</span>
            </div>
            <div className={styles.roadmapContent}>
              <button
                type="button"
                className={styles.profileSectionTitle}
                onClick={() => toggleSection('experience')}
              >
                Work Experience
                <span className={styles.toggleIcon}>{openSections.experience ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openSections.experience && (
                  <motion.div
                    className={styles.experienceGrid}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {workExperience.map((item, index) => (
                      <motion.article
                        key={`${item.role}-${index}`}
                        className={styles.experienceCard}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.55, delay: index * 0.1 }}
                      >
                    <h3>{item.role}</h3>
                    <p className={styles.experienceAreaIntro}>{item.intro}</p>
                    <ul className={styles.experienceList}>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className={styles.skillsGroup}>
                      <p className={styles.skillsLineLabel}>Skills demonstrated</p>
                      <div className={styles.workSkillPills}>
                        {item.skills.split(' • ').map((skill) => (
                          <span key={`${item.role}-${skill}`} className={styles.workSkillPill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          <section className={styles.profileSection}>
            <div className={styles.roadmapNode}>
              <span>03</span>
            </div>
            <div className={styles.roadmapContent}>
              <button
                type="button"
                className={styles.profileSectionTitle}
                onClick={() => toggleSection('skills')}
              >
                Skills
                <span className={styles.toggleIcon}>{openSections.skills ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openSections.skills && (
                  <motion.div
                    className={styles.capabilityGrid}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {technicalSkills.map((item, index) => (
                      <motion.article
                        key={item.title}
                        className={styles.capabilityCard}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.55, delay: index * 0.12 }}
                      >
                        <h3>{item.title}</h3>
                        <div className={styles.skillPills}>
                          {item.items.map((skill) => (
                            <span key={skill} className={styles.skillPill}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {showCertificates && (
            <section className={styles.profileSection}>
              <div className={styles.roadmapNode}>
                <span>04</span>
              </div>
              <div className={styles.roadmapContent}>
                {/* TODO(CERTIFICATES): This is the Certificates UI block to edit later. */}
                <button
                  type="button"
                  className={styles.profileSectionTitle}
                  onClick={() => toggleSection('certificates')}
                >
                  Certificates
                  <span className={styles.toggleIcon}>{openSections.certificates ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.certificates && (
                    <>
                      {/* TODO(CERTIFICATES): Each item in `certificates` renders as one bullet point below. */}
                      <motion.article
                        className={styles.certificateCard}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <ul>
                          {certificates.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </motion.article>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </section>
          )}
        </div>
      </section>

      <section className={styles.connectCard}>
        <h2>Connect</h2>
        <div className={styles.links}>
          <a href="mailto:rutpatel392@gmail.com">rutpatel392@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/rut-p-9b2bb7185"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Rutk39"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
