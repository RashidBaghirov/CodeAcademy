
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./_Login.scss";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
        "https://localhost:7140/login",
        formData,
        config
      );
const token = response.data;
localStorage.setItem("token", JSON.stringify(token));
console.log(token);
      toast.success("Successfully logged in.");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.error(error);
        toast.error("Login failed. Please try again.");
    }
  };

  return (
    <section id="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required autoComplete="off"
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required autoComplete="off"
            />
            <label>Password</label>
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

export default Login;
