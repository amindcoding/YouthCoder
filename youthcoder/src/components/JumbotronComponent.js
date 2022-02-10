import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Container } from 'reactstrap';

const JumbotronComponent = () => {
  const userInfo = localStorage.getItem('userInfo');

  return (
    <div>
      <div
        class="p-5 mb-4"
        style={{
          backgroundColor: '#1a2634',
        }}
      >
        <Container>
          <div className="container text-white">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8 py-lg-5 mx-auto text-start text-lg-left ">
                <h1 className="display-4 fw-bolder">Youth Coder</h1>
                <p className="lead fs-4">
                  Website pembelejaran untuk
                  <i className="fs-4"> programmer pemula.</i>
                  <br />
                  Lingkungan yang cocok untuk belajar pemrograman dari awal
                </p>
                {userInfo ? (
                  <p className="lead">
                    Selamat Datang{' '}
                    <i>
                      {JSON.parse(userInfo).firstName} {JSON.parse(userInfo).lastName}
                    </i>
                  </p>
                ) : (
                  <div className="mt-4">
                    <a href="/register" class="btn btn-success mr-2">
                      Daftar Sekarang
                    </a>
                  </div>
                )}
                <div className="mt-4">
                  <a href="/articles" class="btn btn-outline-light mr-2">
                    Belajar Sekarang
                  </a>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img className="img-fluid" src={logo} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default JumbotronComponent;
