import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './HomePage/HomePage';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Research from './Research/Research';

function getPageFromHash() {
  const hash = window.location.hash.replace('#/', '').trim();

  if (hash === 'about' || hash === 'aboutme') {
    return 'aboutme';
  }

  if (hash === 'projects') {
    return 'projects';
  }

  if (hash === 'research') {
    return 'research';
  }

  return 'HomePage';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash());

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="app-shell">
      <div className="app-content">
        {currentPage === 'HomePage' && <Home />}
        {currentPage === 'aboutme' && <AboutMe />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'research' && <Research />}
      </div>
    </div>
  );
}

export default App;
