import React from "react";
import "./home.css";
import rectangle17 from "../images/Rectangle 17.png";
import rectangle25 from "../images/Rectangle 25.png";
import rectangle26 from "../images/Rectangle 26.png";
import rectangle20 from "../images/Rectangle 20.png";
import rectangle19 from "../images/Rectangle 19.png";
import rectangle21 from "../images/Rectangle 21.png";
import rectangle22 from "../images/Rectangle 22.png";
import rectangle23 from "../images/Rectangle 23.png";
import rectangle24 from "../images/Rectangle 24.png";
import vector from "../images/Vector.png";
import vector1 from "../images/vector1.png";
import vector2 from "../images/Vector2.png";
import vector3 from "../images/Vector3.png";
import vector4 from "../images/Vector4.png";
import slcaknew from "../images/Slack New.png";
import woo from "../images/WooCommerce.png";
import apple from "../images/Apple Logo.png";
import microsoft from "../images/Microsoft.png";
import ellipse10 from "../images/Ellipse 10.png";
import reactangle27 from "../images/Rectangle 27.png";
import reactangle28 from "../images/Rectangle 28.png";
import reactangle29 from "../images/Rectangle 29.png";

// import seehowthimgs from "../images/See how we’re rolling things around.jpg"
import startfromhere from "../images/Start from here.jpg";

// import { Button } from '@mui/material'

export const Home = () => {
  return (
    <div>
      <div className="bkcwhite">
        <image className="ellipse10" src={ellipse10} alt="img" />

        <div className="rightrectangle17">
          <img className="rectangle17" src={rectangle17} alt="img" />
          <img className="rectangle25" src={rectangle25} alt="img" />
          <img className="rectangle26" src={rectangle26} alt="img" />
          <img className="rectangle20" src={rectangle20} alt="img" />
          <img className="rectangle19" src={rectangle19} alt="img" />
          <img className="rectangle21" src={rectangle21} alt="img" />
          <img className="rectangle23" src={rectangle23} alt="img" />
          <img className="rectangle24" src={rectangle24} alt="img" />
          <img className="rectangle22" src={rectangle22} alt="img" />
        </div>

        <div className="rightp">
          <p>
            Hire Affordable <br />{" "}
            <span className="span"> World Class Talent </span>
            <br /> In Just Few Steps
          </p>
        </div>

        <img className="vector" src={vector} alt="img" />

        <div className="contentp">
          <p>
            Find great talent, build your business and take your career to the
            next level.
          </p>
        </div>

        <div className="workbutton">
          <button className="btn_work">
            I am looking for a work
            <img className="vector1" src={vector1} alt="img" />
          </button>

          <button className="btn_talent">
            I need a talent
            <img className="vector2" src={vector2} alt="img" />
          </button>

          <img className="vector3" src={vector3} alt="img" />

          <img className="startfromhere" src={startfromhere} alt="img" />
        </div>

        <div className="play_btn">
          <button className="playbtn">
            {" "}
            <img className="rectangle34" src={vector4} alt="img" />{" "}
          </button>

          <p className="seehow">See how we’re rolling things around</p>
        </div>

        <p className="trustedby">Trusted By</p>

        <div>
          <img className="slacknew" src={slcaknew} alt="img" />

          <a
            className="slack"
            href="https://slack.com/"
            rel="#"
            target="_blank"
          >
            Slack
          </a>

          <img className="woo" src={woo} alt="img" />

          <a
            className="commerce"
            href="https://woocommerce.com/"
            rel="#"
            target="_blank"
          >
            Commerce
          </a>

          <img className="apple" src={apple} alt="img" />

          <a
            className="appletext"
            href="https://apple.com/"
            rel="#"
            target="_blank"
          >
            Apple
          </a>

          <img className="microsoft" src={microsoft} alt="img" />

          <a
            className="microsofttext"
            href="https://microsoft.com/"
            rel="#"
            target="_blank"
          >
            Microsoft
          </a>
        </div>

        <div>
          <div className="rectangle27">
            <p className="onesevenm"> 17M+ </p>

            <p className="servicep">Service providers</p>
          </div>

          <div className="rectangle28">
            <p className="nineeight">98.77%</p>
            <p className="usersat"> User Satisfaction</p>
          </div>

          <div className="rectangle29">
            <p className="onefive"> 15.8M+ </p>
            <p className="reccuser">Recurring Users</p>
          </div>
        </div>

        <p className="HireBest">
          Hire best freelancer <br />
          <span className="contentjob">For any Job, Online</span>
        </p>
      </div>
      <div>
      
      <div className="frametwoninefour">
      <p className="workdone">
      It’s easy to get workdone on <br/>
      <span className="creativepeople">
      Cretive people
      </span>
      </p>

      <div className="rectangle30">
      </div>
      <div className="rectangle35">
      </div>
      <div className="rectangle36">
      </div>
      <div className="rectangle37">
      </div>

      </div>

      </div>
    </div>
  );
};
