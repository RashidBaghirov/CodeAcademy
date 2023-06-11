import React from "react";
import './_FirstSection.scss';

function FirstSection(){
    return(
        <section id="first">
        <div className="container">
            <div className="row">
               <div className="col-lg-7">
                    <div className="image">
                        <img src="https://code.edu.az/wp-content/uploads/2021/08/4Floor-Design-Facebook-2-1536x809.jpg" alt="" />
                    </div>
               </div>
               <div className="col-lg-3">
                    <div className="title-text">
                        <div className="title">
                            <h2>
                                haqqımızda
                            </h2>
                        </div>
                        <div className="text">
                            <p>
                                2015-ci ildə fəaliyyətə başlayan Code Academy yüksək texnologiyalar sahəsində təcrübəli mütəxəssislər hazırlayan tədris müəssisəsidir. 
                            </p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
    );
}

export default FirstSection;