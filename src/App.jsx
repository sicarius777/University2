import React, {useState} from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/Hero';
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div> 
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='check out' title='Programs'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus'/>
        <Campus/>
        <Title subTitle='Student' title='Testimonials'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Get in touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App