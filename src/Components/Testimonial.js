import React from "react";
import ProfilePic from "../Assets/peterren.png";
import { AiFillStar } from "react-icons/ai";



const Testimonial = () => {
  return (
    <div id = "contact">
        <div className="work-section-wrapper">
        <div className="work-section-top">
            <h1 className="primary-heading">Developer</h1>
        </div>
        <div className="testimonial-section-bottom"><img src={ProfilePic} alt="Profile Picture" style={{ width: "100px", height: "auto" }} />
        <p>
        Passionate Software Engineer from USC Viterbi School of Enigneering. Had multiple experiences on React JS, Springboot, Full-stack software engineering. 
        Driven by the aspiration of bridging the gap between theoretical knowledge and real world utility. 
        </p>
        <h2>Peter Ren</h2>
        </div>
        </div>
    </div>
  );
};

export default Testimonial;