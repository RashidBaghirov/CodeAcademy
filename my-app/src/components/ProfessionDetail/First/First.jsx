import React from "react";
import "./_First.scss";

function First() {
  return (
    <section id="first_detail_sc">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="image">
                    <img src="https://code.edu.az/wp-content/uploads/2021/08/proqram-1536x1024.jpg" alt="" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="title">
                    <h2 className="upper">
                        Full Stack Proqramlaşdırma
                    </h2>
                    <h2 className="bottom">
                        #KodBurada
                    </h2>
                </div>
            </div>
            <div className="col-lg-6">
              <div className="blueDiv">
                <div className="blue">
                    <div className="titleBlue">
                        <h4 >
                            niyə code academy-də proqramlaşdırma təhsili?
                        </h4>
                    </div>
                    <div clclassNameass="textFirst">
                        <p>Code Academy-də keçirilən Proqramlaşdırma üzrə tədris proqramı sektorun ehtiyaclarını nəzərə alaraq hazırlanmışdır. Təhsilin 85%-i praktiki iş üzərində qurulmuşdur. Məqsəd sadəcə Proqramlaşdırmanın incəliklərini öyrətmək deyil, eyni zamanda müəssisələrin veb proqramlaşdırmaya olan ehtiyaclarını professional şəkildə qarşılayacaq mütəxəssislər yetişdirməkdir.</p>
                    </div>
                    <div className="textSecond">
                        Code Academy-nin Zəmanətli Təhsil Modeli ilə hər bir tələbəyə təhsilini təkrarlama imkanı verilir. Mövzuların praktiki tətbiqinin dərhal həyata keçirilməsi üçün hər bir tələbə sinifdaxili kompüterlərlə təmin olunur. Tələbələrin Veb Proqramlaşdırma təhsili boyunca öyrəndiklərini təkrar etmələrini və gücləndirmələrini təmin etmək məqsədilə tədris proqramı Code Academy-nin özünəməxsus Mentor Sistemi ilə təkmilləşdirilmişdir.
                    </div>
               </div>
              </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default First;
