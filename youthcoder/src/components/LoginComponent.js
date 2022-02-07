import React from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

export const LoginComponent = () => {
  return (
    <Container>
      <div className="card-body p-4 p-md-5">
        <Row>
          <Col>
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Form Login</h3>
            <p className="mb-2">Masukkan username dan password anda!</p>
          </Col>
          <Col>
            <a href="/" className="btn btn-primary float-end">
              Back To Home <FontAwesomeIcon icon={faBackspace} />
            </a>
          </Col>
        </Row>
        <Form inline>
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input
              id="userName"
              name="userName"
              placeholder="Username"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormGroup>

          <div className="mt-4 pt-2">
            <Input
              className="btn btn-primary btn-lg"
              type="submit"
              value="Log in"
            />
          </div>

          <div>
            <p className="mb-0">
              Tidak punya akun?{" "}
              <a href="/register" className="fw-bold">
                Daftar disini
              </a>
            </p>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default LoginComponent;
