import React from "react";
import { Link } from "react-router-dom";
import successimg from "../assets/successimg.png";
import '../Css/RegSuccess.css'

const RegSuccessPage = () => {
  return (
    <div className="bg-image">
      <div className="d-flex align-items-center justify-content-center w-100 h-100">
        <div className="bg-white success-box">
          <div className="success-box-container">
            <div>
              <h5 className="welcome-text">Congratulations</h5>
            </div>
            <div className="text-center pb-2">
              <small>
                Your account has been created successfully
              </small>
            </div>

            <div>
              <img src={successimg} alt="" />
            </div>

            <button className="my-2 login-btn">Goto Log In</button>
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

export default RegSuccessPage;
