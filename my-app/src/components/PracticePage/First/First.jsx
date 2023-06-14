import React from "react";
import "./_First.scss";

function First() {
  return (
    <section id="first_practice">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="image">
              <img src="/images/praktik.jpg" />
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="left ">
              <div className="titles">
                <div className="first">
                  <h2>praktiki tədris</h2>
                </div>
                <div className="second ms-5">
                  <h2>metodu</h2>
                </div>
              </div>
              <div className="border_edu">
                <div className="line"></div>
              </div>
              <div className="text">
                <p>
                  Hər hansı bir peşəni yaxşı bacarmaq üçün yalnız öyrənmək
                  kifayət deyil, gərək öyrəndiklərinizi tətbiq edə bilmə
                  bacarığına da yiyələnib təcrübə toplayasınız.
                </p>
              </div>
              <div className="text">
                <p>
                  Buna görə Code Academy-nin dərs proqramları həm dərs
                  saatlarında, həm də dərs saatlarından kənarda praktika edəcə
                  biləcəyiniz şəkildə hazırlanıb.
                </p>
              </div>
              <div className="text">
                <p>
                  Dərs saatlarından əlavə olaraq təşkil olunan Lab günlərində
                  müəllim və mentorlarla birlikdə keçirilən mövzular üzrə
                  praktiki məşğələlər üzərində də işləyə bilərsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
