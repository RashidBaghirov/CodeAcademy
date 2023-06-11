import React, { useState } from "react";
import Accordion from "../../Accordion";
import './_ThirdSection.scss'


function ThirdSection() {
    const accordionData0 = [
        {
          title: "Code Academy nədir?",
          content: [
            "2015-ci ildə fəaliyyətə başlayan Code Academy yüksək texnologiyalar sahəsində təcrübəli mütəxəssislər hazırlayan tədris müəssisəsidir. Code Academy-nin məqsədi Azərbaycanda bu sahədə karyera qurmaq istəyənlərin potensialını dəyərləndirmək, fərdi və peşəkar inkişafı üçün onları lazımi məlumatlarla və praktiki vərdişlərlə təmin etməkdir.",
          ],
        },
        {
          title: "Akademiyanı bitirdikdə diplom və ya sertifikat verirsiniz?",
          content: [
            "Dərsləri başa çatdıqdan sonra hər bir tələbə növbəti bir ay ərzində əvvəlcədən təyin olunmuş mövzular əsasında yekun layihə hazırlamalıdır. Tələbə tədris boyunca öyrəndiklərini layihədə həm praktiki, həm də nəzəri cəhətdən göstərməli, öz bilik və bacarıqlarını tam şəkildə əks etdirməlidir. Bu layihə əsasında tələbənin araşdırma, təqdimat, analiz bacarıqları, texniki bilikləri dəyərləndirilir və müəllim tələbənin məzun olub-olmaması barəsində qərar verir. Sonda uğurlu nəticə əldə edən tələbələrimiz Code Academy məzunu adını qazanır və tədrisi başa vurduqlarını bildirən Code Academy-nın rəsmi diplomu verilir.",
          ],
        },
        {
          title: "Harada yerləşir?",
          content: [
            "Code Academy şəhərin mərkəzində, gediş-gəliş üçün ictimai nəqliyyat imkanlarının əlverişli olduğu bir məkanda, Nizami küçəsi 203B, AF Business House-un 2-ci mərtəbəsində yerləşir.",
          ],
        },
        {
          title: "Hansı tədris proqramları var?",
          content: [
            "Burada Qrafik və Veb Dizayn, Hərəkətli Qrafika və 2D animasiya, Digital Marketinq, Proqramlaşdırma, Sistem Administratorluğu, 3D Animasiya və Vizualizasiya kimi istiqamətlərdə peşəkar təhsil verilir.",
          ],
        },
      ];
      const accordionData1 = [
        {
          title: "Dərslər hansı müddətdə keçirilir?",
          content: [
            "Tədris proqramının müddəti tələbənin seçəcəyi seans seçiminə əsasən müəyyənləşir. Dərslər 4-6-8 ay müddətinə keçirilir.",
          ],
        },
        {
          title: "Rus dilində dərslər var?",
          content: [
            "Akademiyada dərslər Azərbaycan dilində keçirilir.",
          ],
        },
        {
          title: "Qrupda neçə nəfər olur?",
          content: [
            "12-18 nəfər",
          ],
        },
        {
          title: "Hansı tədris proqramları var?",
          content: [
            "Burada Qrafik və Veb Dizayn, Hərəkətli Qrafika və 2D animasiya, Digital Marketinq, Proqramlaşdırma, Sistem Administratorluğu, 3D Animasiya və Vizualizasiya kimi istiqamətlərdə peşəkar təhsil verilir.",
          ],
        },
      ];
      const accordionData2 = [
        {
          title: "Qəbul üçün hansı sənədlər lazımdır?",
          content: [
            "Tədris proqramlarına qeydiyyat üçün yalnız şəxsiyyət vəsiqəsi tələb olunur.",
          ],
        },
        {
          title: "Qeydiyyat neçə yaşdan aparılır?",
          content: [
            "Akademiyamızda qeydiyyat 15 yaşdan etibarən aparılır.",
          ],
        },
        {
          title: "İngilis dili vacibdir?",
          content: [
            "Proqramlaşdırma, Digital Marketinq və Sistem Administratorluğu tədrisi üçün ingilis dili biliyi vacibdir. Akademiya daxilində yalnız qeydiyyatdan keçən tələbələrimiz üçün yaradılan ingilis dili tədrisi ilə baza bilik çatışmazlığı təhsilin ilk aylarında aradan qaldırılır.",
          ],
        },
        {
          title: "Ali təhsil lazımdır?",
          content: [
            "Code Academy-də təhsil almaq üçün ali təhsil vacib deyil. Tədris proqramına qatılan tələbələrin gələcəkdə mütəxəssis olmaq üçün istəkli olmaları kifayətdir.",
          ],
        },
      ];
      const accordionData3 = [
        {
          title: "Tədris ödənişlidir?",
          content: [
            "Code Academy ödənişli xidmət göstərən bir tədris mərkəzidir. Tədris proqramının qiyməti tələbənin seçəcəyi ödəmə üsuluna, ödəmə şəklinə, seans seçiminə əsasən müəyyənləşdiyi üçün bu məlumatı proqram məsləhətçilərimiz görüş zamanı təqdim edir. Proqram məsləhətçilərimiz həftənin 6 günü xidmət göstərir.",
          ],
        },
        {
          title: "Zəmanət verilir?",
          content: [
            "Code Academy-nin Zəmanətli Təhsil Modeli ilə hər bir tələbəyə təhsilini təkrarlama imkanı verilir. 90% dərslərdə iştirak etməsinə baxmayaraq, tədrisi yetərincə mənimsəmədiyini düşünən məzunların təkrar təhsil alma hüququ var. Yalnız Code Academy-də tətbiq olunan bu sistem özünə tam inanan və sektorun tələblərinə hazır peşəkarlar yetişdirir.",
          ],
        },
        {
          title: "Niyə qiymət görüş zamanı deyilir?",
          content: [
            "Qiymət cədvəli ilə tanış olmaq üçün akademiyaya yaxınlaşaraq proqram məsləhətçiləri ilə görüşə bilərsiniz. Görüş zamanı siz akademiyada dərslərin keçirilmə şəraiti, müəllimlər, təhsil modeli, kurrikulum, akademiyanın maddi texniki bazası və ümumi atmosferi ilə tanış ola bilərsiniz. Yalnız bundan sonra namizəd bizimlə davam etmək istəyərsə qiyməti elan edirik və ona uyğun müvafiq ödəniş planını seçərək qeydiyyatdan keçir.",
          ],
        },
        {
          title: "Hansı ödəmə formaları mövcuddur, birbaşa ödəniş etməliyəm?",
          content: [
            "Ödənişi hissəli və ya birbaşa şəkildə edə bilərsiniz. Hissəli ödəniş 6-10 aylıq ödəmə şəklindədir. Qiymət seçdiyiniz ödəniş formasına görə müəyyənləşir.",
          ],
        },
      ];
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  
    return (
      <section id="third">
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="faq_title text-center">
                <h3>FAQ</h3>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center" >
              <div className="accordion_title text-start">
                <p onClick={() => handleTabClick(0)}>Akademiya</p>
                <p onClick={() => handleTabClick(1)}>Tədris proqramları</p>
                <p onClick={() => handleTabClick(2)}>Qəbul şərtləri</p>
                <p onClick={() => handleTabClick(3)}>Qiymət və ödəniş</p>
              </div>
            </div>
            <div className="col-lg-6">
              {activeTab === 0 && (
                     <div className="accordion" id="accordionExample">
                     {accordionData0.map((item, index) => (
                       <Accordion
                         key={index}
                         title={item.title}
                         content={item.content}
                         index={index}
                       />
                     ))}
                   </div>
              )}
              {activeTab === 1 && (
               <div className="accordion" id="accordionExample">
               {accordionData1.map((item, index) => (
                 <Accordion
                   key={index}
                   title={item.title}
                   content={item.content}
                   index={index}
                 />
               ))}
             </div>
              )}
              {activeTab === 2 && (
                <div className="accordion" id="accordionExample">
                {accordionData2.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                    index={index}
                  />
                ))}
              </div>
              )}
              {activeTab === 3 && (
         <div className="accordion" id="accordionExample">
         {accordionData3.map((item, index) => (
           <Accordion
             key={index}
             title={item.title}
             content={item.content}
             index={index}
           />
         ))}
       </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ThirdSection;