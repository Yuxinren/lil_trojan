import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/speaker.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div id = "home">
        <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
            <h1 className="primary-heading">
            Immense Personalized Music AI Companion
            </h1>
            <p className="primary-text">
            Imagine a personal music assistant who does not just play music but understands your taste, mood, and even your environment. 
            This is designed to be your ultimate musical companion, 
            integrating state-of-the-art AI to deliver a deeply personalized soundtrack to your life.
            </p>
            </div>
            <div className="home-image-section">
            <img src={BannerImage} alt="" />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Home;