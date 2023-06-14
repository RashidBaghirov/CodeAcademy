import React from "react";
import "./_ContactsFirst.scss";

function ContactFirstSection() {
  return (
    <section id="first">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="left ">
              <div className="titles">
                <div className="first">
                  <h2>bizimlə</h2>
                </div>
                <div className="second ms-5">
                  <h2>əlaqə</h2>
                </div>
              </div>
              <div className="border_edu">
                <div className="line"></div>
              </div>
              <div className="text">
                <p>
                  Bizimlə maraqlandığın üçün təşəkkür edirik. Aşağıdakı
                  məlumatlar vasitəsilə bizimlə əlaqə saxlaya bilərsən.
                </p>
              </div>
              <div className="text">
                <h4>Ümumi məlumat üçün bizə müraciət et:</h4>
                <p className="address">
                  Nizami küç. 203B, 
                </p>
                <p className="address">AF Business House,</p>
                <p className="address">
                2-ci mərtəbə +99412 310
                  0113/ +99450 444 2633 info@code.edu.az
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d903.6295343152048!2d49.85360725102689!3d40.3770430217844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1686470398351!5m2!1sen!2saz"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFirstSection;
