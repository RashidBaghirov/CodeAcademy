import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function First() {
  const { id } = useParams();
  const [eduDetail, setEduDetail] = useState(null);

  useEffect(() => {
    fetch(`https://localhost:7140/edu/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEduDetail(data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, [id]);

  if (!eduDetail) {
    return <div>Not Found...</div>;
  }

  return (
    <section id="first_practice">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="image">
              <img src={eduDetail.imageUrl} alt="Praktik" />
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="left ">
              <div className="titles">
                <div className="first">
                  <h2>{eduDetail.name_left}</h2>
                </div>
                <div className="second ms-5">
                  <h2>{eduDetail.name_right}</h2>
                </div>
              </div>
              <div className="border_edu">
                <div className="line"></div>
              </div>
              <div className="text">
                <p>{eduDetail.shortDesc}</p>
              </div>
              <div className="text">
                <p>{eduDetail.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
