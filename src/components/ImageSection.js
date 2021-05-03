import React from "react";
import about from "../images/side profile.jpg";

function ImageSection() {
  return (
    <div className="image-section">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          <span>Ahmed Ali</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          labore, temporibus nobis ipsum qui iste.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: 22</p>
            <p>: Bangladesh</p>
            <p>: Bangla English</p>
            <p>: Dhaka,Bangladesh</p>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/1-BAPNupAJZrQu0hzSJm4na_4XXazNRtE/view" target="blank">
        <button className="btn">Download Cv</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
