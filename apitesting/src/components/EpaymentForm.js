import React, { useState } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
// import { useLoginMutation } from '../services/appApi';
// import './Signup.css'

const EpaymentForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData =
      JSON.parse(localStorage.getItem("userDataInformation")) || {};

    if (
      email === storedUserData.email &&
      password === storedUserData.password
    ) {
      history("/bankcustomer");
    } else {
      alert(" incorrect email and password");
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1>E- Payment form</h1>
            {/* {isError && <Alert variant='danger'>{error.data}</Alert>} */}
            <Form.Group>
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Account number"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Debitcard Pin</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter debit pin"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>

            <Form.Group>
              <Button
                type="submit"
                //  disabled={isLoading}
              >
                Verify{" "}
              </Button>
            </Form.Group>
            <br />
            <Form.Group>
              <Button
                type="submit"
                //  disabled={isLoading}
              >
                Cancel{" "}
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EpaymentForm;
