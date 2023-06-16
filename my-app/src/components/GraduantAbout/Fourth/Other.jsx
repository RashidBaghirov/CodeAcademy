import React from "react";
import { Link } from "react-router-dom";

function Other({image,name,surname,speciality,id}) {
    return(
        <li>
        <div className="image">
          <Link  style={{textDecoration:"none"}}  to={`/graduantabout/${id}`}>
          <img src={image} alt="" />
          </Link>
        </div>
        <div className="aboutPerson">
            <span className="name">
                <b>
                  {name}

                </b>
            </span>
            <span className="surname">
                {surname}

            </span>
        </div>
        <div className="speciality">
            <p>{speciality}​</p>
        </div>
        <div className="ugur">
            <span>
                #UğurHekayəsiBurada 
            </span>
        </div>
    </li>
    );
}

export default Other