import React, { useEffect, useState } from "react";
import "./_Second.scss";
import TypeOfEducation from "./TypeofEducation";

function Second() {
  const [ferdiData, setFerdiData] = useState(null);
  const [korporatifData, setKorporatifData] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7140/cate")
      .then((response) => response.json())
      .then((data) => {
        const ferdiProfession = data.find(
          (category) => category.name === "Fərdi"
        );
        const korporatifProfession = data.find(
          (category) => category.name === "Korporativ"
        );
        setFerdiData(ferdiProfession);
        setKorporatifData(korporatifProfession);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  if (!ferdiData || !korporatifData) {
    return <div>Not Found...</div>;
  }

  return (
    <section id="second">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-6">
            <TypeOfEducation
              title={ferdiData.name}
              text={ferdiData.professions[0].educationMode.detail_Answer}
            />
          </div>
          <div className="col-lg-6">
            <TypeOfEducation
              title={korporatifData.name}
              text={korporatifData.professions[0].educationMode.detail_Desc}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Second;
