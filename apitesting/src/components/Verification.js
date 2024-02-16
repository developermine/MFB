import React, { useState } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../components/Signup.css";
// import { useSignupMutation } from '../services/appApi';

const Verification = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [othername, setOtherName] = useState("");

  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [date, setDate] = useState("");

  // const [ signup, {error, isLoading, isError} ] = useSignupMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstname,
      lastname,

      email,
      date,

      amount,
    };
    localStorage.setItem("userDataInformation", JSON.stringify(userData));
  };

  return (
    <Container>
      <Row>
        <Col
          md={6}
          className="signup__form--container"
          style={{ marginTop: "190px" }}
        >
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1>Debitcard Verification of account</h1>
            {/* { isError && <Alert variant='danger'>{error.data}</Alert>} */}

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
            <br></br>

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
            <br></br>

            <Form.Group>
              <Form.Label>Other Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter other name"
                onChange={(e) => setOtherName(e.target.value)}
                value={othername}
              />
            </Form.Group>

            <br></br>
            {/* <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </Form.Group> */}

            <br></br>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                required
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="account number"
                onChange={(e) => setAccount(e.target.value)}
                value={account}
                disabled
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enater Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                disabled
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Link to="/"><Button
                variant="primary"
                type="submit"
                //  disabled={isLoading}
              >
                Transfer/Pay
              </Button></Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Verification;
