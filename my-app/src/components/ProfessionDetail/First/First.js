import React from "react";
import "./_First.scss";

function First({ title, text }) {
  return (
    <section id="detail_first">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title">
              <h3>{title}</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text">
              <p>{text}</p> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
