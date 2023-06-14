import React from "react";
import "./_Second.scss";

function Second() {
  return (
    <section id="second">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="images">
                  <img src="/images/1.jpeg" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="images">
                  <img src="/images/3.jpeg" />
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="images">
              <img src="/images/2.jpeg" />
            </div>

          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="images">
                  <img src="/images/6.jpeg" />
                <div className="bg"></div>
                </div>

              </div>
              <div className="col-lg-12">
                <div className="images">
                  <img src="/images/5.jpeg" />
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="images">
              <img src="/images/4.jpeg" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Second;