import React from "react";
import "./_First.scss";

function First() {
  return (
    <section id="first">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title">
              <h1>Proqramlaşdırma</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-image">
              <div className="image">
                <img
                  src="https://code.edu.az/wp-content/uploads/2021/07/sep-line.png"
                  alt=""
                />
              </div>
              <div className="text">
                <p>
                  Proqramlaşdırma müəyyən bir nəticəni əldə etmək və ya vəzifəni
                  yerinə yetirmək üçün komputerə verilən icralar toplusudur.
                  Sahə proqramlaşdırma dillərindən istifadə edərək alqortimlərin
                  müəyyən edilməsi və tətbiqi kimi işləri özündə əhatə edir.
                  Ümumilikdə, proqram yaratmaqla bağlı nəzəri və praktiki
                  yaradıcılıq sahəsi proqramlaşdırmanın izahını tam olaraq əhatə
                  edir. Siz də Code Academy-nin Proqramlaşdırma tədris
                  proqramına müraciət edərək sahənin ixtisaslaşmış
                  proqramçılarından birinə çevrilə bilərsiniz.
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
