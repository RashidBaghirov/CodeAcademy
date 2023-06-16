import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_Eighth.scss";
import Cart_Cource from "./Cart_Cource";


function Eighth(){
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
    return(
        <section id="next">
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2 className="left">
                       {professionDetail.educationMode.name}-də növbəti

                    </h2>
                    <h2 className="right">
                        başlayacaq qruplar
                    </h2>
                </div>
          
                {professionDetail && professionDetail.educationMode.cources.map((item) => (
                  <Cart_Cource date={item.date} courcename={item.name} courseday={item.courceDay} />
                ))}

            </div>
        </div>
    </section>
    );
}

export default Eighth;