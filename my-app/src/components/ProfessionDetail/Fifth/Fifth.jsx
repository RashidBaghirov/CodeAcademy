import React from "react";
import "./_Fifth.scss";

function Fifth() {
  return (
    <section id="certificate">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="title">
              <h2 className="upper">tədris üzrə</h2>
              <h2 className="bottom">sertifikatlar</h2>
            </div>
            <div className="image">
              <span> </span>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                  >
                   Code Academy Diplom
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Təhsil Nazirliyi tərəfindən akkreditasiya olunmuş əlavə
                    tədris müəssisəsi olaraq bitirmə layihələrini uğurla təhvil
                    verən tələbələr Code Academy-nin məzun diplomu ilə təltif
                    olunacaqlar. Tələbələrimizə məzun, şərəf məzunu və yüksək
                    şərəf məzunu dərəcələri tətbiq olunacaqdır.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fifth;
