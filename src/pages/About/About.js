import React from 'react'
import './about.css'
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlHfshac030qciST5MDn_cIEE6-jMLTc0DOn00UuhPw&s"
              alt="profile-pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Hey! I am Anjali Kushwah,I'm persuing my B.Tech from A.P.J Abdul Kalam University,Lucknow.
              Recently,I did an Intership on Web designing as Web Designer and Everyday,I am enhancing my skills and built project by knowing new Technologies.
              My strength is i am good learner and teach other and my weakness is to focus on one work at one time. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
