import React from "react";

function First() {
  return (
    <section id="first">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="left ">
              <div className="titles">
                <div className="first">
                  <h2>bizim</h2>
                </div>
                <div className="second ms-5">
                  <h2>məzunlar</h2>
                </div>
              </div>
              <div className="border_edu">
                <div className="line"></div>
              </div>
              <div className="text">
                <p>
                  Code Academy yalnız tədris sahələri üzrə mütəxəssislər deyil
                  həm də sektorun tələblərinə uyğun kadrlar yetişdirir.
                </p>
                <p>
                  Peşəkar həyatında böyük dəyişikliklər etmək, yeni sahə üzrə
                  özünü sınamaq və ixtisaslaşmaq istəyənlər şəxslər bizi seçir.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
        <div className="images">
            <img src="/images/mezunlarimiz.jpeg" />
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
