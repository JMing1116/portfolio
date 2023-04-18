import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

import { skillList } from "../../constants";
import Skill from './skill';

const Skills =() => {
    const contactArray= ['S', 'k', 'i', 'l', 'l', 's'];
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container skills-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={contactArray}
                        idx={15}
                    />
                </h1>

                <div className='skill-section'>
                    {skillList.map(skill => (
                        <Skill 
                        key={skill.id} 
                        img={skill.item}
                        name={skill.name}
                        percentage={skill.percent}
                        />
                    ))}
                </div>


            </div>
        </div>    
    )
}

export default Skills