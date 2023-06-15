import React,{useRef,useState,useEffect} from "react";

import "./_Second.scss";
import About from "./About";


function Second() {
  const [eduData, setEduData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7140/edu")
      .then((response) => response.json())
      .then((data) => {
        setEduData(data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  return (
    <section id="edu_second">
    <div className="container">
        <div className="row gy-5 gx-5">
          {eduData.map((item)=>{
              return(
                <div className="col-lg-6">
                <About
                imageSrc={item.imageUrl}
                titles={`${item.name_left} ${item.name_right}`}
                text= {item.shortDesc.substring(0, 170)}
                id={item.id}
                />
                </div>
              );
          })}
{/* 

            <div className="col-lg-6">
            <About
            imageSrc="https://code.edu.az/wp-content/uploads/2021/08/praktiki-tedris-metodu-300x300.jpg"
            titles=" Praktiki tədris metodu"
            text=" Hər hansı bir peşəni yaxşı bacarmaq üçün yalnız öyrənmək kifayət deyil, gərək öyrəndiklərinizi tətbiq edə bilmə bacarığına da yiyələnib təcrübə toplayasınız. Buna görə Code Academy-nin"
            others="Ətraflı "
            
            />
            </div>


            <div className="col-lg-6">
            <About
            imageSrc="https://code.edu.az/wp-content/uploads/2021/08/akademik-transkript-300x238.jpeg"
            titles="Akademik Transkript"
            text="Tapşırıqlar, mini layihələr müəllim tərəfindən yoxlanılması sizin bilik və bacarıqlarının hansı dərəcədə olduğunu və həm tədrs müddətində, həm də məzun olduqdan sonra hansı sahələri daha"
            others="Ətraflı "
            
            />
            </div>


            <div className="col-lg-6">
            <About
            imageSrc="https://code.edu.az/wp-content/uploads/2021/08/mentor-sistemi-300x300.jpeg"
            titles="Mentor Sistemi "
            text="Mentor Sistemi Code Academy-də tələbələrin təhsildə öyrəndiklərini təkrar etmələrini və gücləndirmələrini təmin edən xüsusi bir sistemdir."
            others="Ətraflı "
            
            />
            </div>

            <div className="col-lg-6">
            <About
            imageSrc="https://code.edu.az/wp-content/uploads/2021/08/beynelxalq-sertifikasiya-300x233.jpeg"
            titles="Beynəlxalq Sertifikasiya"
            text=" Microsoft Imagine Academy, Autodesk və Digital Marketing Institute-un Azərbaycandakı eksklüziv partnyoru olmaqla tələbələrimizi qlobal bazarda rəqabət apara biləcək peşəkarlar olaraq yetişdirmək üçün yola çıxmışıq."
            others="Ətraflı "
            
            />
            </div>

            <div className="col-lg-6">
            <About
            imageSrc="https://code.edu.az/wp-content/uploads/2021/08/zemanetli-tehsil-300x300.jpeg"
            titles="Zəmanətli təhsil sistemi "
            text="  Seçdiyiniz tədrisə tamamilə fərqli sahədən gələ və ya sıfırdan başlaya bilərsiniz. Bunun üçün isə zəmanət lazımdır. Belə ki, 90% dərslərdə iştirak etməyinizə baxmayaraq, hər hansı"
            others="Ətraflı "
            
            />
            </div> */}
        </div>
    </div>
</section>
  );
}

export default Second;
