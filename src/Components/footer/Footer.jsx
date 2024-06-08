import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <>
      <div className="footer container-fluid">
        <div className="row mt-xl-3">
          <div className="col-lg-3 mt-5 mt-xl-0">
            <div>
              <h6>Get Direction</h6>
            </div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1335985511164!2d77.0245960748099!3d11.1034194890659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f83350b6be39%3A0xd5e7ea7227568ae2!2sSNS%20College%20of%20Engineering%20(Autonomous)!5e0!3m2!1sen!2sin!4v1717752662809!5m2!1sen!2sin"></iframe>
            </div>
          </div>
          <div className="col-lg-3 mt-5 mt-xl-0  quicklinks">
            <h6 className="mb-2">Quick Links</h6>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#products">Contact</a>
          </div>
          <div className="col-lg-3 mt-5 mt-xl-0 quicklinks">
            <a href="">Terms and Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="col-lg-3 mt-5 mt-xl-0 d-flex align-items-lg-start">
            <p>
              <span>
                <Icon icon="clarity:map-marker-line" />
              </span>
              Coimbatore, Tamil Nadu
            </p>
            <p>
              <span>
                <Icon icon="ic:outline-email" />
              </span>
              solutions.inpro@gmail.com
            </p>
          </div>
        </div>
        <div className="row m-auto pt-5">Inpro © 2024</div>
      </div>
    </>
  );
};
