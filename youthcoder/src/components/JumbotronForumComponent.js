import React from 'react';
import forum from '../assets/forum.png';

const JumbotronForumComponent = () => {
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
                    <h1 className="display-4 fw-bolder">Forum Diskusi</h1>
                    <p className="fs-3">
                      {userInfo ? (
                        <span>
                          {' '}
                          {JSON.parse(userInfo).firstName} punya pertanyaan?
                          <br />
                          <br />
                        </span>
                      ) : (
                        <span></span>
                      )}
                      Kamu boleh{' '}
                      <a href="#diskusi" class="btn btn-outline-light fs-3">
                        berdiskusi
                      </a>{' '}
                      di forum ini
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <picture>
                    <img src={forum} width="400" />
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

export default JumbotronForumComponent;
