import React from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const RegisterComponent = () => {
  return (
    <Container>
      <div className="card-body p-4 p-md-5">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
        <Form inline>
          <Row>
            <Col className="col-md-6 mb-2">
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col className="col-md-6 mb-2">
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 mb-2">
              <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col className="col-ms-6 mb-2">
              <h6 className="mb-2 pb-1">Gender: </h6>
              <FormGroup>
                <Input
                  className="form-check-input m-2"
                  type="radio"
                  name="inlineRadioOptions"
                  id="femaleGender"
                  value="option1"
                  checked
                />
                <Label className="form-check-label m-1" for="femaleGender">
                  Female
                </Label>
                <Input
                  className="form-check-input m-2"
                  type="radio"
                  name="inlineRadioOptions"
                  id="maleGender"
                  value="option1"
                  checked
                />
                <Label className="form-check-label m-1" for="maleGender">
                  Male
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 mb-2">
              <FormGroup>
                <Label for="emailAddress">Email</Label>
                <Input
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="example@email.com"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col className="col-md-6 mb-2">
              <FormGroup>
                <Label for="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="tel"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
              <Col className="col-md-6 mb-2">
                <FormGroup>
                <Label for="userName">Username</Label>
                <Input
                  id="userName"
                  name="userName"
                  placeholder="Username"
                  type="text"
                />
                </FormGroup>
              </Col>
              <Col className="col-md-6 mb-2">
                <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                </FormGroup>
              </Col>
          </Row>
          <div className="mt-4 pt-2">
            <Input
              className="btn btn-primary btn-lg"
              type="submit"
              value="Submit"
            />
          </div>

          <div>
            <p className="mb-0">
              Already have an account?{" "}
              <a href="/login" className="fw-bold">
                Log in
              </a>
            </p>
          </div>

        </Form>
      </div>
    </Container>
  );
};

export default RegisterComponent;
