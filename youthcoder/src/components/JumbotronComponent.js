import React from 'react';
import { Container } from 'reactstrap';

const JumbotronComponent = () => {
  return (
    <div>
      <div
        class="p-5 mb-4 rounded-3"
        style={{
          backgroundColor: '#0b43bc',
          borderColor: '#333',
        }}
      >
        <Container>
          <div class="container-fluid py-5 text-white">
            <h1 class="display-5 fw-bold">Youth Coder</h1>
            <p class="col-md-8 fs-4">Website pembelejaran untuk programmer pemula. Lingkungan untuk yang ingin belajar pemrograman dari awal.</p>
            <button class="btn btn-primary btn-lg" type="button">
              Daftar Sekarang
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default JumbotronComponent;
