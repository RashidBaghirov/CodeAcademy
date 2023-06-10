import React from "react";
import "./_FirstSection.scss";

function FirstSection() {
  return (
    <section>
    <div className="container">
        <div className="mainContent">
            <div className="title">
                <h1>korporativ</h1>
            </div>
            <div className="text">
                <p>
                    Korporativ hədəflərinizə çatmaq üçün tədris proqramlarımıza qoşulun və komandanızı bizə etibar edin.
                </p>
            </div>
            <div className="navigation">
                <a href="">
                    Müraciət edin
                </a>
            </div>
            <div className="download">
                <span className="icon">
                    <i className="fa-solid fa-download"></i>
                </span>
                <span className="text">
                    Kataloq yüklə
                </span>
            </div>
        </div>
    </div>
</section>
  );
}

export default FirstSection;