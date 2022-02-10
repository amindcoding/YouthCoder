import React from 'react';

const FooterComponent = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#2e3a48',
        }}
      >
        <footer class="jumbotron jumbotron-fluid mb-0 d-none d-md-block">
          <div class="container text-white">
            <div class="row row-cols-1 row-cols-sm-1">
              <div class="col-12 py-3 text-center"></div>
              <div class="col-12 text-center my-3">
                <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/articles">
                      Artikel
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/forum">
                      Forum
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#aboutme">
                      About Me
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-12 text-center my-3">
                <a className="text-decoration-none" href="http://localhost:3000">
                  <strong>Kelompok 1</strong>
                </a>
                <span class="d-none d-lg-inline"> · Made with ❤️</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterComponent;
