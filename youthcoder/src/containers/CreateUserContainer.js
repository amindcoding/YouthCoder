import React, { Component } from 'react';
import swal from 'sweetalert';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import BackComponent from '../components/BackComponent';
import FormComponent from '../components/FormComponent';
import { postRequestCreate } from '../actions/requestAction';

const mapStateToProps = (state) => {
  return {
    getResponDataRequest: state.request.getResponDataRequest,
    errorResponDataRequest: state.request.errorResponDataRequest,
  };
};

class CreateRequestContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postRequestCreate(data));
  }

  render() {
    if (this.props.getResponDataRequest || this.props.errorResponDataRequest) {
      if (this.props.errorResponDataRequest) {
        swal('Failed Created Request', this.props.errorResponDataRequest, 'error');
      } else {
        swal('Request Created', 'Nama : ' + this.props.getResponDataRequest.name + 'success');
      }
    }

    return (
      <div>
        <Container className="mt-5 pt-4 bg-light bg-gradient rounded-3">
          <Row>
            <Col>
              <BackComponent />
            </Col>
            <Col>
              <div className="float-end">
                <p className="fs-4">Create Request</p>
              </div>
            </Col>
          </Row>

          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateRequestContainer);
