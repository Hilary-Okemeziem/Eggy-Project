import React from "react";
import { Link } from "react-router-dom";
import "../Css/VerifyEmail.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const VerifyEmail = () => {
  return (
    <div className="bg-image pt-5">
      <div className="d-flex align-items-center justify-content-center w-100 h-100">
        <div className="bg-white verify-box position-relative">
          <Link to="/welcome" className="text-dark">
            <AiOutlineArrowLeft className="back-icon" />
          </Link>
          <div className="box-container">
            <div>
              <h5 className="welcome-text">Verify Your Email</h5>
            </div>
            <div className="text-center pb-2">
              <small>
              Enter the code sent to <b>salihuahmedrufai@gmail.com</b> to verify your
                email address
              </small>
            </div>

            <form className="mt-4">
              <input
                type="tel"
                name="code"
                placeholder="456723"
                className="input-tag my-1"
              />
            </form>
            <div className="text-end mb-2">
              <small>
                Didn't get the code?{" "}
                <Link to="/" className="text-decoration-none">
                  Resend code
                </Link>
              </small>
            </div>

            <button className="my-2 verify-btn">Verify</button>
          </div>

          <div className="d-flex align-items-center justify-content-between mt-2">
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

export default VerifyEmail;
