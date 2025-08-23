import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/mkmce-logo.png";
import loginLogo from "../../assets/mkmce-login.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      toast.success("Login successful");

      // Delay navigation thoda time dene ke liye
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error("Invalid username or password ");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${loginLogo})`,
      }}
    >
      {/* Heading Outside Box */}
      {/* Title outside box */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center relative">
        <span className="bg-yellow-400 px-6 py-2 rounded-xl shadow-md">
          MKMCE PORTAL LOGIN
        </span>
      </h2>

      {/* Login Box */}
      <div
        className="bg-white/10 backdrop-blur-3xl p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center"
        data-aos="zoom-in"
      >
        {/* Logo */}
        <img
          src={logo}
          alt="MKMCE Logo"
          className="w-20 h-20 mx-auto mb-4"
          data-aos="fade-down"
        />

        <h3 className="text-xl font-bold text-white mb-6">Login</h3>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm text-white">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-yellow-400" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-yellow-400">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition"
            data-aos="fade-up"
          >
            Login
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={1000} theme="colored" />
    </div>
  );
};

export default Login;
