import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { deleteRequest } from '../actions/requestAction';

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: 'Apakah anda yakin menghapus data?',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteRequest(id));
      swal('Berhasil terhapus', {
        icon: 'success',
      });
    } else {
      swal('Gagal Terhapus');
    }
  });
};

const defaultSorted = [
  {
    dataField: 'id',
    order: 'asc',
  },
];

const mapStateToProps = (state) => {
  return {
    getRequestList: state.request.getRequestList,
    errorRequestList: state.request.errorRequestList,
  };
};

export const TableComponent = (props) => {
  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      headerStyle: () => {
        return { width: '5%' };
      },
      sort: true,
    },
    {
      dataField: 'name',
      text: 'Nama',
      headerStyle: () => {
        return { width: '15%' };
      },
      sort: true,
    },
    {
      dataField: 'title',
      text: 'Pertanyaan',
      headerStyle: () => {
        return { width: '15%' };
      },
      sort: true,
    },
    {
      dataField: 'Link',
      text: 'Action',
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={'detail/' + row.id}>
              <Button color="light" className="btn btn-outline-primary">
                <FontAwesomeIcon icon={faInfo} />
                Detail
              </Button>
            </Link>{' '}
            <Link to={'edit/' + row.id}>
              <Button color="light" className="btn btn-outline-warning">
                <FontAwesomeIcon icon={faEdit} />
                Edit
              </Button>
            </Link>{' '}
            <Link>
              <Button color="light" className="btn btn-outline-danger" onClick={() => handleClick(props.dispatch, row.id)}>
                <FontAwesomeIcon icon={faTrash} />
                Delete
              </Button>
            </Link>{' '}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Container className="mt-5 pt-4 bg-light bg-gradient rounded-3">
        {props.getRequestList ? (
          <ToolkitProvider bootstrap4 keyField="id" data={props.getRequestList} columns={columns} defaultSorted={defaultSorted} pagination={paginationFactory()} search>
            {(props) => (
              <div>
                <Row>
                  <Col>
                    <Link to="/create">
                      <Button color="light" className="btn btn-outline-success">
                        <FontAwesomeIcon icon={faUserPlus} />
                        Create Request
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <div className="float-end">
                      <SearchBar {...props.searchProps} placeholder="Search.." />
                    </div>
                  </Col>
                </Row>

                <br />
                <br />
                <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <div className="text-center">{props.errorRequestList ? <h4>{props.errorRequestList}</h4> : <Spinner color="dark" />}</div>
        )}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
