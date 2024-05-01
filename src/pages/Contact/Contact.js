import React from 'react'
import './contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="contacts" id="contact">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          CONTACT US
        </h2>
        <hr />
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://doi-ds.org/images/upload/contact_us.jpg"
                    alt="Contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2  d-flex card border-0 px-4 py-2">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <FaLinkedin color="skyblue" size={30} className="ms-2" />
                      <FaGithubSquare
                        color="black"
                        size={30}
                        className="ms-2"
                      />
                      <SiHackerrank color="brown" size={30} className="ms-2" />
                      <FaFacebookSquare
                        color="blue"
                        size={30}
                        className="ms-2"
                      />
                      <FaInstagramSquare
                        color="rainwo"
                        size={30}
                        className="ms-2"
                      />
                    </h6>
                  </div>
                </div>
                <div className="row-px-6 mb-4 lines">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Write your name"
                    className="mb-3"
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="mb-3"
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write Your Message"
                    className="mb-3"
                  />
                </div>
                <div className="row px-3">
                  <button type="submit" className=" ">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
