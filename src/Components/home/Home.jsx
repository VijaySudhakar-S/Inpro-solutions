import React from "react";
import img from "./home.png";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-center align-items-center">
              <p className="p-4 p-lg-0">
                We're your digital architects-building stunning websites,
                dynamic mobile apps, and beyond for a standout online presence.
              </p>
              <a href="#services">
                <div className="btn mt-lg-5">
                  <button>Our Services</button>
                  <button>Know About Us</button>
                </div>
              </a>
            </div>
            <div
              className="col-12 col-lg-5 img d-flex flex-column justify-content-center align-items-center mt-5 mt-lg-0"
              id="about"
            >
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
