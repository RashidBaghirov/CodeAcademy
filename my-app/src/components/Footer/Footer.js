import React from "react";
import "./_Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer_ul">
              <h4>
                Akademiya
              </h4>
              <ul>
                <li>
                   <a>
                   Haqqımızda
                   </a>
                </li>
                <li>
                   <a>
                   Akademik Partnyorlar
                   </a>
                </li>
                <li>
                   <a>
                   Aktiv Vakansiyallar
                   </a>
                </li>
                <li>
                   <a>
                   Karyera və Talant Mərkəzi
                   </a>
                </li>
                <li>
                   <a>
                  Təhsil Modeli
                   </a>
                </li>
                <li>
                   <a>
                 Məzunlarımız
                   </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;