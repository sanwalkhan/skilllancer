import React from 'react'
import "./home.css"
import rectangle17 from "../images/Rectangle 17.png"
import rectangle25 from "../images/Rectangle 25.png"
import rectangle26 from "../images/Rectangle 26.png"
import rectangle20 from "../images/Rectangle 20.png"
import rectangle19 from "../images/Rectangle 19.png"
import rectangle21 from "../images/Rectangle 21.png"
import rectangle22 from "../images/Rectangle 22.png"
import rectangle23 from "../images/Rectangle 23.png"
import rectangle24 from "../images/Rectangle 24.png"
import vector from "../images/Vector.png"
import vector1 from "../images/vector1.png"
import vector2 from "../images/Vector2.png"
import vector3 from "../images/Vector3.png"
import vector4 from "../images/Vector4.png"
import slcaknew from "../images/Slack New.png"
import woo from "../images/WooCommerce.png"
// import seehowthimgs from "../images/See how we’re rolling things around.jpg"
import startfromhere from "../images/Start from here.jpg"

// import { Button } from '@mui/material'





export const Home = () => {
  return (
    <div>
    
    <div className='rightrectangle17'>

     <img  className='rectangle17' src={rectangle17} alt="img" />
     <img  className='rectangle25' src={rectangle25} alt="img" />
     <img  className='rectangle26' src={rectangle26} alt="img" />     
     <img  className='rectangle20' src={rectangle20} alt="img" />     
     <img  className='rectangle19' src={rectangle19} alt="img" />     
     <img  className='rectangle21' src={rectangle21} alt="img" />     
     <img  className='rectangle23' src={rectangle23} alt="img" />     
     <img  className='rectangle24' src={rectangle24} alt="img" />     
     <img  className='rectangle22' src={rectangle22} alt="img" />     

    </div>

    <div className='rightp'>
    <p>Hire Affordable <br/> <span className='span'> World Class Talent  </span><br/> In Just Few Steps</p>
    </div>

    
    <img  className='vector' src={vector} alt="img" />

    <div className='contentp'>
    <p>Find great talent, build your business and take your career to the next level.</p>
    </div>

    <div className='workbutton'>



    <button className='btn_work'>I am looking for a work
     <img  className='vector1' src={vector1} alt="img" />
      </button>



      <button className='btn_talent'>I need a talent
     <img  className='vector2' src={vector2} alt="img" />
      </button>



    <img className="vector3" src={vector3}  alt='img' />

    <img className="startfromhere" src={startfromhere}  alt='img' />
    

    </div>

    <div className='play_btn'>
  
    <button className='playbtn'> <img  className='rectangle34' src={vector4} alt="img" /> </button>
    
     <p className='seehow'>See how we’re rolling things around</p>

    </div>

    <p className='trustedby'>Trusted By</p>
  
    <div >
    <img  className='slacknew' src={slcaknew} alt="img" />

    
    <a className='slack' href='https://slack.com/' target="_blank">Slack</a>


    <img  className='woo' src={woo} alt="img" />

    
    <a className='commerce' href='https://woocommerce.com/' target="_blank">Commerce</a>

    
    </div>

    
    </div>
  )
}
