import React from "react";
import "./_Fourth.scss";
import Teacher from "./Teacher";

function Fourth() {
  const teachers = [
    {
      image:
        "https://code.edu.az/wp-content/uploads/2022/11/Huseyn-Hasanli.png",
      fullname: " Hüseyn Həsənli",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2022/11/Cavid-Asadullayev.png",
      fullname: " Cavid Əsədullayev",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2022/11/Cavid-Bashirov.png",
      fullname: " Cavid Bəşirov",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2022/03/Huseyn-Ashurlu-scaled.jpg",
      fullname: "Hüseyn Aşurlu",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2021/08/kamran-cebiyev.jpeg",
      fullname: " Kamran Cəbiyev",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2021/08/kamran-abdullayev.jpeg",
      fullname: "Kamran Abdullayev",
    },
    {
      image: "https://code.edu.az/wp-content/uploads/2021/08/yolcu-nesib.jpeg",
      fullname: " Yolçu Nəsib",
    },
    {
      image: "https://code.edu.az/wp-content/uploads/2021/08/orxan-bije.jpeg",
      fullname: "Orxan Bije",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2021/08/esqin-kazimov.jpeg",
      fullname: "Eşqin Kazımov",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2021/08/memmed-memmedli.jpg",
      fullname: "Məmməd Məmmədli",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2021/08/aqil-agakisiyev.jpg",
      fullname: "Aqil Atakişiyev",
    },
    {
      image: "https://code.edu.az/wp-content/uploads/2021/08/elcin-agayev.jpeg",
      fullname: "Elçin Ağayev",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2021/08/hemid-memmedov.jpeg",
      fullname: "Həmid Məmmədov",
    },
    {
      image:
        "https://code.edu.az/wp-content/uploads/2021/08/qezenfer-qezenferli.jpg",
      fullname: "Qəzənfər Qəzənfərli",
    },
  ];
  return (
    <>
      <section id="teacher_all">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="title">
                <h2 className="upper">bizim</h2>
                <h2 className="bottom">müəllimlər</h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {teachers.map((item) => (
                  <Teacher image={item.image} fullname={item.fullname} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fourth;
