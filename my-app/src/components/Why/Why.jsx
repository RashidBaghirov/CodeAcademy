import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

function Why() {
  const [eduData, setModeData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7140/edu")
      .then((response) => response.json())
      .then((data) => {
        setModeData(data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  return (
    <section id="why">
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="left ">
                <div className="titles">
                  <div className="first">
                    <h2>niyə</h2>
                  </div>
                  <div className="second">
                    <h2>Code academy</h2>
                  </div>
                </div>
                <div className="border_edu">
                  <div className="line"></div>
                </div>
                <div className="text">
                  <p>
                    Biz dərsləri Zəmanətli Təhsil Sistemi ilə Beynəlxalq
                    Sertifikasiya imtahanlarının kurrikulumu əsasında keçirik.
                    Talant Mərkəzi, Mentor Sistemi kimi özəlliklər və müasir
                    tədris metodları ilə onlara praktiki məşğələlər təklif
                    edirik.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {eduData.map((data) => (
              <div className="col-lg-6 mt-5" key={data.id}>
                <div className="projects d-flex">
                  <div className="project_image">
                    <img className="w-100" src={data.imageUrl} alt={data.name_left} />
                  </div>
                  <div className="base_projects_titles">
                    <div className="projects_titles">
                      <div className="projects_titles_h3">
                        <h3>{data.name_left} <span>{data.name_right}</span></h3>
                      </div>
                      <div className="texts">
                        <p>
                          {data.shortDesc.substring(0, 170)}...
                        </p>
                      </div>
                      <div className="href">
                      <Link className="text-dark" style={{textDecoration:"none"}} to={`/practice/${data.id}`}>Ətraflı</Link>
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

export default Why;
