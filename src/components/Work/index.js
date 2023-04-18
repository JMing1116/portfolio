import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css'
import { workExperience } from '../../constants';

const Work = () => {
    const contactArray= ['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e' ]
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container work-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={contactArray}
                        idx={15}
                    />
                </h1>
            </div>

            <div className='timeline'>
                {workExperience.map(experience => (
                    <Experience
                    title={experience.title}
                    company={experience.company}
                    date={experience.date}
                    points={experience.points}
                    />
                ))}
            </div>
        </div>    
    )
}

const Experience = ({ title, company, date, points }) => {
    return (
        <div className='experience-text'>
            <VerticalTimeline>
                <motion.div whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <VerticalTimelineElement
                        className='timeline-experience'
                        contentStyle={{ background: '#1c2c3b', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '12px solid  #ffd700' }}
                        date= {date}
                        iconStyle={{ background: '#337c97', color: '#fff' }}
                        dateClassName = "custom-date"
                    >
                    <h3 className="timeline-title">{title}</h3>
                    <h4 className="timeline-subtitle">{company}</h4>
                    <ul className='mt-5 list-disc ml-5 space-y-2'>
                        {points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider'
                        >
                            {point}
                        </li>
                        ))}
                    </ul>
                    </VerticalTimelineElement>
                </motion.div>
            </VerticalTimeline>
        </div>
    )
}

export default Work;