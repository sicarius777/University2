import React, { useEffect, useState } from 'react'
import logo from "../../assets/GradHatName.png";
import menu_icon from "../../assets/Menu_icon.png";
import './navbar.css'
import { Link } from 'react-scroll';


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 400 ? setSticky(true) : setSticky(false);
        })
    },[]);
 
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
          <img src={logo} alt="Logo" className="logo" />
          <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offset={-360} duration={500}>Programs</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to="gallery" smooth={true} offset={-360} duration={500}>Gallery</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-360} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={0} duration={500} className="btn">Contact Us</Link></li>
          </ul>
          <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
      );
    };

export default Navbar
