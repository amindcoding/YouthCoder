import React from 'react';
import belajar from '../assets/learning.png';

const JumbotronArtikelComponent = () => {
  const userInfo = localStorage.getItem('userInfo');

  return (
    <div>
      <div
        class="p-5 mb-4"
        style={{
          backgroundColor: '#1a2634',
        }}
      >
        <header className="jumbotron jumbotron-fluid text-white">
          <div className="container">
            <div className="col-12 col-md-10 mx-auto">
              <div className="row justify-content-around">
                <div className="col-12 col-md-6 d-flex align-items-center">
                  <div>
                    <h1 className="display-4 fw-bolder">Mau belajar apa {userInfo ? <span> {JSON.parse(userInfo).firstName} </span> : <span></span>} ?</h1>
                    <p className="lead">Kami menyediakan beberapa tutorial dasar yang cocok untuk kamu..</p>
                    <a href="#list" class="btn btn-outline-light mr-2">
                      Lihat Artikel
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <picture>
                    <img src={belajar} width="400" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default JumbotronArtikelComponent;
