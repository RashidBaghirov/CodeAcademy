import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_Fourth.scss";
import Teacher from "./Teacher";

function Fourth() {
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
              {professionDetail &&  professionDetail.educationMode.teachers.map((item) => (
                  <Teacher image={item.image} fullname={`${item.name} ${item.surName}`} />
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
