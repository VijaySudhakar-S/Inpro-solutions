import React from "react";
import img from "./about.png";
import "./About.css";

export const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <div className="row row d-flex flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-5 img d-flex flex-column justify-content-center align-items-center mt-5 mt-lg-0">
              <img src={img} alt="" />
            </div>
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-center p-4 p-lg-0">
              <h4>ABOUT US</h4>
              <p>
                Welcome to Inpro Software & Hardware Solutions, where innovation
                meets expertise. <br /> <br />
                We're a dynamic software company dedicated to crafting top-notch
                digital solutions. With our seasoned developers, we specialize
                in building high-quality websites, mobile apps, and more. Let's
                bring your vision to life together.
              </p>
              <div
                className="btn mt-lg-5 d-flex justify-content-end"
                id="services"
              >
                <button>OUR PRODUCTS </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
