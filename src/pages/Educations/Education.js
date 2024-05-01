import React from 'react'
import './education.css';
import { FaSchool } from "react-icons/fa6";
import { BiSolidBusSchool } from "react-icons/bi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
const Education = () => {
  return (
    <>
      <div className="education" id='education'>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          EDUCATION DETAILS
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2016-2018"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<BiSolidBusSchool />}
          >
            <h3 className="vertical-timeline-element-title">10th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Agra Road,Aligarh
            </h4>
            <p>
              I have completed my 10th standard from ICSE Board.I got 75.5
              percent in 10th.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2018-2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">12th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Agra Road,Aligarh
            </h4>
            <p>
              I have completed my 12th standard from ISC Board.I got 74.5
              percent in 12th.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2021-2025"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mathura Road,Aligarh
            </h4>
            <p>
              I am persuing B.Tech from A.P.J.Abdul Kalam University,Lucknow
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Education
