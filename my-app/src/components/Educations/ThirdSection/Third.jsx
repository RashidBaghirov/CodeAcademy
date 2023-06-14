import React from "react";
import "./_Third.scss";
function Third() {
  return (
    <>
    <section id="third">
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2 className="upper">
                        tədris
                    </h2>
                    <h2 className="bottom">
                        formaları
                    </h2>
                    <img src="https://code.edu.az/wp-content/uploads/2021/07/sep-line.png" alt="" />
                </div>

                <ul>
                    <li className="col-lg-3 text-center">
                        <div className="logoSVG">
                       <img  src="images/onlinecampus.png"/> 
                        </div>
                        <div className="logo_title">
                            <h2>
                                Online Campus
                            </h2>
                        </div>
                        <div className="text">
                            <p>
                                    Online qeydiyyatdan keçərək sinifdaxili tələbələr ilə birlikdə dərsdə canlı şəkildə iştirak edib tədris proqramının tərkib hissələrini təhvil verib məzun ola bilərlər.     
                            </p>
                        </div>
                    </li>

                    <li className="col-lg-3 text-center">
                        <div className="logoSVG">
                        <img  src="images/selfbaced.png"/> 

                        </div>
                        <div className="logo_title">
                            <h2>
                                Self-paced
                            </h2>
                        </div>
                        <div className="text">
                            <p>
                                    İstədiyin yerdə və zamanda dərsləri öyrənə bilərsiniz. Ehtiyacınız olan tək şey internet bağlantısıdır.                  
                            </p>
                        </div>
                    </li>


                    <li className="col-lg-3 text-center">
                        <div className="logoSVG">
                        <img  src="images/campus.png"/> 

                        </div>
                        <div className="logo_title">
                            <h2>
                                Campus
                            </h2>
                        </div>
                        <div className="text">
                            <p>
                                Tələbələrimiz akademiyaya gələrək dərslərdə birbaşa iştirak edib tədrisə yiyələnə bilərlər. 
                            </p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </section>
    </>
  );
}

export default Third;
