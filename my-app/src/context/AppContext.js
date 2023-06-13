import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [educationData, setEducationData] = useState([
    {
      id:1,
      educationName: "Korporativ",
      title: "Programming in HTML with Javascript and CSS3​",
      text: "ştirakçılar HTML5, Javascript və CSS3 texnologiyalarını baza səviyyədə öyrənəcək və proqramlaşdırma məntiqi, dəyişənlərin tərifi və istifadəsi, istifadəçi interfeysinin inkişafı, Javascript və CSS3 təlimi ilə HTML-də Proqramlaşdırma ilə istifadəçi daxiletmələrinin ələ keçirilməsi üzrə praktiki nümunələr verəcəklər. Müvafiq olaraq, onlar qabaqcıl Veb və Windows Mağazası proqramlarını inkişaf etdirmək üçün alacaqları təkmilləşdirilmiş təlimdə mövzuları daha asan mənimsəyəcək və effektiv öyrənmə prosesini yaşayacaqlar. Təlim daxili laboratoriya ssenariləri ilə uğurlu və effektiv HTML5 tətbiqi yaratmaq məqsədilə tələb olunan addımları dəstəkləmək üçün nəzərdə tutulmuşdur.",
      day: "3 gün",
  
    },
    {
      id:2,
      educationName:"Korporativ",
      title:"Application Development with React Native​",
      text:"React Native Facebook tərəfindən hazırlanmış və dəstəklənmişdir; iOS, Android, Windows (UWP) əməliyyat sistemlərində və veb-platformasında proqramlar hazırlamaq üçün istifadə olunur. Bu, yerli çıxışı, yəni tətbiqin işlənib hazırlandığı mobil cihazların əməliyyat sisteminə xas olan çıxışı yarada bilən açıq mənbəli mobil proqram inkişaf kitabxanasıdır. Mobil əməliyyat sistemləri üçün JavaScript dili ilə inkişaf etməyə imkan verir.", 
        day:"3 gün",

    },
    {
      id:3,
      educationName: "Korporativ",
      title: "Application Development with React Native",
      text: "React Native Facebook tərəfindən hazırlanmış və dəstəklənmişdir; iOS, Android, Windows (UWP) əməliyyat sistemlərində və veb-platformasında proqramlar hazırlamaq üçün istifadə olunur. Bu, yerli çıxışı, yəni tətbiqin işlənib hazırlandığı mobil cihazların əməliyyat sisteminə xas olan çıxışı yarada bilən açıq mənbəli mobil proqram inkişaf kitabxanasıdır. Mobil əməliyyat sistemləri üçün JavaScript dili ilə inkişaf etməyə imkan verir.",
      day: "3 gün",
  
    },
    {
      id:4,
      educationName: "Korporativ",
      title: "Application Development with .NET Core",
      text: "ASP.NET Core uzun illər Microsoft tərəfindən paylanmış ASP.NET-in açıq mənbəli versiyasıdır. ASP.NET Core müasir, bulud əsaslı, internetə qoşulmuş proqramların qurulması üçün platformadan müstəqil, yüksək performanslı, açıq mənbəli proqram inkişaf infrastrukturu təqdim edir. Cross-Platform, yəni platformadan müstəqil veb proqramlar .NET Core ilə hazırlana və Windows, macOS, Linux əməliyyat sistemlərində işləyə bilər. Açıq mənbə olduğundan, ASP.NET Core-un inkişafı icmalar üçün açıqdır.",
      day: "3 gün",

    },
    {
      id:5,
      educationName: "Fərdi",
      title: "Full Stack Proqramlaşdırma​",
      text: "Code Academy-də keçirilən Proqramlaşdırma üzrə tədris proqramı sektorun ehtiyaclarını nəzərə alaraq hazırlanmışdır. Təhsilin 85%-i praktiki iş üzərində qurulmuşdur. Məqsəd sadəcə Proqramlaşdırmanın incəliklərini öyrətmək deyil, eyni zamanda müəssisələrin veb proqramlaşdırmaya olan ehtiyaclarını professional şəkildə qarşılayacaq mütəxəssislər yetişdirməkdir.",
      day: "3 gün",

    }
  ]);

  const contextValue = {
    educationData,
    setEducationData,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

