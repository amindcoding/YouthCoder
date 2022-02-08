import React, { useEffect, useState } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const LoginComponent = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
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
    // alert("oke");
    let data = [...users];
    const suksesLogin = users.filter(usr => usr.username === formData.username && usr.password === formData.password) 
    if(suksesLogin.length > 0) {
        localStorage.setItem('userInfo', JSON.stringify(...suksesLogin))
        window.location.href = "/"
    }else {
        alert("Username atau Password yang anda masukkan salah!")
    }
  }

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
        <Form inline onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input
              id="userName"
              name="username"
              placeholder="Username"
              type="text"
            //   pattern="(?=.*\d).{5,}"
            //   title="Harus mengandung minimal satu angka, dan setidaknya 5 karakter atau lebih"
              onChange={handleChange}
              value={formData.username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            //   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            //   title="Harus mengandung minimal satu huruf kecil satu huruf besar satu angka, dan setidaknya 8 karakter atau lebih"
              onChange={handleChange}
              value={formData.password}
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
