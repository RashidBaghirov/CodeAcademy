import React from "react";
import "./_Second.scss";
import TypeOfEducation from "./TypeofEducation";

function Second(){
    return(
        <section id="second">
        <div className="container">
            <div className="row gx-0">
                <div className="col-lg-6">
                    <TypeOfEducation
                    title="Fərdi"
                    text="Digital Marketinq tədris proqramı Code Academy ilə İrlandiya mərkəzli Digital Marketinq İnstitutunun eksklüziv partnyorluğu əsasında tədris edilir. Fərdi tədris proqramında digital... "        />
            
                </div>
                <div className="col-lg-6">
                    <TypeOfEducation 
                        title="Korporativ"
                        text="Digital marketinq komandanızın bacarıqlarını korporativ tədris proqramlarımıza müraciət etməklə inkişaf etdirə bilər və peşəkar mütəxəssislər yetişdirməklə hədəflərinizə çata bilərsiniz.
                        "
                    />
                
                </div>
            </div>
        </div>
    </section>
    );
}

export default Second