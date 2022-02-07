import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const JumbotronComponent = () => {
  return (
    <div>
      <div
        class="p-5 mb-4"
        style={{
          backgroundColor: '#0b43bc',
        }}
      >
        <Container>
          <div class="container-fluid py-5 text-white">
            <h1 class="display-5 fw-bold">Youth Coder</h1>
            <p class="col-md-8 fs-4">Website pembelejaran untuk programmer pemula. Lingkungan untuk yang ingin belajar pemrograman dari awal.</p>
            <Link to="/register">
              <button class="btn btn-primary btn-lg" type="button">
                Daftar Sekarang
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default JumbotronComponent;
