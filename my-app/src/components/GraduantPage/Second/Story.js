import React from "react";

function Story({ image, fullname, company }){
    return(
        <div className="col-lg-4 mb-3 col-md-4">
        <div className="story">
          <div className="image">
            <img src={image} />
          </div>
          <div className="abouts">
            <p className="fullname">{fullname}</p>
            <p>{company}</p>
          </div>
        </div>
      </div>
    );
}


export default Story;