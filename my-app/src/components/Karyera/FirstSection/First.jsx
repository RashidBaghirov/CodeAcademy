import React from "react";
import "./_First.scss";

function First() {
  return (
    <section id="first">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="images">
              <img src="/images/kariyera.jpeg" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="titles_image">
              <h2>Karyera və Talant Mərkəzi</h2>
              <p>#KaryeraBurada</p>
              <p>#TalantBurada</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="left ">
              <div className="titles">
                <div className="first">
                  <h2>fəaliyyətimiz</h2>
                </div>
              </div>
              <div className="border_edu">
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text">
              <p>
                Karyera və Talant Mərkəzi məzunların potensialına uyğun işlə
                təmin olunması üçün Code Academy-nin nəzdində yaradılan bir
                bölmədir. Arzuladıqları peşə üzrə işləmək istəyən tələbələr
                karyera yolunda irəliləyərkən qarşılaşdıqları çətinliklərlə və
                eyni zamanda iş axtarışı məsələləri ilə bağlı ehtiyac duyulduqda
                Karyera və Talant Mərkəzindən dəstək ala bilərlər.
              </p>
              <p>Karyera və Talant Mərkəzinin xüsusiyyətləri:</p>
              <ul>
                <li>Təkbətək görüş əsasında karyera məsləhəti verir</li>
                <li>Sektorun ehtiyacına uyğun seminarlar təşkil edir</li>
                <li>Şəxsi portfolio-nun təşkilinə dəstək olur</li>
                <li>CV-nin hazırlanma mərhələsində köməklik göstərir</li>
                <li>
                  Şirkətlər (rəhbərlər və HR mütəxəssisləri) ilə əlaqələr qurur
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
