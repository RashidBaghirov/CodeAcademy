import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_Second.scss";
import { Link } from "react-router-dom";

function Second() {
  const { id } = useParams();
  const [teacherDetail, setteacherDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://localhost:7140/teacher/${id}`)
      .then((response) => {
          setteacherDetail(response.data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, [id]);

  if (!teacherDetail) {
    return <div>Loading...</div>;
  }
  return (
    <section id="second">
      <div className="container">
        <div className="row">
          <div className="titleCart">
            <h1>{teacherDetail.educationMode.name} Tədris Proqramları</h1>
          </div>

    
          
          {teacherDetail && teacherDetail.educationMode.professions.map((data) => (
            <div className="cart col-8" key={data.id}>
                <div className="name">
                  {/* <span>{modeDetail.category.name}</span> */}
                </div>
                <div className="tc_name">
                  <h2>{data.name}​</h2>
                </div>
                <div className="text">
                  <p>{teacherDetail.educationMode.others.substring(0, 200) + "..."}</p>
                </div>
                <div className="button">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/professiondetail/${data.id}`}
                  >
                    Ətraflı
                  </Link>
                </div>
                <div className="day">
                  <span>3 Gün| OnSite | InClass</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Second
