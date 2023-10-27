import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../components/WelcomeText.css";
import welcomeImage from "../assets/welcome-text.png";

const Welcome = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="welcome-container">
      <div className="image-container" data-aos-delay="500" data-aos="flip-down">
      <img className="welcome-bg-left" src={welcomeImage}  alt="Background Left" />
      <img
        className="welcome-bg-right"
        src={welcomeImage}
        alt="Background Right"
      />
      </div>

      <div className="welcome-text">  <h1 className="welcome-text" data-aos-delay="750" data-aos="flip-down"> Welcome My Page..</h1></div>
    </div>
  );
};

export default Welcome;
