import React from "react";
import "./_First.scss"

function First(){
    return(
        <section id="first">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="image">
                        <img src="https://code.edu.az/wp-content/uploads/2021/09/mirkamil-bayramov.jpeg" alt="" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="title-text">
                        <div class="title">
                            <h1 class="upper">
                                Mirkamil
                            </h1>
                            <h1 class="bottom">
                                Bayramov
                            </h1>
                            <p>Bakı Torpaq Layihə Smeta Bürosu (BTLSB)
                                ,
                                Memar/Dizayner</p>
                        </div>
                        <div class="text">
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