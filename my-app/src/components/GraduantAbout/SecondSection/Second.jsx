import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './_Second.scss';
import Left from "./Left";

function Second(){
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
        <section id="second">
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2>
                        Kiçik müsahibə və ya həyat hekayəs
                    </h2>
                </div>
                <Left 
                image="https://code.edu.az/wp-content/uploads/elementor/thumbs/sep-line-pay4h4cd32a9vtdz9i6ps4iyobet29ugektausv76m.png"
               answer={graduantDetail.answer1}
                question="Tədrisə qədər peşəniz"
                />
                     <Left 
                image="https://code.edu.az/wp-content/uploads/elementor/thumbs/sep-line-pay4h4cd32a9vtdz9i6ps4iyobet29ugektausv76m.png"
                answer={graduantDetail.answer2}
               question=" Code Academy-ni seçməkdə qərarınıza təsir edən amillər hansılar olub?"
                />
                           <Left 
                image="https://code.edu.az/wp-content/uploads/elementor/thumbs/sep-line-pay4h4cd32a9vtdz9i6ps4iyobet29ugektausv76m.png"
                answer={graduantDetail.answer3}
              question=" Məzun olduqdan sonra yeni iş imkanları və karyera fürsətləri haqqında nə deyə bilərsiniz?"
                />
                     <Left 
                image="https://code.edu.az/wp-content/uploads/elementor/thumbs/sep-line-pay4h4cd32a9vtdz9i6ps4iyobet29ugektausv76m.png"
                answer={graduantDetail.answer4}
              question=" Code Academy-də yeni tələbə olanlara və ya gələcəkdə tələbə olmaq istəyənlərə hansı tövsiyələri edərdin?"
                />
            </div>
        </div>
    </section>
    )
}

export default Second;