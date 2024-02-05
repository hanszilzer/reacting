import React, { useState, useEffect } from 'react';


const Portfolio = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/hanszilzer/repos');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="repository-list">
        {repositories.map(repo => (
          <div key={repo.id} className="repository-item">
            <h3><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
