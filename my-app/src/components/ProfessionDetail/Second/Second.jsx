import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_Second.scss";

function Second() {
  const { id } = useParams();
  const [professionDetail, setprofessionDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://localhost:7140/profession/${id}`)
      .then((response) => {
        setprofessionDetail(response.data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, [id]);

  if (!professionDetail) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section id="second">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title">
                <h2>kimlər üçündür?</h2>
              </div>
              <div className="text">
                <p>{professionDetail.educationMode.others}</p>
              </div>

              <div className="row">
          
                    {professionDetail.educationMode.modePhotos.map(
                          (photo) => (
                            <div className="col-lg-3">
                            <div className="images">
                            <img src={photo.image} alt={photo.id} key={photo.id} />
                            </div>
                          </div>
                          )
                        )}
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Second;
