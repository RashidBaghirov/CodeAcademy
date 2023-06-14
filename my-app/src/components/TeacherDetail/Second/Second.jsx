import React from "react";
import "./_Second.scss";
import { Link } from "react-router-dom";

function Second() {
  return (
    <section id="second">
      <div className="container">
        <div className="row">
          <div className="titleCart">
            <h1>Proqramlaşdırma Tədris Proqramları</h1>
          </div>

          <div className="cart col-8">
            <div className="name">
              <span>Fərdi</span>
            </div>
            <div className="tc_name">
              <h2>Full Stack Proqramlaşdırma</h2>
            </div>
            <div className="dayelse">
              <span>350 saat | Campus | Online Campus</span>
            </div>
            <div className="tc_text">
              <p>
                Code Academy-də keçirilən Proqramlaşdırma üzrə tədris proqramı
                sektorun ehtiyaclarını nəzərə alaraq hazırlanmışdır. Təhsilin
                85%-i praktiki iş üzərində qurulmuşdur. Məqsəd sadəcə
                Proqramlaşdırmanın incəliklərini öyrətmək deyil, eyni zamanda
                müəssisələrin veb proqramlaşdırmaya olan ehtiyaclarını
                professional şəkildə qarşılayacaq mütəxəssislər yetişdirməkdir.
                Code Academy-nin Zəmanətli Təhsil Modeli ilə hər bir tələbəyə
                təhsilini təkrarlama imkanı verilir. Mövzuların praktiki
                tətbiqinin dərhal həyata keçirilməsi […]​
              </p>
            </div>
            <div className="button">
              <Link to="/professiondetail">Ətraflı</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Second
