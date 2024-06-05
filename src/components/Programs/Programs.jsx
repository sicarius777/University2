import React from 'react'
import './Programs.css'
import  Grad1 from '../../assets/program-1.png'
import  Grad2 from '../../assets/program-2.png'
import  Grad3 from '../../assets/program-3.png'
import  Study from '../../assets/Study.png'
import icon2 from '../../assets/program-icon-2.png'
import icon3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs' name="Tools">
      <div className='program'>
        <img src={Grad1} alt="" />
        <div className="caption">
            <img src={Study} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
      <div className='program'>
        <img src={Grad2} alt="" />
        <div className="caption">
            <img src={icon2} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
      <div className='program'>
        <img src={Grad3} alt="" />
        <div className="caption">
            <img src={icon3} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
