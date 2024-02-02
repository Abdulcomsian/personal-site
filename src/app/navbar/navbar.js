"use client";
import leftArrow from "@/assets/images/arrow_right_outline_24.svg";
import Link from "next/link";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    var navbar = document.querySelector(".main-nav");
    var navbarOffset = navbar.offsetTop;

    if (window.pageYOffset > navbarOffset) {
      navbar.classList.add("sticky_nav");
    }

    window.onscroll = function () {
      // Get the navbar element
      var navbar = document.querySelector(".main-nav");

      // Get the offset position of the navbar
      var navbarOffset = navbar.offsetTop;

      if (window.pageYOffset > navbarOffset) {
        // Add a class to make the navbar sticky
        navbar.classList.add("sticky_nav");
      } else {
        // Remove the sticky class
        navbar.classList.remove("sticky_nav");
      }
    };
  }, []);

  return (
    <>
      <div className="container-fluid main-nav" style={{backgroundColor:"rgba(0, 102, 73, 1)"}}>
        <div className="container main_section">
          <div className="logo">dbqp</div>
          <div className="nav_section">
            <nav className="navbar navbar-expand-lg navbar-light ">
              {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link " href="/">
                    Home
                  </Link>
                  <Link className="nav-item nav-link " href="/About">
                    About
                  </Link>
                  <Link className="nav-item nav-link " href="#">
                    Portfolio
                  </Link>
                  <Link className="nav-item nav-link " href="#">
                    Career
                  </Link>
                  <Link className="nav-item nav-link " href="/services">
                    Services
                  </Link>
                  <Link className="nav-item nav-link" href="/casestudy">
                    Case Study
                  </Link>
                  <Link className="nav-item nav-link desktopHide" href="#">
                    Contact
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <button
            type="button"
            className="btn btn-lg contactBtn d-flex align-items-center mobileHide"
          >
            Contact{" "}
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
