import React from "react";
import "./_FourthSection.scss";

function FourthSection() {
  return (
    <section id="solwing">
      <div className="container">
        <div className="row">
          <div className="title">
            <h2 className="left">korporativ</h2>
            <h2 className="right">həllər</h2>
          </div>
          <div className="col-lg-6">
            <div className="leftSide">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Sizə özəl qruplar
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Bunlar xüsusi planlaşdırılmış qruplarla keçirilən
                      təlimlərdir ki, yalnız sizin qurumun əməkdaşları iştirak
                      edə bilər. Təlim ehtiyaclarınız mütəxəssislərimiz
                      tərəfindən təhlil edilir və sizə uyğun olan təlim
                      məzmununa uyğun olaraq əməkdaşlarınızın cədvəlinə uyğun
                      olaraq təlim planları hazırlanır. İstəyinizə uyğun,
                      təlimlərdə istifadə olunan nümunələr şirkətinizin cari və
                      real iş nümunələrindən seçilə bilər.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Açıq qruplar
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Açıq dərslər öncədən müəyyən edilmiş tarixi, yeri, vaxtı,
                      müddəti və məzmunu olan təlimlərdir.Ümumi iştirak üçün
                      açıq olan bu təlimlər maksimum 15 nəfərlik siniflərdə
                      keçirilir. Təlimdə digər qurumların iştirakçıları ilə
                      birlikdə sizin qurumdan bir və ya bir neçə şəxs iştirak
                      edir.İştirakçılar təlimdə iştirak etmək üçün əgər varsa,
                      ilkin şərtlərə cavab verməlidirlər
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      İctimai tərəfdaşlıq IT peşəkar təlimi
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>Bunlar dövlət qurumlarını maliyyələşdirməyi və İKT</p>
                      <p>
                        sektorunun ehtiyac duyduğu meyarlara uyğun gənc işçi
                      </p>
                      <p>qüvvəsini yetişdirməyi hədəfləyən layihələrdir. </p>
                      <p>
                        Kriteriyalara cavab verən namizədlər seçildikdən sonra
                        6-8 ay davam edən yüksək keyfiyyətli texniki təlimlər
                        gənc işsizlərə İKT sektorunda lazım olan bacarıqları
                        verir.{" "}
                      </p>
                      <p>
                        Təlimi müvəffəqiyyətlə başa vuran məzunlar özəl sektorda
                        və dövlət müəssisələrində vakant yerlərə göndərilir.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Qurumlar üçün xüsusi texniki inkişaf layihələri
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Müəssisələrin İT işçilərinin mövcud bacarıqlarını
                        ölçməsi və şirkətin vizyonu və İT layihələrinə uyğun
                        inkişaf planı hazırlaması lazımdır. Code Academy bu
                        prosesi sizin adınıza layihə olaraq idarə edə bilər.{" "}
                      </p>
                      <p>
                        Code Academy bu prosesi sizin adınıza layihə olaraq
                        idarə edə bilər.{" "}
                      </p>
                      <p>
                        Xəritəçəkmə bacarıq boşluqları ilə başlayan bu proses
                        komandaların ehtiyac duyacağı bütün təlimlərin müəyyən
                        edilməsi və planlaşdırılması ilə davam edir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rightSide">
              <div className="image">
                <img
                  src="https://code.edu.az/wp-content/uploads/2022/04/korporativ-heller.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
