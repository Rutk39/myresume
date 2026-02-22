import React from 'react';
import styles from './SiteHeader.module.css';
import logo from '../assets/Rut_Logo.png';

function routeToHomeSection(sectionId, onNavigateSection) {
  if (typeof onNavigateSection === 'function') {
    onNavigateSection(sectionId);
    return;
  }

  sessionStorage.setItem('homeScrollTarget', sectionId);
  window.location.hash = '/';
}

function SiteHeader({ currentPage = 'home', onNavigateSection }) {
  return (
    <header className={styles.header}>
      <a href="#/" className={styles.logoLink} aria-label="Go to homepage">
        <img src={logo} alt="Rut Patel logo" className={styles.logo} />
      </a>

      <nav className={styles.nav}>
        <button
          type="button"
          className={`${styles.tab} ${currentPage === 'home' ? styles.active : ''}`}
          onClick={() => {
            if (currentPage === 'home') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              return;
            }
            window.location.hash = '/';
          }}
        >
          Home
        </button>
        <button
          type="button"
          className={`${styles.tab} ${currentPage === 'aboutme' ? styles.active : ''}`}
          onClick={() => {
            window.location.hash = '/aboutme';
          }}
        >
          About
        </button>
        <button
          type="button"
          className={`${styles.tab} ${currentPage === 'projects' ? styles.active : ''}`}
          onClick={() => {
            window.location.hash = '/projects';
          }}
        >
          Projects
        </button>
        <button
          type="button"
          className={`${styles.tab} ${currentPage === 'research' ? styles.active : ''}`}
          onClick={() => {
            window.location.hash = '/research';
          }}
        >
          Research
        </button>
        <button
          type="button"
          className={styles.tab}
          onClick={() => routeToHomeSection('contactSection', onNavigateSection)}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

export default SiteHeader;
