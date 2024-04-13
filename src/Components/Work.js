import React from "react";
import Demo from "../Assets/quickDemo.mp4";
const Work = () => {

  return (
    <div id = "demo">
        <div className="work-section-wrapper">
        <div className="work-section-top">
            <h1 className="primary-heading">How It Works</h1>
        </div>
        <div className="work-section-bottom">
        <video width="100%" height="auto" controls>
            <source src={Demo} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
        </div>
    </div>
  );
};

export default Work;