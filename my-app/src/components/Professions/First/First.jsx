import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_First.scss";

function First() {
  const { id } = useParams();
  const [modeDetail, setModeDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://localhost:7140/mode/${id}`)
      .then((response) => {
        setModeDetail(response.data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, [id]);

  if (!modeDetail) {
    return <div>Loading...</div>;
  }


  return (
    <section id="first">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title">
              <h1>{modeDetail.name}</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-image">
              <div className="image">
                <img
                  src="https://code.edu.az/wp-content/uploads/2021/07/sep-line.png"
                  alt=""
                />
              </div>
              <div className="text">
                <p>{modeDetail.detail_Answer}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default First;
