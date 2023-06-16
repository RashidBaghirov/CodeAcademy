import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_First.scss"

function First(){
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
        <section id="first">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image">
                        <img src={graduantDetail.image} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="title-text">
                        <div className="title">
                            <h1 className="upper">
                            {graduantDetail.name}
                            </h1>
                            <h1 className="bottom">
                            {graduantDetail.surName}
                            </h1>
                            <p>{graduantDetail.company}
                                ,
                                {graduantDetail.position}</p>
                        </div>
                        <div className="text">
                            <p>{graduantDetail.sentence}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}


export default First;