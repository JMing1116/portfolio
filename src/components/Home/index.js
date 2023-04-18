import './index.scss';
import LogoTitle from '../../assets/images/logo-k1.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Home =() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'i', ',']
    const posArray = ['B', 'a', 'c', 'h', 'e', 'l', 'o', 'r', ' ', 'o', 'f', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e' ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">

                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>l</span>
                <span className={`${letterClass} _15`}>o</span>
                <span className={`${letterClass} _16`}>,</span>
                <br />
                <span className={`${letterClass} _17`}>I</span>
                <span className={`${letterClass} _18`}>'</span>
                <span className={`${letterClass} _19`}>m</span>
                <img src={LogoTitle} className='logo-title' alt="developer" /> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={posArray}
                idx={14} />
                </h1>
                <h2>Expected graduate in Spring 2023</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                
            </div>
        </div>
    );
    
}

export default Home