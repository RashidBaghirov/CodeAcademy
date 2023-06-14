import React from "react";
import "./_First.scss";

function First() {
  return (
    <section id="first">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="title">
                    <h2 className="upper">
                        təhsil
                    </h2>
                    <h2 className="bottom">
                        modeli
                    </h2>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="logo">
                    <img src="https://code.edu.az/wp-content/uploads/2021/07/sep-line.png" alt="" />
                </div>
                <div className="text">
                    <p>
                        Code Academy-nin təhsil modelində tələbələr nəzəri biliklər əldə etməklə yanaşı, təcrübə keçmək imkanı da əldə edirlər. Yalnız Code Academy-də tətbiq olunan bu üsul dərslərin daha effektiv qavranmasına yönəlib. Real layihələr üzərində aparılan praktiki işlər isə tələbələrin karyeralarına tam hazır olmalarını təmin edir. Təhsilini bitirən tələbələr müəyyən müddət ərzində mentorların rəhbərliyi altında buraxılış layihəsi üzərində işləyirlər. Layihələr tələbələrlə real praktika qazanmağa, şəxsi portfolio-larını tərtib etməyə və uğurlu karyera qurmağa zəmin yaradır. 
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default First;
