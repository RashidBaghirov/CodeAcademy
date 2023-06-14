import React from "react";
import "./_FirstSection.scss";

function FirstSection() {
  return (
    <section id="request">
      <div className="container">
        <div className="row justify-content-center p-5">
          <div className="col-lg-6">
            <div className="titles text-center">
              <h4>Sizə zəng edək</h4>
              <p>
                Operator ilə danışaraq siz akademiya və tədris proqramları
                haqqında ilkin məlumatları əldə edə və digər suallarınızı
                ünvanlaya bilərsiniz.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image">
                  <img src="/images/req.jpeg" />
                </div>
              </div>
              <div className="col-lg-6">
                <form action="">
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="name"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ad"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="surname"
                        type="text"
                        name=""
                        id=""
                        placeholder="Soyad"
                      />
                    </div>

                    <div className="col-lg-4">
                      <select className="prefics" name="" id="">
                        <option value="">010</option>
                        <option value="">050</option>
                        <option value="">051</option>
                        <option value="">055</option>
                        <option value="">060</option>
                        <option value="">070</option>
                        <option value="">077</option>
                        <option value="">099</option>
                      </select>
                    </div>
                    <div className="col-lg-8">
                      <input
                        className="number"
                        type="number"
                        name=""
                        id=""
                        placeholder="XXX-XX-XX"
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="email"
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="company"
                        type="text"
                        name=""
                        id=""
                        placeholder="İşlədiyiniz şirkət"
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="vezife"
                        type="text"
                        name=""
                        id=""
                        placeholder="Vəzifə"
                      />
                    </div>

                    <div className="col-lg-12">
                      <select className="count" name="" id="">
                        <option value="">Şirkətinizdəki işçi sayı</option>
                        <option value="">1-10</option>
                        <option value="">11-50</option>
                        <option value="">51-100</option>
                        <option value="">101-250</option>
                        <option value="">250+</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="textArea"
                        name=""
                        id=""
                        cols="48"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit">Müraciət edin</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
