import React from "react";


function Process({image,title,text}){
    return(
        <li className="col-lg-2">
        <div className="pro_image">
            <img src={image} alt=""/>
        </div>
        <div className="pro_title">
            <h3>
                {title}
            </h3>
        </div>
        <div className="pro_text">
            <p>
              {text}
            </p>
        </div>
    </li>
    )
}

export default Process;