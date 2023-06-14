import React from "react";
import "./_Third.scss";
import Accordion from "../../Accordion";

function Third() {
  const accordionData = [
    {
      title: "Proqramlaşdırmanın əsasları",
      content: [
        "Bu modul proqramlaşdırmanın əsas prinsiplərini əhatə edir. Modulda proqramlaşdırma platformaları, paradiqmalar, alqoritmlər və onun tarixi, sadə diaqram çəkilişi və elementlərin izahı kimi vacib məqamlar izah olunur.",
      ],
    },
    {
      title: "GitHub - Versiya İdarəetmə Sistemi",
      content: [
        "Bu modul ən böyük developer platforması hesab olunan GitHub məhsulları olan Git Commands, Git Repository, GitHub Student Developer Pack-i əhatə edir. Modulda CMD Linux komandaları, GitBash-ın ətraflı izahatı və praktikası, GitHub repo ilə əlaqələrin yaradılması, terminalın IDE mətn redaktoru haqqında ümumi məlumat və üstünlükləri izah olunur.",
      ],
    },
    {
      title: "C# Proqramlaşdırma",
      content: [
        "Bu modul kompyuter daxilində kodların işləmə prinsipi və Microsoft tərəfindən yaradılan C# proqramlaşdırma dilində yazılan kodların izahını əhatə edir. Modulda C# tarixçəsi, obyekt yönümlü proqramlaşdırmanın əsas prinsipləri, design pattern-lər, S.O.L.I.D prinsipləri, data strukturları və digər məqamlar detallı şəkildə əhatə olunur.",
      ],
    },
    {
      title: "HTLM5, CSS3, Javascript ilə Front end",
      content: [
        "Bu modul HTML işarələmə dili, CSS təsvir və Javascript proqramlaşdırma dilinin əsaslarını əhatə edir. Modulda HTML etiketlərinin yaradılması, CSS özəllikləri və onların dəyərləri, Sass texnologiyası, Javascript Ecmascript 6 versiyası, DOM(Document Object Model), BOM (Browser Object Model), debugging və jquery kitabxanasından istifadə yolları öyrədilir.",
      ],
    },
    {
      title: "MS Sql – SQL",
      content: [
        "Bu modul SQL proqramlaşdırma dilində yazılan kodların izahını əhatə edir. Modul QL server arxitekturası, data növləri, DDL və DML alt sorğuları, verilənlər bazasının qurulması və dizaynı kimi vacib məqamları əhatə edir.",
      ],
    },
    {
      title: "ASP NET.5 framework",
      content: [
        "Bu modul ASP.NET 5 framework-un əsaslarını əhatə edir. Modulda Entity Framework, Core, Mono platformalar, veb serverlər, Model View Controller (MVC) arxitekturası, WebSocket, Asp.net Web API və digər məqamlar detallı şəkildə öyrədilir.",
      ],
    },
    {
      title: "Veb Tətbiqlərin Yayımlanması",
      content: [
        "Bu modulda veb tətbiqlərin Microsoft Azure, Amazon Veb Servis, Digital Ocean kimi bulud infrastrukturları üzərindən necə yayımlanması, Docker Container texnologiyasından istifadə edərək proqram təminatlarının konteynerlər halında qurulması və daşınması izah olunur.",
      ],
    },
  ];
  return (
    <>
      <section id="third">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div class="title">
                <h2 class="upper">tədris</h2>
                <h2 class="bottom">proqramı</h2>
              </div>
              <div class="image">
                <span> </span>
              </div>
              <div class="text">
                <p>
                  Təhsil proqramının məqsədi informasiya sektorunda ehtiyac
                  duyulan peşəkar yetişdirməkdir. Code Academy praktika üzərində
                  qurulan təhsil modeli ilə həm ən yeni texnologiyaları öyrədir,
                  həm də tələbələri Veb Proqramlaşdırma üzrə beynəlxalq “MCSA:
                  Web Applications” və “MCSD: Web Applications”
                  sertifikatlaşdırma imtahanlarına hazırlaşdırır. Bu da öz
                  növbəsində tələbələrə beynəlxalq səviyyəli peşəkar mütəxəssis
                  adı qazandırır.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
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
        </div>
      </section>
    </>
  );
}

export default Third;
