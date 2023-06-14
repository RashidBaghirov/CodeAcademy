import React from "react";
import "./_Eighth.scss";
import Cart_Cource from "./Cart_Cource";


function Eighth(){
    const newcourses=[
        {
            date:" 5 iyun",
            courcename:"Full Stack Proqramlaşdırma",
            courseday:" I-IV günlər Saat: 19:00-21:45 Tədris forması: Campus | Online Campus"
        },
        {
            date:" 3 iyul",
            courcename:"Full Stack Proqramlaşdırma",
            courseday:" I-IV günlər Saat: 9:00-12:45 Tədris forması: Campus | Online Campus"
        },
    ]
    return(
        <section id="next">
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2 className="left">
                        növbəti

                    </h2>
                    <h2 className="right">
                        başlayacaq qruplar
                    </h2>
                </div>
          
                {newcourses.map((item) => (
                  <Cart_Cource date={item.date} courcename={item.courcename} courseday={item.courseday} />
                ))}

            </div>
        </div>
    </section>
    );
}

export default Eighth;