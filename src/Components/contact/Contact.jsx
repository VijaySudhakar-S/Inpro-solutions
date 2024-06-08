import React from "react";
import img from "./contact.png";
import "./Contact.css";
import { Icon } from "@iconify/react";

export const Contact = () => {
  return (
    <>
      <div className="contact ">
        <div className="container">
          <div className="row d-flex flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-center align-items-center mt-5 mt-lg-0">
              <p className="p-4 p-lg-0 text-center">
                Have a Project? <br /> Create Your Website Now
              </p>
              <div className="btn mt-lg-5">
                <button className="m-auto">
                  <a href="tel:+91 80155 31830">MAKE AN APPOINMENT</a>
                </button>
              </div>
              <div className="con-us my-5">
                <div>
                  <h5>CONTACT US</h5>
                </div>
                <div className="my-5 d-flex justify-content-center align-items-center con-icon">
                  <div>
                    <a
                      href="https://www.linkedin.com/company/inpro-software-solutions/"
                      target="blank"
                    >
                      <Icon icon="devicon:linkedin" className="iconify" />
                    </a>
                  </div>
                  <div>
                    <a href="https://wa.me/+918015531830" target="blank">
                      <Icon icon="logos:whatsapp-icon" lassName="iconify" />
                    </a>
                  </div>
                  <div>
                    <a href="mailto:solution.inpro@gmail.com">
                      <Icon icon="ic:outline-mail" lassName="iconify" />
                    </a>
                  </div>
                  <div>
                    <a href="tel:+91 80155 31830">
                      <Icon icon="fluent:call-28-regular" lassName="iconify" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 img d-flex flex-column justify-content-center align-items-center mt-5 mt-lg-0">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
