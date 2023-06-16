import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Third() {
  const { id } = useParams();
  const [modeDetail, setModeDetail] = useState(null);
  const [filterValue, setFilterValue] = useState("Hamısı"); // Varsayılan filtre değeri

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

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  if (!modeDetail) {
    return <div>Loading...</div>;
  }

  const filteredProfessions = filterValue === "Hamısı"
    ? modeDetail.professions 
    : modeDetail.professions.filter(
        (data) => data.category.name === filterValue
      );

  return (
    <section id="education">
      <div className="container">
        <div className="row">
          <div className="title">
            <h1>Proqramlaşdırma Tədris Proqramları</h1>
          </div>
          <form action="">
            <input
              type="radio"
              id="Hamısı"
              name="type_edu"
              value="Hamısı"
              checked={filterValue === "Hamısı"}
              onChange={handleFilterChange}
            />
            <label htmlFor="Hamısı">Hamısı</label>

            <input
              type="radio"
              id="Korporativ"
              name="type_edu"
              value="Korporativ"
              checked={filterValue === "Korporativ"}
              onChange={handleFilterChange}
            />
            <label htmlFor="Korporativ">Korporativ</label>

            <input
              type="radio"
              id="ferdi"
              name="type_edu"
              value="Fərdi"
              checked={filterValue === "Fərdi"}
              onChange={handleFilterChange}
            />
            <label htmlFor="ferdi">Fərdi</label>
          </form>

          {filteredProfessions.map((data) => (
            <div className="col-lg-12" key={data.id}>
              <div className="cart">
                <div className="name">
                  <span>{data.category.name}</span>
                </div>
                <div className="title">
                  <h2>{data.name}​</h2>
                </div>
                <div className="text">
                  <p>{modeDetail.others.substring(0, 200) + "..."}</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Third;
