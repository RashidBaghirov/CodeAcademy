import React, { useRef, useState, useEffect } from "react";
import "./_Graduate.scss";

function Graduate() {
  const [graduantData, setgraduantData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7140/graduant")
      .then((response) => response.json())
      .then((data) => {
        setgraduantData(data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);
  console.log(graduantData);
  return (
    <section id="graduate">
      <div className="mt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="left ">
                <div className="titles">
                  <div className="first">
                    <h2>bizim</h2>
                  </div>
                  <div className="second">
                    <h2>məzunlarımız</h2>
                  </div>
                </div>
                <div className="border_edu">
                  <div className="line"></div>
                </div>
                <div className="text">
                  <p>
                    Qlobal standartlara uyğun tədris imkanları sayəsində
                    tələbələrimizi dünyanın istənilən yerində
                    professionallıqlarını sübut edə biləcək şəkildə
                    hazırlaşdırırıq.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row m-0 p-0">
            {graduantData.map((data) => (
            <div className="col-lg-2 mt-5">
            <div className="graduates">
              <div className="graduates_image">
                <img src={data.image} />
                <div className="abouts">
                <div className="grd_bg">
                <p>{data.name}</p>
                <p>{data.position}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Graduate;
