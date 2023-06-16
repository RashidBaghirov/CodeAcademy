import React from "react";
import { Link } from "react-router-dom";

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
            <Link style={{textDecoration:"none"}} to="/request">
                Müraciət et
            </Link>
        </div>
    </div>
    );
}

export default Cart_Cource;