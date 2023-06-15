import React, { useEffect, useState } from "react";
import "./_Second.scss";
import TypeOfEducation from "./TypeofEducation";

function Second() {
  const [cateData, setCateData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7140/cate")
      .then((response) => response.json())
      .then((data) => {
        setCateData(data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  if (!cateData) {
    return <div>Not Found...</div>;
  }
  return (
    <section id="second">
      <div className="container">
        <div className="row gx-0">
            {cateData.map((data=>{
              return(
                <div className="col-lg-6">
                <TypeOfEducation
                  title={data.name}
                  text={data.desc}
                />
              </div>
              );
        }))}
        </div>
      </div>
    </section>
  );
}

export default Second;
