import React from "react";
import AboutImage from "../Content/AboutImage.png";
import AboutImage1 from "../Content/AboutImage.png";
import AboutImage2 from "../Content/AboutImage.png";

const About = () => {
  return (
    <div>
      <div className="top">
        <img src={AboutImage} alt="AboutImg" />
      </div>
      <div className="mid">
        <img src={AboutImage1} alt="AboutImg" />
      </div>
      <div className="bottom">
        <img src={AboutImage2} alt="AboutImg" />
      </div>
      <div className="AboutContent">
        <h1 className="AboutTitle">About Us</h1>
        <br />
        <h6 className="paragraph">
          Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
          text used in design when creating content. It helps designers plan out
          where the content will sit
        </h6>
      </div>
    </div>
  );
};

export default About;
