import React from "react";
import "./_SecondSection.scss";

function SecondSection() {
  return (
    <section id="second">
      <div container>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <div className="questions">
              <div className="titles">
                <h5>Əlavə suallar</h5>
              </div>
              <div className="title">
                <p>
                  <strong>Korporativ sorğular</strong>
                </p>
                <p>
                  Korporativ sorğular üçün corp@code.edu.az ilə əlaqə saxla.
                </p>
              </div>
              <div className="title">
                <p>
                  <strong>Marketinq sorğuları </strong>
                </p>
                <p>
                  Marketinqlə bağlı sualların üçün marketing@code.edu.az ilə
                  əlaqə saxla.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-start align-items-center">
          <div className="questions">
              <div className="titles">
                <h5>Bizimlə əlaqə saxlamaqdan çəkinmə.</h5>
              </div>
              <div className="title">
                <p>
                  <strong>Karyera və Talant mərkəzi</strong>
                </p>
                <p>
                  Karyera və Talant mərkəzi ilə bağlı gələn sorğular üçün
                  talant@code.edu.az ilə əlaqə saxla.
                </p>
              </div>
              <div className="title">
                <p>
                  <strong>Digər müraciətlər</strong>
                </p>
                <p>
                  Ümumi suallar, şərhlər və təkliflər üçün info@code.edu.az
                  elektron poçtu ilə əlaqə qur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
