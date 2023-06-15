import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_First.scss";

function First() {
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
    <section id="first_detail_sc">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="image">
                    <img src={professionDetail.educationMode.detailImage} alt="" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="title">
                    <h2 className="upper">
                        {professionDetail.name}
                    </h2>
                    <h2 className="bottom">
                    {professionDetail.educationMode.hastage}
                    </h2>
                </div>
            </div>
            <div className="col-lg-6">
              <div className="blueDiv">
                <div className="blue">
                    <div className="titleBlue">
                        <h4 >
                        {professionDetail.educationMode.detail_Questions}
                        </h4>
                    </div>
                    <div className="textFirst">
                        <p> {professionDetail.educationMode.detail_Answer}</p>
                    </div>
                    <div className="textSecond">
                    {professionDetail.educationMode.detail_Desc}
                    </div>
               </div>
              </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default First;
