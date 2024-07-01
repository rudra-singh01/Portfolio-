import React, { useEffect } from 'react';

function ProjectsPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
      <section id="projects-section">
        <h2>Projects Section</h2>
        {/* Your projects content here */}
      </section>
    </div>
  );
}

export default ProjectsPage;
