import React, { useState } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../Signup.css";

const StaffSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [othername, setOtherName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const staffData = {
      firstname,
      lastname,
      othername,
      email,
      password,
    };
    localStorage.setItem("staffDataInformation", JSON.stringify(staffData));
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="signup__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1>Create an account</h1>
            {/* {isError && <Alert variant="danger">{error.data}</Alert>} */}
            <br />

            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter first name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstname}
                required
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}
                required
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>Other Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter other name"
                onChange={(e) => setOtherName(e.target.value)}
                value={othername}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Form.Group>
            <br />

            <br />

            <Form.Group>
              <Button variant="primary" type="submit">
                Create account
              </Button>
            </Form.Group>
            <p>
              Do you have an account ? <Link to="/stafflogin">login</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="signup__image--container"></Col>
      </Row>
    </Container>
  );
};

export default StaffSignup;
