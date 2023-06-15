import React from "react";
import { Link } from 'react-router-dom';


function About({ imageSrc, titles, text,id }) {
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
            <p>{text}...</p>
        </div>
        <div className="other">
               <Link className="text-dark" style={{textDecoration:"none"}} to={`/practice/${id}`}>Ətraflı</Link>     
        </div>
    </div>
</div>
  );
}

export default About;