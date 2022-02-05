import React from 'react';
import { Link } from 'react-router-dom';
import './css/PricingStyles.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">HTML Dan CSS</p>
          <p>- Views -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Suite -</h3>
          <span className="bar"></span>
          <p className="btc">JavaScript</p>
          <p>- Views -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Executive -</h3>
          <span className="bar"></span>
          <p className="btc">NodeJs</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
