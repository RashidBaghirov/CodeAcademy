import React from "react";
import "./_Third.scss"

function Third(){
    return(
        <section id="third">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6">
                    <div class="images">
                        <div class="oddImage">
                            <img src="https://code.edu.az/wp-content/uploads/2021/07/digital-memarliq-3d.jpeg" alt="" />
                        </div>
                        <div class="evenImages">
                            <div class="upper">
                                <img src="https://code.edu.az/wp-content/uploads/2021/07/digital-memarliq-3d-dersleri-1.jpg" alt="" />
                            </div>
                            <div class="bottom">
                                <img src="https://code.edu.az/wp-content/uploads/2021/07/digital-memarliq-3d-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="title-text">
                        <div class="title">
                            <h2 class="upper">
                                Dizayn
                            </h2>
                            <p class="bottom">
                                tədrisi
                            </p>
                        </div>
                        <div class="text">
                            <p>
                                ünsiyyət əhatə edən bir sahədir. İndividuallığa ehtiyacın bu qədər artdığı bir dövrdə qrafik, interior, exterior dizayn və hərəkətli qrafika kimi sahələr olduqca tələbat görür. Siz də Code Academy-yə müraciət edərək dizayn sahəsinin arzuladığınız istiqamətində özünüzü inkişaf etdirə və gələcəyin sahələrindən birinə yiyələnə bilərsiniz.
                            </p>
                        </div>
                        <div class="navDesighn">
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