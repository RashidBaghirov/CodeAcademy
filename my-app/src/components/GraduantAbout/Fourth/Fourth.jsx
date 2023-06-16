import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_Fourth.scss";
import Other from "./Other";

function Fourth(){
    const { id } = useParams();
    const [graduantDetail, setgraduantDetail] = useState(null);
  
    useEffect(() => {
      axios
        .get(`https://localhost:7140/graduantrelated/${id}`)
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
        <section id="fourth">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h2>digər hekayələr</h2>
                    </div>
                    <ul>
                        {graduantDetail.map((item)=>(
                                <Other
                                image={item.image}
                                name={item.name}
                                surname={item.surName}
                                speciality={item.position}
                                id={item.id}
                            />
                        ))}
                    
                    </ul>
                </div>
            </div>
        </section>
  
    );
}

export default Fourth;