import { Container } from 'reactstrap';
import './ListUsersComponent.css';

export default function ListUsersComponent({ data }) {
  const userInfo = localStorage.getItem('userInfo');

  return (
    <div>
      <Container id="list">
        {userInfo ? (
          <div class="container">
            <div class="row">
              <div>
                <div class="panel">
                  <div class="panel-heading">
                    <div class="row text-center">
                      <div>
                        <h4 class="title">List Data Anggota</h4>
                      </div>
                    </div>
                  </div>
                  <div class="panel-body table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Username</th>
                          <th>Nama Awal</th>
                          <th>Nama Akhir</th>
                          <th>Email</th>
                          <th>Umur</th>
                          <th>Gender</th>
                          <th>Kontak</th>
                        </tr>
                      </thead>
                      {data.map((user) => {
                        return (
                          <tbody>
                            <tr>
                              <td>{user.username}</td>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.email}</td>
                              <td>{user.age}</td>
                              <td>{user.gender}</td>
                              <td>{user.phoneNumber}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="fs-1 fw-bold">Data tidak ada karena kamu belum login</p>
          </div>
        )}
      </Container>
    </div>
  );
}
