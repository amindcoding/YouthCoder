import React, { useEffect, useState } from "react";
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
import axios from "axios";

export const ProfileComponent = () => {
  const [users, setUsers] = useState([]);

  const [editProfile, setEditProfile] = useState({ id: null, status: false });

  const userInfo = localStorage.getItem("userInfo");
  console.log(JSON.parse(userInfo).id);

  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
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

  function handleEdit(id) {
    let data = [...users];
    let foundData = data.find((users) => users.id === id);
    setFormData({
        firstName: foundData.firstName,
        lastName: foundData.lastName,
        age: foundData.age,
        gender: foundData.gender,
        email: foundData.email,
        phoneNumber: foundData.phoneNumber,
        username: foundData.username,
        password: foundData.password,
    })  
    
    setEditProfile({id: id, status: true});

  }

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("oke");
    let data = [...users];

    if (editProfile.status) {
      if (users.id === JSON.parse(userInfo).id) {
        users.firstName = formData.firstName;
        users.lastName = formData.lastName;
        users.age = formData.age;
        users.gender = formData.gender;
        users.email = formData.email;
        users.phoneNumber = formData.phoneNumber;
        users.username = formData.username;
        users.password = formData.password;
      }
    }
    console.log(users.email);
  }

  return (
    <Container>
      <div className="card-body p-4 p-md-5">
        <Row>
          <Col>
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Edit Profile User</h3>
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
                <Label for="firstName">Nama Depan</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Nama Depan"
                  type="text"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </FormGroup>
            </Col>
            <Col className="col-md-6 mb-2">
              <FormGroup>
                <Label for="lastName">Nama Belakang</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Nama Belakang"
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
                <Label for="exampleAge">Usia</Label>
                <Input
                  id="exampleAge"
                  name="age"
                  placeholder="Usia"
                  type="number"
                  min={17}
                  title="Minimal berusia 17 tahun"
                  onChange={handleChange}
                  value={formData.age}
                  required
                />
              </FormGroup>
            </Col>
            <Col className="col-ms-6 mb-2">
              <FormGroup>
                <Label for="exampleGender">Jenis Kelamin (L/P)</Label>
                <Input
                  className="text-uppercase"
                  id="exampleGender"
                  name="gender"
                  placeholder="L / P"
                  type="text"
                  maxLength={1}
                  pattern="[LP]"
                  title="Hanya huruf L / P"
                  onChange={handleChange}
                  value={formData.gender}
                  required
                />
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
                <Label for="phoneNumber">Nomor Telepon</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Nomor Telepon"
                  type="tel"
                  pattern="[0-9]{11,}"
                  title="Hanya boleh menggunakan angka, setidaknya 11 angka atau lebih"
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
                  pattern="(?=.*\d).{5,}"
                  title="Harus mengandung minimal satu angka, dan setidaknya 5 karakter atau lebih"
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
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Harus mengandung minimal satu huruf kecil satu huruf besar satu angka, dan setidaknya 8 karakter atau lebih"
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
              value="Simpan"
            />
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ProfileComponent;
