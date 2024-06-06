import React from "react";
import "./Service.css";
import app from "./app.png";

export const Service = () => {
  return (
    <>
      <div className="service mt-5" >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 d-flex flex-column justify-content-center p-4 p-lg-0 left">
              <h4>SERVICE</h4>
              <h6 className="my-4">
                What We Can <br /> Do For You?
              </h6>
              <p>
                We're a comprehensive software company offering UI/UX design,
                app development, web development, business strategy, and more to
                help your business thrive.
              </p>
              <div className="btn mt-lg-5 d-flex justify-content-end">
                <button className="contact-us">
                  <a href="tel:+91 80155 31830">CONTACT US </a>
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-7 right d-flex flex-column justify-content-center align-items-center  p-5">
              <div className="row">
                <div className="col-lg-6 p-4 p-lg-4">
                  <div className="app-dev p-4">
                    <div className="lg">
                      <img src={app} alt="" />
                    </div>
                    <h5 className="my-lg-3">App Development</h5>
                    <p>
                      “We offer comprehensive mobile app development services
                      covering various domains.”
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 p-4 p-lg-4">
                  <div className="web-dev p-5">
                    <div className="lg">
                      <img src={app} alt="" />
                    </div>
                    <h5 className="my-lg-4">Web Development</h5>
                    <p>
                      “Unlock the potential of your business with our mobile app
                      development services, covering domains like e-commerce,
                      healthcare, finance, and more.”
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 p-4 p-lg-4">
                  <div className="uiux p-4">
                    <div className="lg">
                      <img src={app} alt="" />
                    </div>
                    <h5 className="my-lg-4">UI UX DESIGNS</h5>
                    <p>
                      “Crafting seamless digital experiences with intuitive
                      design for websites and apps”
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 p-4   p-lg-4">
                  <div className="business p-4">
                    <div className="lg">
                      <img src={app} alt="" />
                    </div>
                    <h5 className="my-lg-4">Business Strategy</h5>
                    <p id="products">
                      “Crafting seamless digital experiences with intuitive
                      design for websites and apps”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
