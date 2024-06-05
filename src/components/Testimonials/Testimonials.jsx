import React,  {useRef} from 'react' ;
import './Testimonials.css';
import next_icon from '../../assets/next_icon.png';
import back_icon from '../../assets/back_icon.png';
import user_1 from '../../assets/user1.jpg'; // Uncommented import
import user_2 from '../../assets/user2.jpg';
import user_3 from '../../assets/user3.jpg';
import user_4 from '../../assets/user4.jpg';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt="" />
                <div>
                  <h3>Emily Smith</h3>
                  <span>Masters in Engineering</span>
                </div>
              </div>
              <p>Pursuing my Master's in Engineering was a transformative experience that significantly shaped both my professional 
                and personal development. The rigorous curriculum, coupled with hands-on projects and cutting-edge research opportunities, 
                provided me with a deep understanding of advanced engineering concepts and practices.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt="" />
                <div>
                  <h3>Mark Anthony</h3>
                  <span>Bachelors in Computer Science</span>
                </div>
              </div>
              <p>Completing my Bachelor's in Computer Science was an incredible journey that profoundly impacted 
                my academic and professional trajectory. The program's comprehensive curriculum provided a solid 
                foundation in both theoretical concepts and practical applications, covering everything from algorithms 
                and data structures to software engineering and artificial intelligence.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt="" />
                <div>
                  <h3>Nichole Eames</h3>
                  <span>Bachelors in Biology</span>
                </div>
              </div>
              <p>Completing my Bachelor's in Biology was a deeply enriching experience that 
                significantly shaped my academic interests and career path. The program's 
                diverse curriculum provided a thorough grounding in various biological 
                disciplines, from molecular biology and genetics to ecology and evolution.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt="" />
                <div>
                  <h3>Taylor Cliffton</h3>
                  <span>Bachelors in Economics</span>
                </div>
              </div>
              <p> Earning my Bachelor's in Economics was a pivotal experience that profoundly shaped my academic 
                interests and career ambitions. The program's rigorous curriculum provided a comprehensive understanding
                 of economic theory, quantitative methods, and the intricate workings of both domestic and global economies.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
