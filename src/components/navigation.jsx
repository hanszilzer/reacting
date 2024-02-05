// Navigation.jsx

import React, { useState } from 'react';

const Navigation = ({ onPageChange }) => {
  const [activePage, setActivePage] = useState(''); // State to track active page

  const handleNavigationClick = (page) => {
    onPageChange(page);
    setActivePage(page); // Update active page state
  };

  return (
    <nav>
      <ul>
        <li>
          <a
            href="#about"
            className={activePage === 'about' ? 'active' : ''}
            onClick={() => handleNavigationClick('about')}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activePage === 'portfolio' ? 'active' : ''}
            onClick={() => handleNavigationClick('portfolio')}
          >
            Coding Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activePage === 'contact' ? 'active' : ''}
            onClick={() => handleNavigationClick('contact')}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={activePage === 'resume' ? 'active' : ''}
            onClick={() => handleNavigationClick('resume')}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
