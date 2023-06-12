import React from "react";
import "./_SixthSection.scss";
import Company from "./company";
function SixthSection() {
  return (
    <section id="logos">
      <div className="container">
        <div className="row">
          <div className="titleLogos">
            <h2 className="upper">korporativ</h2>
            <h2 className="bottom">tərəfdaşlarımız</h2>
          </div>
          <Company image="https://code.edu.az/wp-content/uploads/2021/09/pashabank-logo-az.svg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/09/Azercell-logo.svg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/09/asan-xidmet_logo.png" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/10/qirmizi_xac_komitesi_logo-1.jpeg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/10/azercosmos.jpeg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/10/bakcell_logo.png" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/09/AccessBank-logo.svg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/09/havas-logo.png" />
          <Company image="https://code.edu.az/wp-content/uploads/2022/04/muganbank_logo.png" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/10/azal_logo_az.svg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/10/AzInTelecom-pozitiv-logo-u%CC%88fu%CC%88qi-SVG-RGB.svg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/09/kapitalbank.svg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/10/atesgah_sigorta_logo.svg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/09/yelobank_logo.svg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/09/pasha-sigorta-logo.jpeg" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/09/asan-innovasiyalar-logo.png" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/10/maxmedia_logo.png" />
          <Company image="https://code.edu.az/wp-content/uploads/2021/10/landauschool.jpeg"/>
        </div>
      </div>
    </section>
  );
}

export default SixthSection;
