import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_Third.scss";
import Accordion from "../../Accordion";

function Third() {
  const { id } = useParams();
  const [professionDetail, setprofessionDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://localhost:7140/profession/${id}`)
      .then((response) => {
        setprofessionDetail(response.data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, [id]);

  if (!professionDetail) {
    return <div>Loading...</div>;
  }
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
                {professionDetail &&  professionDetail.accordions.map((item) => (
                  <Accordion
                    key={item.id}
                    title={item.title}
                    content={item.desc}
                    index={item.id}
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
