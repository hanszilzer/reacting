import React, { useState } from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import './index.css'
const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <Navigation onPageChange={handleNavigationClick} />
      <main>
        {currentPage === 'about' && <AboutMe />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
