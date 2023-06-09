import React from "react";
import "./_EducationsArea.scss";

function EducationsArea() {
  return (
    <section id="educations">
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="left ">
                <div className="titles">
                  <div className="first">
                    <h2>tədris</h2>
                  </div>
                  <div className="second">
                    <h2>sahələri</h2>
                  </div>
                </div>
                <div className="border_edu">
                  <div className="line"></div>
                </div>
                <div className="text">
                  <p>
                  İnformasiya Texnologiyaları sahəsində bugünün və <br/> gələcəyin ən tələb edilən istiqamətləri
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="edu_category">
                    <div className="images">
                      <img src="/images/digital.png" />
                    </div>
                    <div className="edu_title">
                      <h4>Digital Marketing</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="edu_category">
                    <div className="images">
                      <img src="/images/design.png" />
                    </div>
                    <div className="edu_title">
                      <h4>Dizayn</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="edu_category">
                    <div className="images">
                      <img src="/images/cyber.png" />
                    </div>
                    <div className="edu_title">
                      <h4>Kiber Təhlükəsizlik</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="edu_category">
                    <div className="images">
                      <img src="/images/programing.png" />
                    </div>
                    <div className="edu_title">
                      <h4>Proqramlaşdırma</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationsArea;
