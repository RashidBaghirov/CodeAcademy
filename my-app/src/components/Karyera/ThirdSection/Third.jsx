import React from "react";
import "./_Third.scss";
import Comp from "./Comp";

function Third() {
  return (
    <section id="third">
      <div className="container">
        <div className="row">
            <div className="col-lg-12 base_title">
                <div className="text-center">
                    <h4>
                    biz nə edirik?
                    </h4>
                </div>
            </div>
          <div className="col-lg-6 mb-5">
            <Comp
              imageSrc="/images/is-axtaranlar.png"
              title="İş axtaranlar ilə"
              description="Code Academy-yə işçi ehtiyacı üçün müraciət edən şirkətlərə və şəxslərə tələbələrimiz haqda məlumat verərək, onları sahib olduqları keyfiyyətlərə uyğun iş müraciətlərinə yönəldirik."
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Comp
              imageSrc="/images/ishle-teminat.png"
              title="İş axtarışında dəstək"
              description="Karyera və Talant mərkəzinin əsas xüsusiyyətlərindən biri tələbələrə, məzunlara iş axtarışında dəstək olmaqdır. Mərkəz tələbələrimizi mövcud iş təklifləri barədə məlumatlandırır və onlara uyğun olan işlərə yönləndirir."
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Comp
              imageSrc="/images/intervyu.png"
              title="Müsahibəyə hazırlıq"
              description="Hər bir uğurun, görülən işin texniki tərəfi olduğu kimi, onun qarşıdakılara çatdırılma, təqdim olunma hissəsi var. Karyera və Talant mərkəzi iş müsahibəsinə dəvət alan tələbələrimizə müsahibələrdə özünə inamla iştirak edib, özünü düzgün şəkildə təqdim edərək, uğur qazanmaları üçün yaxından dəstək göstərir. Bədən dilini, fikrini ifadə etmə bacarığı, insanları yeni ideya və fikrə inandırma qabiliyyəti izah edilir."
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Comp
              imageSrc="/images/cv-hazirlanmasi.png"
              title="Təqdimat bacarıqlarının aşılanması"
              description="Məqsəd tələbələrin tədris müddətində ancaq texniki biliklərini deyil, həm də ünsiyyət, təqdim etmə, karyera inkişafı üçün düzgün hədəf təyin etmə qabiliyyətlərini inkişaf etdirməkdir. Tədris müddətində Karyera və Talant mərkəzi tədrisdən sonrakı iş həyatında tələbələrə lazım olacaq texniki biliklərin və davranış, ünsiyyət qaydalarının formalaşması üçün hazırlıq təlimləri keçirir."
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Comp
              imageSrc="/images/teqdimat.png"
              title="Təqdimat bacarığı"
              description="Tələbələr effektiv təqdimatın hazırlanması, təqdim edilməsi, səlis nitq bacarıqlarına yiyələnmənin nəzəri əsaslarını öyrənir. Beləcə, tələbələrimiz texniki və ixtisas biliklərindən əlavə təqdimat bacarıqlarına da yiyələnərək peşəkar kadr olaraq formalaşırlar."
            />
          </div>
          <div className="col-lg-6 mb-5">
            <Comp
              imageSrc="/images/cv-hazirlanmasi.png"
              title="CV hazırlanması"
              description="Karyera və Talant mərkəzində tələbələrimizin şəxsi inkişafı və gələcək iş həyatına hazırlığı kimi mühüm mövzularda təlimlər keçirilir. Uğurlu nümunələrin köməyi ilə yaxşı CV hazırlamağın yolları və müsahibəyə psixoloji, praktiki və görünüş (geyim) baxımından hazırlıqlardan bəhs olunur."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Third;
