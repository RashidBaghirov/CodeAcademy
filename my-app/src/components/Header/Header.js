import React from "react";
import "./_Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div className="address">
              <p>
                Nizami küçəsi 203B, AF Business House, 2-ci mərtəbə (+994 12)
                310 0113
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div >
              <div className="social-icons">
                <a className="m-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a className="m-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a className="m-3">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="m-3">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-6  d-flex justify-content-center align-items-center">
                <div className="searching">
                  <a className="m-3">
                    <i className="bi bi-search"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="request_button_wrapper">
                  <Link className="request" to="/request">
                    <span className="request_button">
                      <span className="request_button_text">Müraciət et</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
