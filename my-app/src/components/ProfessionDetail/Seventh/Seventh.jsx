import React from "react";
import "./_Seventh.scss"


function Seventh(){
    return(
        <section id="form">
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2 className="upper">
                        tədrisin
                    </h2>
                    <h2 className="bottom">
                        formaları
                    </h2>
                    <img src="https://code.edu.az/wp-content/uploads/2021/07/sep-line.png" alt="" />
                </div>
                <ul>
                    <div className="row">
                        <li className="col-lg-4">
                            <div className="image">
                                <img src="https://code.edu.az/wp-content/uploads/2021/08/muraciet.png" alt="" />
                            </div>
                            <div className="title">
                                <h3>
                                    Onlayn müraciət et
                                </h3>
                            </div>
                            <div className="text">
                                <p>
                                    Saytımızdan onlayn formu dolduraraq Proqram Məsləhətçisi ilə görüş təyin et.
                                </p>
                            </div>
                        </li>

                        <li className="col-lg-4">
                            <div className="image">
                                <img src="https://code.edu.az/wp-content/uploads/2021/08/muraciet.png" alt="" />
                            </div>
                            <div className="title">
                                <h3>
                                    Online Campus
                                </h3>
                            </div>
                            <div className="text">
                                <p>
                                    Online qeydiyyatdan keçərək sinifdaxili tələbələr ilə birlikdə dərsdə canlı şəkildə iştirak edib tədris proqramının tərkib hissələrini təhvil verib məzun ola bilərlər.
                                </p>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Seventh;