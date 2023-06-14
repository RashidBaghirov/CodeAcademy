import React from "react";
import "./_SecondSection.scss";

function SecondSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image">
              <img
                src="https://code.edu.az/wp-content/uploads/2022/04/emekdaslarimiza-niye-telim-vermeliyik.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-text">
              <div className="title">
                <h2>"biz hələ də öyrənirik"</h2>
              </div>
              <div className="subTitle">
                <h2>deyirsinizsə, uğur sizinlə olacaq!</h2>
              </div>
              <div className="texts">
                <div className="firstText">
                  <p>
                    İş dünyasının ən dinamik sektorunda olan İT əməkdaşları
                    bilik və bacarıqlarını yeniləmədikcə və təkmilləşdirmədikcə
                    zamanla məhsuldarlıqlarını itirirlər. İnkişaf edən və
                    yenilənən texnologiya sizə yeni iş imkanları, maddi
                    üstünlüklər və məlumat bazalarına əsaslanan qərarlar qəbul
                    etmək şansı kimi çoxsaylı imkanlar təklif edir. Lakin
                    hazırda texnologiyalar baxımından komandalarının
                    ehtiyaclarını ödəməyən işəgötürənlər və qurumlar bu həll
                    yollarından, imkanlardan və qazanclardan uzaq durur.
                  </p>
                </div>
                <div className="secondText">
                  <p>
                    İşçilərinizin texniki bilik və bacarıqlarının artırılması
                    həm rəqabət qabiliyyətinizi artırır, həm də məhsul və xidmət
                    sahələrinizi genişləndirir. Komandanıza lazım olan bütün
                    texniki təlimləri Code Academy-də tapa bilərsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
