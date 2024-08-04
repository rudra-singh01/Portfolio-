import React from 'react'
import ProjectCard from './ProjectCard';
import portfolioImage from '../assets/Images/portfolio.png';
import EcommerceImage from '../assets/Images/Ecommerce.png';
function Project() {
    const projects = [
        {
            image: 'https://i.pinimg.com/736x/b5/27/1a/b5271a15f7498b3c1248e3fc14d5cd74.jpg',
            title: 'Ochi',
            description: 'Ochi is the massive presentaion design making company I build it from scrach usering front-end tool',
            link: 'https://github.com/rudra-singh01/ochi.git'
        },
        {
            image: portfolioImage   ,
            title: 'portfolio',
            description: 'this is My portfolio . I made it from scratch using React js  and various npm package and for back-end i use Node,Express and mongoDB',
            link: 'http://rudraport01.netlify.app/'
        },
        {
            image: EcommerceImage   ,
            title: 'Ecommerce site',
            description: 'this is My E-commerce site . I made it from scratch using Next js and various npm package and for back-end i use Node, Express  and mongoDB',
            link: 'https://github.com/rudra-singh01/E_Commerce'
        },
    ];

    return (
        <section id='Projects'>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project