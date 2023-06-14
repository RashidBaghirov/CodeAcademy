import React from "react";
import './_FourthSection.scss';

function FourthSection(){
    return(
        <section id="four">
        <div className="container">
          <div className="row">
              <div className="col-lg-7">
                  <div className="about">
                      <div className="title">
                          <h2 className="upper">
                              təhsil
      
                          </h2>
                          <h2 className="bottom">
                              lisenziyası
                          </h2>
                      </div>
                      <div className="text">
                          <p>
                              Azərbaycan Respublikasının İqtisad Nazirliyi tərəfindən 17 Noyabr 2020-ci il tarixində verilmiş xüsusi lisenziya əsasında “CODE” Məhdud Məsuliyyətli Cəmiyyətinə əlavə təhsil müəssisələri fəaliyyətinin həyata keçirilməsinə icazə verilir. Bu o deməkdir ki,
                          </p>
                      </div>
                      <ul>
                          <li>Code Academy Təhsil Nazirliyi tərəfindən akkreditasiya olunmuş ilk özəl tədris müəssisəsidir.</li>
                          <li>Təhsil bazarının standartlarına və normalalarına cavab verən tədris təşkil olunur.</li>
                          <li>Müntəzəm yoxlamalardan keçdiyimiz üçün tədris proqramlarımızın keyfiyyətindən əmin ola bilərsiniz.</li>
                      </ul>
                      <div className="certificate">
                          <a href="">
                              Sertifikatı göstər
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-lg-5">
                  <div className="image">
                      <img src="https://2022.code.edu.az/wp-content/uploads/2021/08/tehsil-nazirliyi.jpeg" alt="" />
                  </div>
              </div>
          </div>
        </div>
      </section>
    );
}

export default FourthSection;