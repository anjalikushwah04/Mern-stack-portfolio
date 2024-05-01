import React from 'react'
import './projects.css'
import Card1 from "/Users/vishalkushwah/PROJECT/client/src/assets/Images/Card1.webp";
import Card2 from "/Users/vishalkushwah/PROJECT/client/src/assets/Images/Card2.png";
import Card3 from "/Users/vishalkushwah/PROJECT/client/src/assets/Images/Card3.png";
const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENTS PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are my 3 Recent Project with live link and source code.You can
          build a highly-operational website for yourself, your business, and
          your city. It is a gratifying idea because you get a portfolio/your
          business site, and an academic project in one go.
        </p>

        {/* card design */}

        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN STACK PORTFOLIO</span>
                <img src={Card1} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">NODE</span>
                <span className="card-detail-badge">EXPRESS</span>
                <span className="card-detail-badge">REACT</span>
                <span className="card-detail-badge">MONGODB</span>
                <div className="card-body text-center">
                  <div className="ad-title m-auto  ">
                    <h5 className="text-uppercase">
                      My Portfolio
                    </h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">AMAZON CLONE</span>
                <img src={Card2} alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JAVASCRIPT</span>
                <span className="card-detail-badge">REACT</span>
                <div className="card-body text-center">
                  <div className="ad-title m-auto  ">
                    <h5 className="text-uppercase">Shopping App</h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">PASSWORD GENERATOR</span>
                <img
                  src={Card3}
                  alt="project3"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JAVASCRIPT</span>
                <span className="card-detail-badge">REACT</span>
                <div className="card-body text-center">
                  <div className="ad-title m-auto  ">
                    <h5 className="text-uppercase">Password Generator App</h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects
