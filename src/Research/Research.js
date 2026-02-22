import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SiteHeader from '../components/SiteHeader';
import ParticleBackground from '../components/ParticleBackground';
import styles from './Research.module.css';

const researchDomains = [
  {
    title: 'Data Engineering and Cloud Systems',
    intro: 'I build scalable, cloud-native data workflows using Python, SQL, and AWS services.',
    points: [
      'Designed and deployed serverless pipelines using AWS Lambda for real-time ASL video processing.',
      'Built ETL workflows that transformed raw media into structured datasets for deepfake detection research.',
      'Applied data modeling and validation techniques to ensure high-quality ML training data.',
      'Managed MySQL and PostgreSQL databases with a focus on indexing, integrity, and secure CRUD operations.',
    ],
    skills: ['Python', 'SQL', 'AWS Lambda', 'S3', 'DynamoDB', 'Data Modeling', 'ETL', 'Serverless Architecture', 'API Development'],
  },
  {
    title: 'Machine Learning, AI and Computer Vision',
    intro: 'I apply machine learning and computer vision to solve real-world problems with measurable outcomes.',
    points: [
      'Contributed to Springer-published research (2025) on deepfake detection and generative AI ethics.',
      'Built an LSTM-based ASL recognition model achieving 66.66% accuracy.',
      'Used OpenCV and MediaPipe to analyze video frames, detect manipulation patterns, and preprocess large datasets.',
      'Performed ML data validation and anomaly detection to improve downstream model reliability.',
    ],
    skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'MediaPipe', 'LSTM', 'BERT', 'Hugging Face', 'Responsible AI', 'Model Evaluation'],
  },
  {
    title: 'Software and Web Development',
    intro: 'I develop full-stack applications with clean architecture, responsive UI, and optimized performance.',
    points: [
      'Built WeCureIT, a full-stack medical management system using Django and PostgreSQL with secure authentication.',
      'Developed a SaaS web application used by 50+ businesses and reduced load time by 40% through optimization.',
      'Created responsive interfaces using React, Vue.js, Bootstrap, Tailwind, and modern JavaScript tooling.',
      'Implemented REST APIs, CI/CD workflows, and version-control best practices using Git and Docker.',
    ],
    skills: ['Django', 'React', 'Vue.js', 'Next.js', 'JavaScript', 'Tailwind', 'Bootstrap', 'REST APIs', 'CI/CD', 'Docker', 'Git'],
  },
  {
    title: 'Data Quality, Annotation and Human-in-the-Loop Systems',
    intro: 'I ensure that machine learning models are trained on clean, reliable, and well-structured data.',
    points: [
      'Executed data cleansing and annotation workflows for computer vision and NLP datasets.',
      'Identified edge cases and inconsistencies that improved model accuracy and reduced error propagation.',
      'Collaborated with engineering teams to refine annotation guidelines and increase dataset consistency.',
    ],
    skills: ['Data Validation', 'Annotation Tools', 'Logical Reasoning', 'Dataset Auditing', 'ML Quality Assurance'],
  },
  {
    title: 'Teaching, Training and Technical Communication',
    intro: 'I simplify complex technical concepts and deliver them in ways that are clear, engaging, and actionable.',
    points: [
      'Trained Amazon drivers on safety, compliance, and operational systems with measurable performance improvements.',
      'Taught Python and robotics to students, increasing mastery by 13% through gamified learning.',
      'Communicated technical findings through research writing, documentation, and cross-functional collaboration.',
    ],
    skills: ['Instructional Design', 'Technical Training', 'Communication', 'Curriculum Development', 'Documentation'],
  },
  {
    title: 'Operational Excellence and Leadership Principles',
    intro: 'Working inside Amazon HQ2 strengthened my ability to operate with precision, ownership, and customer obsession.',
    points: [
      'Maintained 99%+ accuracy in high-volume corporate operations.',
      'Demonstrated reliability in restricted-access environments requiring strict security compliance.',
      'Applied Amazon Leadership Principles daily, including Bias for Action, Ownership, Deliver Results, and Earn Trust.',
    ],
    skills: ['Process Optimization', 'High-Security Operations', 'Cross-Functional Coordination', 'Leadership Principles'],
  },
];

