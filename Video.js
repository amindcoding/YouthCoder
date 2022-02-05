import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import backgroundVideo from "../assets/background.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Welcome To Youth Code Web!</h1>
        <p>
          If you want to learn about web programming you can click JOIN button
          to Join Us, and click ARTICKEL button if you want to learn more.
        </p>
        <div>
          <Link to="/training" className="btn">
            Join
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
