import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { projects } from '../../constants';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';
import Github from '../../assets/images/Github.png';

const Project =() => {
    const contactArray= ['P', 'r', 'o', 'j', 'e', 'c', 't'];
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    }, []);

    return (
        <div className='container project-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={contactArray}
                        idx={15}
                    />
                    
                </h1>
                <p>
                    The projects featured below provide a comprehensive overview of my skills
                    and experience acquired through my past work.
                    Each project includes a concise description of its functionality,
                    accompanied by source code to highlight the effort and expertise involved.
                </p>

                <div className='project-zone'>
                    {projects.map(project => (
                        <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        source={project.source_link}
                        tag={project.tags}
                        />
                    ))};
                </div>
            </div>
        </div>    
    )
};

const ProjectCard = ({ title, description, image, tag, source_link}) => {
    return (
        <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 200
                }}
                className="tilt-container"
            >
                <div className="project-image">
                    <img 
                    src={image} 
                    alt={title} 
                    />
                </div>
                <div className="card-img-hover">
                    <div
                        onClick={() => window.open
                        (source_link, "_blank")}
                        className="github-icon"
                    >
                        <img
                            src={Github}
                            alt="Github"
                            className="icon-container"
                        >
                        </img>
                    </div>
                </div>

                <div className='project-text'>
                    <h3>{title}</h3>
                    <p class="project-description">{description}</p>
                </div>

                <div className="tags-container">
                    {tag.map((tags) => (
                        <p 
                            key={tags.name}
                            className={`${tags.color}`}
                        >
                            #{tags.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
};

export default Project