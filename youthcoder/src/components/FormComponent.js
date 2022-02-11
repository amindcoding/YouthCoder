import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Col, Label, Row, Input, FormGroup, Button } from 'reactstrap';
import RequestValidation from '../validation/RequestValidation';

const renderField = ({ input, type, placeholder, label, disable, readOnly, meta: { touched, error, warning } }) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input {...input} type={type} placeholder={placeholder} disable={disable} readOnly={readOnly}></Input>
      {touched && ((error && <p style={{ color: 'red' }}>{error}</p>) || (warning && <p style={{ color: 'brown' }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.request.getRequestDetail.name,
      title: state.request.getRequestDetail.title,
    },
  };
};

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field type="text" name="name" component={renderField} label="Nama : " />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field type="email" name="title" component={renderField} label="Title : " />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={12}>
            <FormGroup>
              <Button color="dark" type="submit" disabled={this.props.submitting}>
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: 'formCreateRequest',
  validate: RequestValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
