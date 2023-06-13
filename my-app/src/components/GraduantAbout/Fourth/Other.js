import React from "react";

function Other({image,name,surname,speciality}) {
    return(
        <li>
        <div class="image">
            <img src={image} alt="" />
        </div>
        <div class="aboutPerson">
            <span class="name">
                <b>
                  {name}

                </b>
            </span>
            <span class="surname">
                {surname}

            </span>
        </div>
        <div class="speciality">
            <p>{speciality}​</p>
        </div>
        <div class="ugur">
            <span>
                #UğurHekayəsiBurada 
            </span>
        </div>
    </li>
    );
}

export default Other