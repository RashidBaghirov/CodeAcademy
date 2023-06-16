import React, { useEffect, useRef, useState } from 'react';
import "./_AllPartnyor.scss";

function AllPartnyor() {
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
    <section id="allPart" className="p-5">
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="titles">
              <div className="first">
                <h2>akademik</h2>
              </div>
              <div className="second">
                <h2>
                  <pre> partnyorlarımız</pre>
                </h2>
              </div>
            </div>
            <div className="border_edu">
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container partnyor_ifo ">
        {partnyorData.map((data)=>(
              <div className="row mt-5 d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="image">
                  <img
                    src={data.image}
                    alt={data.name}
                  />
                </div>
                <div className="partnyor_ifo__text">
                  <h2 className="elementor-post__title">{data.name}</h2>
                  <div className="partnyor_ifo__excerpt">
                    <p>
                 {data.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
        ))}

      </div>
    </section>
  );
}

export default AllPartnyor;
