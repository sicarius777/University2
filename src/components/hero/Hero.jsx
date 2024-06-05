import React from 'react'
import './hero.css'
import UIR from '../../assets/Grad_hat.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Your University</h1>
            <p>At [College Name], our mission is to cultivate a vibrant learning community that inspires 
              academic excellence, fosters innovation, and nurtures the holistic development of each student. 
              We are dedicated to providing a diverse and inclusive environment where students are empowered to 
              pursue their passions, develop critical thinking skills, and engage in meaningful societal contributions. 
              Through a commitment to ethical leadership, lifelong learning, and community engagement, we prepare our 
              graduates to navigate and shape a dynamic global landscape with integrity, creativity, and compassion.</p>
            <button className='btn'>GET STARTED <img src={UIR} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
