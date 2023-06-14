import React from "react";

function Left({ image, question, answer }){
    return(
        <div className="chat">
        <div className="row gx-5">
         <div className="leftside col-lg-6">
             <div className="text">
                 <p>{question}</p>
             </div>
             <div className="image">
                 <img src={image} alt="" />
             </div>
         </div>
         <div className="rightside col-lg-6">
             <div className="text">
                 <p>{answer}</p>
             </div>
         </div>
        </div>
     </div>
    );
}


export default Left;