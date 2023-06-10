import React from "react";
import "./_StudentsCM.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StudentsCM = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="studentsCM">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="titles">
              <h2>məzunlarımızın rəyləri</h2>
            </div>
          </div>
          <Slider {...settings}>
            <div className="m-4">
              <div class="studentsCM-students-text">
                İlk dəfə Code Academy-ə gəldiyimdə, mühiti, əməkdaşları, <br />
                müəllimlərini gördüm və qərara gəldim ki, burda oxumaq
                istəyirəm.
              </div>
              <div className="stu_name_and_img">
                <div class="image">
                  <img
                    src="https://code.edu.az/wp-content/uploads/2021/09/Uğur-hekayələri-Gülsüm-Məmmədova-scaled-e1630888003125.jpg"
                    alt="Gülsüm Məmmədova"
                  />
                </div>
                <div class="name_and_profession">
                  <span class="name">Gülsüm Məmmədova</span>
                  <span class="profession">Qrafik və Veb Dizayn</span>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div class="studentsCM-students-text">
                Code Academy-nin ən güclü tərəflərindən biri təbii ki, müəllim
                heyətidir. Müvafiq sahələri tədris eden şəxslər hal-hazırda öz
                sahələrinin mütəxəssisləridir. Xüsusilə tədris müddətində
                müəllimimiz Şahin Paşayevin əməyini ayrıca qeyd etmək istərdim.
              </div>
              <div className="stu_name_and_img">
                <div class="image">
                  <img
                    src="https://code.edu.az/wp-content/uploads/2022/01/Ugur-hekayələri-Qurban-Sahin-oglu--scaled.jpg"
                    alt="Qurban Şahinoğlu"
                  />
                </div>
                <div class="name_and_profession">
                  <span class="name">Qurban Şahinoğlu</span>
                  <span class="profession">Sistem Administratorluğu</span>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div class="studentsCM-students-text">
                Code Academy bizə yalnız proqramlaşdırma öyrətmədi, həm də böyük
                bir həyat dərsi verdi. Risk etməkdən və xəyallarınızı izləməkdən
                qorxmayın. Heç vaxt gec deyil!
              </div>
              <div className="stu_name_and_img">
                <div class="image">
                  <img
                    src="https://code.edu.az/wp-content/uploads/2022/01/Agasef-Memmedli-_-Proqramlashdirma-1-scaled.jpg"
                    alt="Ağasəf Məmmədli"
                  />
                </div>
                <div class="name_and_profession">
                  <span class="name">Ağasəf Məmmədli</span>
                  <span class="profession">Proqramlaşdırma</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default StudentsCM;
