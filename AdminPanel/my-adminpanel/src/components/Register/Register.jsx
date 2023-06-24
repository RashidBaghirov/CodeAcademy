import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./_Register.scss";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    checkbox: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const response = await axios.post(
        "https://localhost:7140/register",
        formData,
        config
      );
      console.log(response.data);
      toast.success("Successfully Registered. Please check your email.");

      setTimeout(() => {
        navigate("/home");
        window.open("https://mail.google.com/", "_blank");
      }, 4000);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        const { data } = error.response;
        const errorMessage = Object.values(data).flat().join(", ");
        toast.error(errorMessage);
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };
  return (
    <section id="register-page">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
            <label>Surname</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <label>Current Password</label>
          </div>

          <div class="user-box d-flex">
            <span style={{ color: "#8ab0df" }}>Accepted Registration </span>
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  checkbox: e.target.checked,
                }))
              }
              required
            />
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Register;
