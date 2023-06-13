import React from "react";
import "./_Fourth.scss";
import Other from "./Other";

function Fourth(){
    return(
        <section id="fourth">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h2>digər hekayələr</h2>
                    </div>
                    <ul>
                    <Other
                        image="https://code.edu.az/wp-content/uploads/2021/09/BOLT-21.-oktoober-2021-S7_1349.jpg"
                        name="Könül"
                        surname=" Həsənova"
                        speciality="Digital Marketing Professional - DMI Pro"
                    />
                               <Other
                        image="https://code.edu.az/wp-content/uploads/2021/09/aynure-mahmudova-dizayn.jpeg"
                        name="Aynurə"
                        surname="Mahmudova"
                        speciality="Qrafik və Veb Dizayn"
                    />
                               <Other
                        image="https://code.edu.az/wp-content/uploads/2021/09/Ug%CC%86ur-hekay%C9%99l%C9%99ri-Gu%CC%88lsu%CC%88m-M%C9%99mm%C9%99dova-scaled-e1630888003125.jpg"
                        name=" Gülsüm"
                        surname=" Məmmədova"
                        speciality="Qrafik və Veb Dizayn"
                    />
                    </ul>
                </div>
            </div>
        </section>
  
    );
}

export default Fourth;