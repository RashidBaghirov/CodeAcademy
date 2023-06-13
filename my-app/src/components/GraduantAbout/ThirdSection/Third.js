import React from "react";
import "./_Third.scss"

function Third(){
    return(
        <section id="third">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6">
                    <div className="images">
                        <div className="oddImage">
                            <img src="https://code.edu.az/wp-content/uploads/2021/07/digital-memarliq-3d.jpeg" alt="" />
                        </div>
                        <div className="evenImages">
                            <div className="upper">
                                <img src="https://code.edu.az/wp-content/uploads/2021/07/digital-memarliq-3d-dersleri-1.jpg" alt="" />
                            </div>
                            <div className="bottom">
                                <img src="https://code.edu.az/wp-content/uploads/2021/07/digital-memarliq-3d-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div cclassNameass="title-text">
                        <div className="title">
                            <h2 className="upper">
                                Dizayn
                            </h2>
                            <p className="bottom">
                                tədrisi
                            </p>
                        </div>
                        <div className="text">
                            <p>
                                ünsiyyət əhatə edən bir sahədir. İndividuallığa ehtiyacın bu qədər artdığı bir dövrdə qrafik, interior, exterior dizayn və hərəkətli qrafika kimi sahələr olduqca tələbat görür. Siz də Code Academy-yə müraciət edərək dizayn sahəsinin arzuladığınız istiqamətində özünüzü inkişaf etdirə və gələcəyin sahələrindən birinə yiyələnə bilərsiniz.
                            </p>
                        </div>
                        <div className="navDesighn">
                            <p>#DizaynBurada <span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Third;