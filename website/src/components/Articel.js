import React from "react";
//import { Link } from "react-router-dom";
import "./ArticelStyles.css";

const Articel = () => {
  return (
    <div className="articel">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">HTML Dan CSS</p>
          <p>- Klik Book untuk unduh pdf -</p>
          <a
            href="./src/assets/book/Belajar_HTML_dan_CSS.pdf"
            download="Belajar HTML dan CSS"
          >
            <button className="btn" type="download">
              Book
            </button>
          </a>
        </div>
        <div className="card">
          <h3>- Suite -</h3>
          <span className="bar"></span>
          <p className="btc">Java Script</p>
          <p>- Views -</p>
          <a
            href="../assets/eBook/Belajar_HTML_dan_CSS.pdf"
            download="Belajar HTML dan CSS"
          >
            <button className="btn" type="download">
              Book
            </button>
          </a>
        </div>
        <div className="card">
          <h3>- Executive -</h3>
          <span className="bar"></span>
          <p className="btc">ReactJS </p>
          <p>- Views -</p>
          <a
            href="../assets/eBook/Belajar_HTML_dan_CSS.pdf"
            download="Belajar HTML dan CSS"
          >
            <button className="btn" type="download">
              Book
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articel;
