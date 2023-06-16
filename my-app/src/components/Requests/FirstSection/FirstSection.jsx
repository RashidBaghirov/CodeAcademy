import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./_FirstSection.scss";

function FirstSection() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    company: "",
    position: "",
    employeeCount: "",
    additionalInfo: "",
    prefix: "010"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "prefix") {
      setFormData({ ...formData, prefix: value });
    } else if (name === "phoneNumber") {
      setFormData({ ...formData, phoneNumber: formData.prefix + "-" + value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://localhost:7140/create", formData);
      toast.success("Müraciətiniz uğurla göndərildi!", {
        onClose: () => {
          toast.info("Tezliklə sizinlə əlaqə saxlanılacaq.");
        }
      });
      
      setFormData({
        name: "",
        surname: "",
        phoneNumber: "",
        email: "",
        company: "",
        position: "",
        employeeCount: "",
        additionalInfo: ""
      });
    } catch (error) {
      console.error("request error:", error);
      toast.error("Xəta baş verdi!", {
        onClose: () => {
          toast.info("Birazdan cəht edin");
        }
      });
    }
  };

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
                  <img src="/images/req.jpeg" alt="Request" />
                </div>
              </div>
              <div className="col-lg-6">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="name"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ad"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="surname"
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="Soyad"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-4">
                      <select
                        className="prefix w-100"
                        name="prefix"
                        id="prefix"
                        value={formData.prefix}
                        onChange={handleChange}
                        required
                      >
                        <option value="010">010</option>
                        <option value="050">050</option>
                        <option value="051">051</option>
                        <option value="055">055</option>
                        <option value="060">060</option>
                        <option value="070">070</option>
                        <option value="077">077</option>
                        <option value="099">099</option>
                      </select>
                    </div>
                    <div className="col-lg-8">
                      <input
                        className="number"
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="XXX-XX-XX"
                        value={formData.phoneNumber.split("-")[1]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="company"
                        type="text"
                        name="company"
                        id="company"
                        placeholder="İşlədiyiniz şirkət"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="position w-100"
                        type="text"
                        name="position"
                        id="position"
                        placeholder="Vəzifə"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-6">
                      <select
                        className="employeeCount w-100"
                        name="employeeCount"
                        id="employeeCount"
                        value={formData.employeeCount}
                        onChange={handleChange}
                      >
                        <option value="">Şirkətinizdəki işçi sayı</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-100">51-100</option>
                        <option value="101-250">101-250</option>
                        <option value="250+">250+</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="textArea"
                        name="additionalInfo"
                        id="additionalInfo"
                        cols="48"
                        rows="4"
                        value={formData.additionalInfo}
                        onChange={handleChange}
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
      <ToastContainer />
    </section>
  );
}

export default FirstSection;
