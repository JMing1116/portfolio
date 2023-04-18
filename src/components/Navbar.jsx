import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

import { styles } from '../styles';
import { logo, menu, close } from '../assets'

const Navbar =() => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <nav
            className={`${
                styles.paddingX
            }   w-full flex items-center py-5 fixed top-0 z-20 ${
                scrolled ? "bg-primary" : "bg-transparent"
            }`}>
                
            <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                </Link>
                <ul className='list-none hidden sm:flex flew-row gap-10'>
                    {navLinks.map((Link) => (  
                        <li>
                            <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar