import React from "react";
import img from "./contact.png";
import { Icon } from "@iconify/react";
import "./GetInTouch.css";

export const GetInTouch = () => {
  return (
    <>
      <div className="main">
        <div className="row d-flex justify-content-center align-items-center mt-5 mt-lg-0">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="con-text mb-lg-5">
              <h6>CONTACT US</h6>
            </div>
            <div>
              <img src={img} alt="" width={500} className="con-img" />
            </div>
            <div className="d-flex con-icon my-5">
              <div>
                <a
                  href="https://www.linkedin.com/company/inpro-software-solutions/"
                  target="blank"
                >
                  <Icon icon="devicon:linkedin" />
                </a>
              </div>
              <div>
                <a href="https://wa.me/8015531830" target="blank">
                  <Icon icon="logos:whatsapp-icon" />
                </a>
              </div>
              <div>
                <a href="mailto:solution.inpro@gmail.com">
                  <Icon icon="ic:outline-mail" />
                </a>
              </div>
              <div>
                <a href="tel:+91 80155 31830">
                  <Icon icon="fluent:call-28-regular" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 forms d-flex flex-column justify-content-cente align-items-center">
            <h6>
              Have a Project? <br />
              Create Your Website Now
            </h6>
            <form
              id=""
              action="https://formspree.io/f/xrgnwnve"
              method="POST"
              className="my-5"
            >
              <input
                type="text"
                name="Name"
                id=""
                placeholder="Name"
                required
              />{" "}
              <br />
              <input
                type="mail"
                name="email"
                placeholder="Mail"
                required
              />{" "}
              <br />
              <textarea
                name="message"
                id=""
                placeholder="Queries"
                required
              ></textarea>{" "}
              <br />
              <center>
                <button type="submit">Submit</button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
