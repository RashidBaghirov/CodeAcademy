import React from "react";
import Accordion from "../../Accordion";
import "./_FourthSection.scss";

function FourthSection() {
  const accordionData = [
    {
      title: "Sizə özəl qruplar",
      content: [
        "Bunlar xüsusi planlaşdırılmış qruplarla keçirilən təlimlərdir ki, yalnız sizin qurumun əməkdaşları iştirak edə bilər. Təlim ehtiyaclarınız mütəxəssislərimiz tərəfindən təhlil edilir və sizə uyğun olan təlim məzmununa uyğun olaraq əməkdaşlarınızın cədvəlinə uyğun olaraq təlim planları hazırlanır. İstəyinizə uyğun, təlimlərdə istifadə olunan nümunələr şirkətinizin cari və real iş nümunələrindən seçilə bilər.",
      ],
    },
    {
      title: "Açıq qruplar",
      content: [
        "Açıq dərslər öncədən müəyyən edilmiş tarixi, yeri, vaxtı, müddəti və məzmunu olan təlimlərdir.Ümumi iştirak üçün açıq olan bu təlimlər maksimum 15 nəfərlik siniflərdə keçirilir. Təlimdə digər qurumların iştirakçıları ilə birlikdə sizin qurumdan bir və ya bir neçə şəxs iştirak edir.İştirakçılar təlimdə iştirak etmək üçün əgər varsa, ilkin şərtlərə cavab verməlidirlər",
      ],
    },
    {
      title: "İctimai tərəfdaşlıq IT peşəkar təlimi",
      content: [
        "Bunlar dövlət qurumlarını maliyyələşdirməyi və İKT sektorunun ehtiyac duyduğu meyarlara uyğun gənc işçi   qüvvəsini yetişdirməyi hədəfləyən layihələrdir.  Kriteriyalara cavab verən namizədlər seçildikdən sonra 6-8 ay davam edən yüksək keyfiyyətli texniki təlimlər gənc işsizlərə İKT sektorunda lazım olan bacarıqları verir.  Təlimi müvəffəqiyyətlə başa vuran məzunlar özəl sektorda və dövlət müəssisələrində vakant yerlərə göndərilir.",
      ],
    },
    {
      title: "Qurumlar üçün xüsusi texniki inkişaf layihələri",
      content: [
        "Müəssisələrin İT işçilərinin mövcud bacarıqlarını ölçməsi və şirkətin vizyonu və İT layihələrinə uyğun inkişaf planı hazırlaması lazımdır. Code Academy bu prosesi sizin adınıza layihə olaraq idarə edə bilər. Code Academy bu prosesi sizin adınıza layihə olaraq idarə edə bilər.        Xəritəçəkmə bacarıq boşluqları ilə başlayan bu proses komandaların ehtiyac duyacağı bütün təlimlərin müəyyən edilməsi və planlaşdırılması ilə davam edir.",
      ],
    },
  ];

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
                {accordionData.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                    index={index}
                  />
                ))}
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
