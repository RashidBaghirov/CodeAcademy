import React from "react";


function company({image}){
    return(
        <div className="images_cmp col-lg-2">
        <div >
            <img src={image} alt="" />
        </div>
    </div>
    );
}

export default company;