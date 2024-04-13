import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/aboutSpeaker.png";

const About = () => {
  return (
    <div id = "about">
        <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <h1 className="primary-heading">
            All-in-one Music assistant
            </h1>
            <p className="primary-text">
            Fancy a challenge? It is equipped with a battle mode where it can rap battle with you, providing both a fun entertainment option and a way to improve your own skills. It's not just an assistant; it's a companion that grows with you.
            </p>
            <p className="primary-text">
            This is not just a service; it's a journey. It adapts, evolves, and grows more in tune with you over time, creating a music experience that's as unique as you are. our service is here to elevate your personal soundscape.
            </p>
        </div>
        </div>
    </div>
  );
};

export default About;