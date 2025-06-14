import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋, <br />I am{" "}
          <span className="info-name">Kenneth Akpo</span>.
          <br />A Frontend Web and App Engineer, proficient in React and React
          native framework.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
            alt=""
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
