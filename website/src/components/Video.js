import React from 'react';
import { Link } from 'react-router-dom';
import './css/VideoStyles.css';

import backgroundVideo from '../assets/background2.mp4';

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Welcome To Youth Code Web!</h1>
        <p>If you want to learn about web programming you can click The Join Us,</p> <p>and click Articel if you want to learn more.</p>
        <div>
          <Link to="/training" className="btn btn-light">
            Join Us
          </Link>
          <Link to="/pricing" className="btn">
            Articel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
