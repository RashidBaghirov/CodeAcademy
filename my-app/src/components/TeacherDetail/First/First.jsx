import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./_First.scss"

function First(){
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
    return(
        <section id="first">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image">
                        <img src={teacherDetail.image} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="title-text">
                        <div className="title">
                            <h1 className="upper">
                               {teacherDetail.name}
                            </h1>
                            <h1 className="bottom">
                            {teacherDetail.surName}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="chat">
                    <div className="row gx-5">
                     <div className="leftside col-lg-6">
                         <div className="text">
                             <p>Tədrisə qədər peşəniz</p>
                         </div>
                         <div className="image">
                             <img src="https://code.edu.az/wp-content/uploads/elementor/thumbs/sep-line-pay4h4cd32a9vtdz9i6ps4iyobet29ugektausv76m.png" alt="" />
                         </div>
                     </div>
                     <div className="rightside col-lg-6">
                         <div className="text">
                             <p>
                             {teacherDetail.desc}
                             </p>
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