'use client';
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';


const projectsData = [
    {
        id: 1,
        title: 'Zenith Mental Health - Project Mobile App',
        description: 'Mental Health Screening App For Chipata L1 Hospital In Flutter. Status: Under Quality Assurance Control.',
        image: '/images/projects/zenith.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: 'https://zenithmentalhealth.flutterflow.app/'
    },
    {
        id: 2,
        title: 'Recursive Tech Solutions - Work Contribution',
        description: 'Co-Founded Company.',
        image: '/images/projects/recursive.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: 'https://recursivetechsol.com/Web-Development.html'
    },
    {
        id: 3,
        title: 'Jesuit Ai - Project Web Application',
        description: 'Christian Chatbot System For Zambians In Flutter. Status: Complete',
        image: '/images/projects/jesuit.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: 'https://jesuitai.flutterflow.app'
    },
    {
        id: 4,
        title: 'Fkcm Fisheries - Project Web Application',
        description: 'Simple Fish Management System In Flutter. Status: In development',
        image: '/images/projects/fkcm.png',
        tag: ['All', 'Mobile','Web'],
        gitUrl: '/',
        previewUrl: 'https://f-k-c-m-fisheries.flutterflow.app'
    },
    {
        id: 5,
        title: 'Blaze - Navbar and NavMenu Example App',
        description: 'Example of A Flutter App NavBar+NavMenu',
        image: '/images/projects/blaze.png',
        tag: ['All','Mobile'],
        gitUrl: '/',
        previewUrl: 'https://blazemusicblog.flutterflow.app' 
    },
    {
        id: 6,
        title: 'My Portfolio',
        description: 'Created through NEXT JS. It is 85.1% Javascript, 7.8% TypeScript, and 7.1% CSS. I will be adding more functions and features to it with time. please stay glued.',
        image: '/images/projects/portfolio.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/3lia6/eliasmwewa-portfolio',
        previewUrl: 'https://eliasmwewa-portfolio.vercel.app/' 
    },
    {
        id:7,
        title: 'Zenith Screening Application',
        Description: 'Mental Health Application tool for healthcare providers',
        image: '/images/projects/zenith.png',
        tag: ['All','Mobile'],
        gitUrl: '/',
        previewUrl: 'https://zenith-zambia-mhd.flutterflow.app'
    },
];


const ProjectsSection = () => {
    const [tag, setTag] = useState('All'); 
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
        );
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-0'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag 
                onClick={handleTagChange} name='All' 
                isSelected={tag ==='All'}/>
                <ProjectTag 
                onClick={handleTagChange} name='Web' 
                isSelected={tag ==='Web'}/>
                <ProjectTag 
                onClick={handleTagChange} name='Mobile' 
                isSelected={tag ==='Mobile'}/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl} // Pass gitUrl as prop
                        previewUrl={project.previewUrl} // Pass previewUrl as prop
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectsSection;
