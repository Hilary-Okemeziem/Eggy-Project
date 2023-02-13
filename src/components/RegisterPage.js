import React, { useState } from "react";
import "../Css/Register.css";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import MultiStepForm from "./MultiStepForm";

const RegisterPage = () => {
  const [passwordEye, setPasswordEye] = useState(false);
  const [index, setIndex] = useState(1);

  const handlePasswordEye = () => {
    setPasswordEye(!passwordEye);
  };

  const prevBtn = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextBtn = () => {
    if (index < 3) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div className="bg-image pt-5">
      <div className="d-flex align-items-center justify-content-center w-100 h-100">
        <div className="bg-white reg-box position-relative">
          <Link to="/welcome" className="text-dark">
            <AiOutlineArrowLeft className="back-icon" />
          </Link>
          <div className="box-container">
            <div>
              <h5 className="welcome-text">Create an Account</h5>
            </div>
            <p className="pb-3 px-4 text-center fs-6">
              Fill in your details below to create an account with us
            </p>

            <div className="px-5">
              {/* <div className="pg-1">1</div>
              <div className="pg-2">2</div>
              <div className="pg-2">3</div> */}
              <MultiStepForm step={index} />
            </div>

            <form className="mt-4">
              <div className="my-2 w-100 position-relative">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  className="input-tag my-1"
                />
                <FaRegUser className="name-icon" />
              </div>

              <div className="my-2 w-100 position-relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className="input-tag my-1"
                />
                <AiOutlineMail className="email-icon" />
              </div>

              <div className="my-2 w-100 position-relative">
                <input
                  type={passwordEye === false ? "password" : "text"}
                  placeholder="Password"
                  name="password"
                  className="input-tag my-1"
                />
                <div className="cursor-pointer password-icon">
                  {passwordEye === false ? (
                    <AiFillEyeInvisible
                      onClick={handlePasswordEye}
                      className="text-gray-400 cursor-pointer"
                    />
                  ) : (
                    <AiFillEye
                      onClick={handlePasswordEye}
                      className="text-gray-400 cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </form>
            <button onClick={nextBtn} className="my-2 next-btn">
              Next
            </button>

            <div className="text-center mt-1">
              <small>
                Already have an account?{" "}
                <Link to="/" className="text-decoration-none">
                  Sign In
                </Link>
              </small>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div>
              <Link to="/" className="text-dark text-decoration-none fs-6">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link to="/" className="text-dark text-decoration-none fs-6">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