const journeySections = [
  {
    heading: 'From Curiosity to Contribution',
    body: [
      'My research journey began with one persistent question: "How can machines understand the world the way we do?"',
      'That curiosity led me into computer vision, deep learning, and ethical AI as practical tools for solving human problems.',
      'Over time, it evolved into published research, cloud-native ML systems, and a strong commitment to responsible AI.',
    ],
  },
  {
    heading: 'The First Breakthrough: Sign Language Recognition',
    body: [
      'I developed a real-time ASL recognition system using LSTM models to make technology more inclusive.',
      'After iterative data collection, preprocessing, and model training, the system achieved 66.66% accuracy.',
      'This became my first peer-reviewed publication and reinforced my belief that AI can bridge communication gaps when built with empathy.',
    ],
  },
  {
    heading: 'The Turning Point: Deepfake Detection and AI Ethics',
    body: [
      'As generative AI expanded, I focused on misinformation risk, manipulated media, and digital trust.',
      'I contributed to deepfake detection and Generative AI ethics research published in Springer CCIS Vol. 2523 (HCI International 2025).',
      'This work showed me that AI is not only a technical challenge, but also a moral responsibility requiring fairness and transparency.',
    ],
  },
  {
    heading: 'Where Research Meets Engineering',
    body: [
      'I extended research into production thinking by building a serverless ASL pipeline using AWS Lambda.',
      'I also focused on data validation and human-in-the-loop workflows to improve model reliability.',
      'This shaped my identity as both researcher and builder.',
    ],
  },
  {
    heading: 'Mission and Direction',
    body: [
      'I build AI systems that are ethical, transparent, human-centered, scalable, and grounded in real-world impact.',
      'My next focus areas include cloud-native ML infrastructure, responsible AI, accessibility-focused computer vision, and high-quality data pipelines.',
      'My goal is to build AI that people can trust and that genuinely improves lives.',
    ],
  },
];

function Research() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.16]);
  const heroOpacity = useTransform(heroProgress, [0, 0.75, 1], [1, 1, 0.25]);
  const heroTitleY = useTransform(heroProgress, [0, 1], [0, -95]);
  const heroSubtitleY = useTransform(heroProgress, [0, 1], [0, -70]);

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end start'],
  });
  const badgeY = useTransform(storyProgress, [0, 1], [14, -18]);
  const textY = useTransform(storyProgress, [0, 1], [16, -10]);

  return (
    <main className={styles.page}>
      <ParticleBackground className={styles.particleMount} />
      <SiteHeader currentPage="research" />

      <section className={styles.heroScene} ref={heroRef}>
        <div className={styles.stickyFrame}>
          <motion.div className={styles.heroVisual} style={{ scale: heroScale, opacity: heroOpacity }} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Research</p>
            <motion.h1 className={styles.title} style={{ y: heroTitleY }}>
              My Research Journey
            </motion.h1>
            <motion.p className={styles.subtitle} style={{ y: heroSubtitleY }}>
              From curiosity to contribution: building AI that is technically strong, ethically grounded,
              and focused on human impact.
            </motion.p>
          </div>
        </div>
      </section>

      <section className={styles.storyScene} ref={storyRef}>
        <div className={styles.stickyFrame}>
          <div className={styles.storyGrid}>
            <motion.div className={styles.badgeCard} style={{ y: badgeY }}>
              <p className={styles.badgeLabel}>Publication</p>
              <h3>Springer (2025)</h3>
              <p>Deepfake Detection and Generative AI Ethics</p>
            </motion.div>
            <motion.div className={styles.storyText} style={{ y: textY }}>
              <p className={styles.eyebrow}>Approach</p>
              <h2>Research with deployment mindset.</h2>
              <p>
                I focus on end-to-end applied research: data preparation, model development, system
                integration, validation, and operational reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Journey</p>
          <h2>How I found my path in AI</h2>
        </div>

        <div className={styles.journeyGrid}>
          {journeySections.map((section, index) => (
            <motion.article
              key={section.heading}
              className={styles.journeyCard}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <h3>{section.heading}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.article>
          ))}
        </div>

        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Research Domains</p>
          <h2>Technical depth across six focus areas</h2>
        </div>

        <div className={styles.domainGrid}>
          {researchDomains.map((domain, index) => (
            <motion.article
              key={domain.title}
              className={styles.domainCard}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3>{domain.title}</h3>
              <p className={styles.intro}>{domain.intro}</p>
              <ul>
                {domain.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className={styles.skills}>
                {domain.skills.map((skill) => (
                  <span key={`${domain.title}-${skill}`}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Research;
