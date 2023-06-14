import React from "react";
import "./_First.scss"

function First(){
    return(
        <section id="first">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image">
                        <img src="https://code.edu.az/wp-content/uploads/2021/09/mirkamil-bayramov.jpeg" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="title-text">
                        <div className="title">
                            <h1 className="upper">
                                Mirkamil
                            </h1>
                            <h1 className="bottom">
                                Bayramov
                            </h1>
                            <p>Bakı Torpaq Layihə Smeta Bürosu (BTLSB)
                                ,
                                Memar/Dizayner</p>
                        </div>
                        <div className="text">
                            <p>Bu sahə ilə məşğul olan yaxınlarımın məsləhəti və təklifi ilə Code Academy də bu təhsili almağı qərarlaşdırdım.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}


export default First;