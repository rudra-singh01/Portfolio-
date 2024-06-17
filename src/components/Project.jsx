import React from 'react'
import ProjectCard from './ProjectCard';
function Project() {
    const projects = [
        {
            image: 'https://i.pinimg.com/736x/b5/27/1a/b5271a15f7498b3c1248e3fc14d5cd74.jpg',
            title: 'Ochi',
            description: 'This is a brief description of Project One.',
            link: 'https://github.com/rudra-singh01/ochi.git'
        },
        {
            image: 'https://assets-global.website-files.com/644bc965881cba09e414cd5b/6463972a5e962b35a3a50ccb_OG.webp',
            title: 'sundown',
            description: 'This is a brief description of Project Two.',
            link: 'https://github.com/rudra-singh01/sun-down.git'
        }
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