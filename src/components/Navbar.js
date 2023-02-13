import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import '../Css/Navbar.css'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='nav position-fixed'>
      <div className="nav-links mx-auto px-5">
        <Link to='/'>
          <img
            src={logo}
            alt="/"
            width="50px"
            height="50px"
            className="cursor-pointer"
          />
        </Link>

        <div>
          <ul className="nav-link pt-4">
            <Link to="/" className="text-decoration-none">
              <li className="text-decoration-none text-dark">
                About Us
              </li>
            </Link>
          </ul>

          {/* Hamburger Icon */}
          <div onClick={handleNav}>
            <AiOutlineMenu size={25} color={"black"} className="hamburger-icon" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "mobile-menu" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " side-drawer-menu1"
              : "side-drawer-menu2"
          }
        >
          <div>
            <div className="mobile-drawer">
              <Link to="/">
                <img
                  src={logo}
                  alt="/"
                  width="50px"
                  height="50px"
                  className="cursor-pointer"
                  onClick={() => setNav(false)}
                />
              </Link>

              <div
                onClick={handleNav}
              >
                <AiOutlineClose size={25} color={"black"}/>
              </div>
            </div>

            <div className="my-3">
              <p className="py-3 text-capitalize ">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>

          <div className="py-2">
          <ul className="mobile-nav-link">
            <Link to="/" className="text-decoration-none">
              <li className="text-decoration-none text-dark">
                About Us
              </li>
            </Link>
          </ul>

            <div>
              <p className="text-uppercase text-dark pt-5">
                Let&apos;s Connect
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
