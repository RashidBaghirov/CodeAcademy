import React, { useEffect, useState } from "react";

import "./_Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  const [modeData, setModeData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7140/mode")
      .then((response) => response.json())
      .then((data) => {
        setModeData(data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="footer_ul">
              <h4>Akademiya</h4>
              <ul>
                <li>
                  <a>
                    <Link style={{ textDecoration: "none" }} to="/about">
                      Haqqımızda
                    </Link>
                  </a>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/akademi">
                    <a>Akademik Partnyorlar</a>
                  </Link>
                </li>
                <li>
                  <a>
                    <Link style={{ textDecoration: "none" }} to="/karyera">
                      Karyera və Talant Mərkəzi
                    </Link>
                  </a>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/education">
                    Təhsil Modeli
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/graduant">
                    Məzunlarımız
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="footer_ul">
              <h4>Tədris sahələri</h4>
              <ul>
                {modeData.map((item) => (
                  <li key={item.id}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/profession/${item.id}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid m-0 p-0">
        <div className="address_code">
          <p>
            Nizami küçəsi 203B, AF Business House, 2-ci mərtəbə | Tel{" "}
            <strong>+994 12 310 0113</strong> | Mobil/Whatsapp{" "}
            <strong>+994 50 444 2633</strong>
          </p>
        </div>
      </div>
      <div className="container-fluid m-0 p-0">
        <div className="row p-5">
          <div className="col-lg-4">
            <div className="footer_foot d-flex justify-content-end">
              <p>© 2022 Code Academy. Bütün hüquqlar qorunur</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer_foot d-flex justify-content-center">
              <Link to="/">
                <img src="/images/logofoot.png" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer_foot">
              <div className="social-icons d-flex justify-content-start">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
