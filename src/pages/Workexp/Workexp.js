import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './workexp.css'
import { LiaReact } from "react-icons/lia";
import {  SiWordpress } from "react-icons/si";
const Workexp = () => {
  return (
    <>
      <div className="work" id='work'>
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            MY WORK EXPERIENCE
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="2024 - Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<LiaReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle"></h4>
              <p>
                Creative,QuickLearning,Visual Design,Project Management,Team
                Leading
              </p>
            </VerticalTimelineElement> */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiWordpress />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle"></h4>
              <p>
                Creative,QuickLearner,visual Design,Project Management,Team
                Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Workexp
