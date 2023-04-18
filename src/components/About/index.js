import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About =() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={aboutArray}
                        idx={15}
                    />
                </h1>
                <p>
                    Hello! I'm a person who is passionate about exploring the world of programming and technology.
                    With a strong interest in software engineering, I strive to continuously improve my skills and stay up-to-date
                    with the latest advancements in the field.
                </p>
                <p>
                    With a background in C++, JavaScript, C#, and Python, I have developed a solid understanding
                    of various programming languages and have been able to apply my skills to various projects.
                    I am constantly seeking new challenges and opportunities to grow and develop as a software engineer.
                </p>
                <p> 
                    In my free time, I enjoy exploring new technologies and coding projects,
                     and I am always eager to learn and expand my knowledge. 
                    With a strong drive and a positive attitude, I am confident in my ability to contribute
                    to any team and make a positive impact in the industry.
                </p>
            </div>

        </div>
    )
}

export default About