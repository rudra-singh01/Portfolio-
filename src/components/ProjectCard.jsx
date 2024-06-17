// src/components/ProjectCard.jsx
import React, { useState } from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    const imageElement = e.currentTarget;
    const rect = imageElement.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setTransform(`translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-shadow duration-300 hover:shadow-2xl">
      <div className="relative transition-all duration-300 ease-in-out w-full h-64 hover:w-[110%] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          src={image}
          alt={title}
          style={{ transform }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <button className='px-6 py-3 rounded-lg bg-[#7843E9] text-white font-bold duration-300 ease-in-out transform hover:-translate-y-1'>VIEW PROJECT LINK</button>
      </div>
    </div>
  );
};

export default ProjectCard;
