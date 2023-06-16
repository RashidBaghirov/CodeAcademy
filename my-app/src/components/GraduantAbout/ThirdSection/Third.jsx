import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_Third.scss"

function Third(){
    const { id } = useParams();
    const [graduantDetail, setgraduantDetail] = useState(null);
  
    useEffect(() => {
      axios
        .get(`https://localhost:7140/graduant/${id}`)
        .then((response) => {
            setgraduantDetail(response.data);
        })
        .catch((error) => {
          console.error("API request error:", error);
        });
    }, [id]);
  
    if (!graduantDetail) {
      return <div>Loading...</div>;
    }
    return(
        <section id="third">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6">
                    <div className="images">
                       
                        <div className="oddImage">
                            <img src="https://code.edu.az/wp-content/uploads/2021/07/digital-memarliq-3d.jpeg" alt="" />
                        </div>
                        <div className="evenImages">
                            <div className="upper">
                                <img src="https://code.edu.az/wp-content/uploads/2021/07/digital-memarliq-3d-dersleri-1.jpg" alt="" />
                            </div>
                            <div className="bottom">
                                <img src="https://code.edu.az/wp-content/uploads/2021/07/digital-memarliq-3d-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="title-text">
                        <div className="title">
                            <h2 className="upper">
                            {graduantDetail.educationMode.name}
                            </h2>
                            <p className="bottom">
                                tədrisi
                            </p>
                        </div>
                        <div className="text_detail">
                            <p>
                            {graduantDetail.educationMode.others}
                            </p>
                        </div>
                        <div className="navDesighn">
                            <p>   {graduantDetail.educationMode.hastage} <span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    );
}

export default Third;