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
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.77164169979!2d76.98773177504594!3d11.055740289110524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAzJzIwLjciTiA3NsKwNTknMjUuMSJF!5e0!3m2!1sen!2sin!4v1721662105712!5m2!1sen!2sin"></iframe>
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
          <div className="col-lg-3 mt-5 mt-xl-0 d-flex align-items-lg-start loc">
            <p>
              <span>
                <Icon icon="clarity:map-marker-line" />
              </span>
              <span>Budder street, Krishnapuram , Saravanampatti, Coimbatore - 641035</span>
            </p>
            <p>
              <span>
                <Icon icon="ic:outline-email" />
              </span>
              <span>solutions.inpro@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="row m-auto pt-5">Inpro © 2024</div>
      </div>
    </>
  );
};
