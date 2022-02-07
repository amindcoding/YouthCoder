import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { uid } from "uid";
import axios from "axios";

const RegisterComponent = () => {
  const [users, setUsers] = useState([]);
  // const [update, setUpdate] = useState({ id:nu});
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: null,
    gender: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    //ambil data
    axios.get("http://localhost:3004/users").then((res) => {
      console.log(res.data);
      setUsers(res?.data ?? []);
    });
  }, []);

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Registered successfuly!");

    let data = [...users];

    let newData = {
      id: uid(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      username: formData.username,
      password: formData.password,
    };
    data.push(newData);

    axios.post("http://localhost:3004/users", newData).then((res) => {
      alert("Registered successfuly!");
    });

    setUsers(data);
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      age: null,
      gender: "",
      email: "",
      phoneNumber: "",
      username: "",
      password: "",
    });
  }

  return (
    <Container>
      <div className="card-body p-4 p-md-5">
        <Row>
          <Col>
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
          </Col>
          <Col>
            <a href="/" className="btn btn-primary float-end">
              Back To Home <FontAwesomeIcon icon={faBackspace} />
            </a>
          </Col>
        </Row>
        <Form inline onSubmit={handleSubmit}>
          <Row>
            <Col className="col-md-6 mb-2">
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
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
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 mb-2">
              <FormGroup>
                <Label for="exampleAge">Age</Label>
                <Input
                  id="exampleAge"
                  name="age"
                  placeholder="Age"
                  type="number"
                  min={17}
                  onChange={handleChange}
                  value={formData.age}
                  required
                />
              </FormGroup>
            </Col>
            <Col className="col-ms-6 mb-2">
              <FormGroup>
                <Label for="exampleSelect">Gender</Label>
                <Input id="exampleSelect" name="gender" type="select">
                  <option>Male</option>
                  <option>Female</option>
                  onChange={handleChange}
                  value={formData.gender}
                  required
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 mb-2">
              <FormGroup>
                <Label for="emailAddress">Email</Label>
                <Input
                  id="emailAddress"
                  name="email"
                  placeholder="example@email.com"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
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
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  required
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
                  name="username"
                  placeholder="Username"
                  type="text"
                  onChange={handleChange}
                  value={formData.username}
                  required
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
                  onChange={handleChange}
                  value={formData.password}
                  required
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
