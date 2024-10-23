import React from 'react';
import './About.css';
import about_image from '../../assets/about_image.png';
import play_icon from '../../assets/play_icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_image} alt="about-img" className="about-img" />
        <img 
          src={play_icon} 
          alt="play-icon" 
          className="play-icon" 
          onClick={()=>{ setPlayState(true)}} 
        />
      </div>
      <div className="about-right">
        <h3>About</h3>
        <h2>Me but this would be your about section.</h2>
        <p> As a dedicated full-stack developer, I offer a comprehensive range of services tailored to meet the diverse needs of modern businesses and individuals. From front-end design to back-end development, I specialize in creating dynamic and user-friendly web applications that not only look great but also perform seamlessly. My expertise includes HTML, CSS, JavaScript, and popular frameworks such as React and Node.js, ensuring that your website is responsive, efficient, and scalable. Whether you need a simple landing page or a complex web application, I am committed to delivering high-quality solutions that enhance user experience and drive engagement. You can contact me below if you like it is fully functional!</p>
      </div>
    </div>
  );
};

export default About;
