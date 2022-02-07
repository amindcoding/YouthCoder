import React from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";

export const LoginComponent = () => {
  return (
    <Container>
      <div className="card-body p-4 p-md-5">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
        <p className="mb-2">
          Please enter your username and password!
        </p>

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
              Don't have an account?{" "}
              <a href="/register" className="fw-bold">
                Register
              </a>
            </p>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default LoginComponent;
