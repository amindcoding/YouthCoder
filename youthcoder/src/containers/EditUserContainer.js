import React, { Component } from 'react';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import BackComponent from '../components/BackComponent';
import FormComponent from '../components/FormComponent';
import { getRequestDetail, putRequestUpdate } from '../actions/requestAction';

const mapStateToProps = (state) => {
  return {
    getResponDataRequest: state.request.getResponDataRequest,
    errorResponDataRequest: state.request.errorResponDataRequest,
  };
};

class EditRequestContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getRequestDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putRequestUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponDataRequest || this.props.errorResponDataRequest) {
      if (this.props.errorResponDataRequest) {
        swal('Failed Created Request', this.props.errorResponDataRequest, 'error');
      } else {
        swal('Request Updated', 'Nama : ' + this.props.getResponDataRequest.name + 'success');
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
                <p class="fs-4">Edit data</p>
              </div>
            </Col>
          </Row>

          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}
export default connect(mapStateToProps, null)(EditRequestContainer);
