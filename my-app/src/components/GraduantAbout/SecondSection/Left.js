import React from "react";

function Left({ image, question, answer }){
    return(
        <div class="chat">
        <div class="row gx-5">
         <div class="leftside col-lg-6">
             <div class="text">
                 <p>{question}</p>
             </div>
             <div class="image">
                 <img src={image} alt="" />
             </div>
         </div>
         <div class="rightside col-lg-6">
             <div class="text">
                 <p>{answer}</p>
             </div>
         </div>
        </div>
     </div>
    );
}


export default Left;