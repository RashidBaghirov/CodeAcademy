import React from "react";

function Other({image,name,surname,speciality}) {
    return(
        <li>
        <div className="image">
            <img src={image} alt="" />
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