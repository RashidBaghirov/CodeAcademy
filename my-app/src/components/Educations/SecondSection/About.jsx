import React from "react";
import { Link } from 'react-router-dom';


function About({ imageSrc, titles, text,others }) {
  return (
    <div className="about">
    <div className="image col-lg-6">
        <img src={imageSrc} alt="" />
    </div>
    <div className="title-text col-lg-6">
        <div className="title">
            <a href="">
               {titles}
            </a>
        </div>
        <div className="text">
            <p>{text}</p>
        </div>
        <div className="other">
            <Link style={{textDecoration:"none"}} to="/practice">        
                {others} 
            </Link>
        </div>
    </div>
</div>
  );
}

export default About;