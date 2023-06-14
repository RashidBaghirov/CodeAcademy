import React from "react";


function Cart_Cource({date,courcename,courseday}){
    return(
        <div className="cart">
        <div className="title">
            <h2>
               {date}
            </h2>
        </div>
        <div className="text">
            <div className="upper">
                <p>{courcename}</p>
            </div>
            <div className="bottom">
                {courseday}
            </div>
        </div>
        <div className="buttonMur">
            <a href="">
                Müraciət et
            </a>
        </div>
    </div>
    );
}

export default Cart_Cource;