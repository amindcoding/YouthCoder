import React from 'react';
import pengguna from '../assets/pengguna.png';

const JumbotronUsersComponent = () => {
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
                    <h1 className="display-4 fw-bolder">Daftar Keanggotaan</h1>
                    <p className="fs-3">
                      {userInfo ? (
                        <span>
                          {' '}
                          <a href="#table" class="btn btn-outline-light mr-2">
                            Lihat Daftar Teman
                          </a>
                        </span>
                      ) : (
                        <span>Login untuk melihat Daftar Anggota</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <picture>
                    <img src={pengguna} width="300" />
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

export default JumbotronUsersComponent;
