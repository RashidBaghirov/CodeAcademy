import React from "react";
import { Link } from "react-router-dom";

function Story({ image, fullname, company,id }){
    return(
        <div className="col-lg-4 mb-3 col-md-4">
        <div className="story">
          <Link style={{textDecoration:"none"}}  to={`/graduantabout/${id}`}>
          <div className="image">
            <img src={image} />
          </div>
          </Link>
          <div className="abouts">
            <p className="fullname">{fullname}</p>
            <p>{company}</p>
          </div>
        </div>
      </div>
    );
}


export default Story;