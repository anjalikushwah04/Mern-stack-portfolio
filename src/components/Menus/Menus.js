import React from 'react'
import './Menus.css'
import { FaHome } from "react-icons/fa";
import { MdMilitaryTech } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import {
  FcBusinessContact,
  FcReading,
  FcPortraitMode,
  FcAbout
} from "react-icons/fc";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';
import Profile from "/Users/vishalkushwah/PROJECT/client/src/assets/Images/Profile.jpeg";
const Menus = ({toggle}) => {
  return (
    <>
      {toggle ? (
        <>
          {/* ====Navbar Profile==== */}
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={Profile} alt="profile pic" />
            </div>
          </Zoom>

          {/* ====Navbar1 Items==== */}
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FaHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading />
                    Education
                  </Link>
                </div>
              </div>
              {/* </div> */}
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Tech"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdMilitaryTech />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GoProjectSymlink />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          {/* ====Navbar2 Items==== */}
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FaHome title="Home" />
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout title="About" />
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading title="Education" />
                  </Link>
                </div>
              </div>
              {/* </div> */}
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Tech"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdMilitaryTech title="Tech Stack" />
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GoProjectSymlink title="Projects" />
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode title="Work Experience" />
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact title="Contact" />
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      )}
    </>
  );
}

export default Menus
