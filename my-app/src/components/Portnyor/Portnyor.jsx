import React, { useEffect, useRef, useState } from 'react';
import "./_Portnyor.scss";

function Portnyor() {
  const [partnyorData, setpartnyorData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7140/partnyor')
      .then(response => response.json())
      .then(data => {
        setpartnyorData(data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }, []);
  return (
    <section id="portnyor">
      <div className="mt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="left ">
                <div className="titles">
                  <div className="first">
                    <h2>akademik</h2>
                  </div>
                  <div className="second">
                    <h2>partnyorlarımız</h2>
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
          <div className="row">
          {partnyorData.map((data)=>(
               <div className="col-lg-2 mt-5">
               <div className="portnyor">
                 <div className="portnyor_image">
                   <img src={data.image} />
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

export default Portnyor;
