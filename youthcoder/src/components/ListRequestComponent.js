import { Container } from 'reactstrap';
import './ListRequestComponent.css';

export default function ListRequestComponent({ data, handleEdit, handleDelete }) {
  return (
    <div>
      <Container id="list">
        <div class="container">
          <div class="row">
            <div>
              <div class="panel">
                <div class="panel-heading">
                  <div class="row text-center">
                    <div>
                      <h4 class="title">List Pertanyaan</h4>
                    </div>
                  </div>
                </div>
                <div class="panel-body table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Nama</th>
                        <th>Pertanyaan</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    {data.map((request) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{request.name}</td>
                            <td>{request.title}</td>
                            <td>
                              <button onClick={() => handleEdit(request.id)} className="btn btn-sm btn-link">
                                Edit
                              </button>
                              <button onClick={() => handleDelete(request.id)} className="btn btn-sm btn-link">
                                Del
                              </button>
                            </td>
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
      </Container>
    </div>
  );
}
