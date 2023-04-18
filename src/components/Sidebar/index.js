import { Link, NavLink } from 'react-router-dom'
import './index.scss'

import LogoK from '../../assets/images/logo-k1.png'
import LogoSubtitle from '../../assets/images/logo_wong.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faGears, faDiagramProject, faTimes, faBars, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return (
        <div className='mobile-container'>
            <div className='nav-bar'>
                <Link 
                    className ='logo' 
                    to ='/' 
                    onClick={() => setShowNav(false)}>
                    <img src={LogoK} alt="logo" />
                    <img className="sub-logo" src={LogoSubtitle} alt="logo_sub" />
                </Link>
                <nav className={showNav ? 'mobile-show' : ''}>
                    <NavLink 
                        exact="true" 
                        activeclassname="active" 
                        to="/"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>
                    <NavLink 
                        exact="true" 
                        activeclassname="active" 
                        className="about-link" 
                        to="/about"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>
                    <NavLink 
                        exact="true" 
                        activeclassname="active" 
                        className="skills-link" 
                        to="/skills"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
                    </NavLink>
                    <NavLink 
                        exact="true" 
                        activeclassname="active" 
                        className="work-link" 
                        to="/work"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                    </NavLink>
                    <NavLink 
                        exact="true" 
                        activeclassname="active" 
                        className="project-link" 
                        to="/project"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
                    </NavLink>
                    <NavLink 
                        exact="true" 
                        activeclassname="active" 
                        className="contact-link" 
                        to="/contact"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>
                    
                </nav>
                <ul>
                    <li>
                        <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/kai-ming-wong-5b6b39196/'
                        >
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://github.com/JMing1116'
                        >
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                    </li>
                </ul>

                <FontAwesomeIcon 
                    onClick={() => setShowNav(!showNav)}
                    icon={showNav ? faTimes : faBars}
                    color="#ffd700"
                    size="3x"
                    className='menu-icon' />
                
            </div>
        </div>
    )
}

export default Sidebar