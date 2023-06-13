import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [educationData, setEducationData] = useState([
    {
      id:1,
      educationName: "Korporativ",
      title: "SMM - Sosyal Medya İdare ve Hesap",
      text: "Rəqəmsal medianın əsas kanallarından biri olan sosial media həm də brendlər üçün ən vacib ünsiyyət və marketinq vasitələrindən biridir. Bu təlimdə iştirakçılar sosial media şəbəkələri ilə tanış olur, sosial medianın idarə edilməsinin bizneslər üçün necə olması lazım olduğunu, təhlil və hesabat proseslərinin necə həyata keçirilməsini öyrənirlər.",
      day: "3 gün",
      info: "Təlimdə rəqəmsal agentlikdə işə düzəlmək, beynəlxalq və yerli SMM məsləhətçiliyi ilə əlavə gəlir qazanmaq istəyənlər və sosial media mütəxəssisləri iştirak edə bilər.",
      certificate: "“Sosial Media İdarəetmə və Hesabat”",
    },
    {
      id:2,
      educationName:"Korporativ",
      title:"SEM - Search Engine Marketing​",
      text:"Search Engine Marketing (SEM), yəni Search Engine Marketing, axtarış sistemlərində orqanik sıralamaların kifayət etmədiyi hallarda axtarış sistemlərində planlaşdırılan reklamları əhatə edir. Təlimdə veb səhifələrin axtarış sistemlərində ödənişli yerləşdirmələr nəzərdə tutulur. Google rəqəmsal reklam məhsullarının istifadə edildiyi bu təlimdə iştirakçılar; Onlar Google axtarış şəbəkəsində kampaniya parametrləri, mətn reklamları və açar sözlər haqqında öyrənirlər. Onlar həmçinin kampaniya xərclərini planlaşdırır və axtarış motoru reklamları üçün strategiyalar hazırlayırlar.", 
        day:"3 gün",
      info: "Təlimdə rəqəmsal agentlikdə işə düzəlmək, beynəlxalq və yerli SMM məsləhətçiliyi ilə əlavə gəlir qazanmaq istəyənlər və sosial media mütəxəssisləri iştirak edə bilər.",
      certificate: "“Sosial Media Marketing”",
    },
    {
      id:3,
      educationName: "Korporativ",
      title: "SEO – Search Engine Optimization",
      text: "Search Engine Optimization (SEO), axtarış motorlarında veb-saytların sıralamasını müəyyən edən bütün tədbirlərdir. Bu təlimdə iştirak edənlər; saytda və saytdan kənar faktorların əsas başlığında veb-saytların optimallaşdırılması, axtarış sisteminin sıralama meyarları və cari alqoritmləri nəzərə alaraq müraciətlər edirlər. SEO alətlərindən istifadə edərək onların analitikasını və istifadəçi davranışını araşdırır və optimallaşdırmaları texniki cəhətdən gücləndirirlər. Bundan əlavə, saytdan kənar amillərdə saytın trafikinə təsir edən rəqəmsal fəaliyyətlər haqqında məlumat əldə edirlər.",
      day: "3 gün",
      info: "Təlimdə rəqəmsal agentlikdə işə düzəlmək, beynəlxalq və yerli SMM məsləhətçiliyi ilə əlavə gəlir qazanmaq istəyənlər və sosial media mütəxəssisləri iştirak edə bilər.",
      certificate: "“Search Engine Optimization”",
    },
    {
      id:4,
      educationName: "Korporativ",
      title: "Digital Marketing Professional – DMI Pro",
      text: "Digital Marketinq tədris proqramı Code Academy ilə İrlandiya mərkəzli Digital Marketing İnstitute-un eksklüziv partnyorluğu əsasında tədris edilir. Eksklüziv partnyorluq nəticəsində Code Academy-nin Digital Marketinq tədris proqramı beynəlxalq standarta uyğun olaraq hazırlanmışdır və bu proqramdan məzun olan tələbələr ödənişsiz şəkildə beynəlxalq “Certified Digital Marketing Professional” sertifikat imtahanına daxil olaraq bu sertifikatı əldə etmək imkanına sahib olurlar.",
      day: "3 gün",
      info: "Təlimdə rəqəmsal agentlikdə işə düzəlmək, beynəlxalq və yerli SMM məsləhətçiliyi ilə əlavə gəlir qazanmaq istəyənlər və sosial media mütəxəssisləri iştirak edə bilər.",
      certificate: "“Search Engine Optimization”",
    }
  ]);

  const contextValue = {
    educationData,
    setEducationData,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

