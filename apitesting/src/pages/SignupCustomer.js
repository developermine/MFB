import React, { useState } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../components/Signup.css";
// import { useSignupMutation } from '../services/appApi';

const SignupCustomer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [othername, setOtherName] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nextofkin, setnextofkin] = useState("");
  const [nextofPhone, setnextphone] = useState("");
  const [nextofAddress, setNextAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [bankstaff, setBankStaff] = useState("");
  const [fraud, setFraud] = useState("");

  // const [ signup, {error, isLoading, isError} ] = useSignupMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstname,
      lastname,
      othername,
      email,
      password,
      type,
      phone,
      address,
      nextofPhone,
      nextofAddress,
      nextofkin,
      amount,
      account,
      bankstaff,
      fraud,
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
            <h1>Create an account</h1>
            {/* { isError && <Alert variant='danger'>{error.data}</Alert>} */}

            <Form.Group
              className="mb-3"
              onChange={(e) => setType(e.target.value)}
            >
              <Form.Label>Type</Form.Label>
              <Form.Select>
                <option disabled selected>
                  -- Select One --
                </option>
                <option value="technology">Servings</option>
                <option value="fashion">Current</option>
                <option value="phones">Fixed</option>
              </Form.Select>
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
              <Form.Label>Other Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter other name"
                onChange={(e) => setOtherName(e.target.value)}
                value={othername}
              />
            </Form.Group>
            <br></br>
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

            <br></br>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Next of Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter next of kin"
                onChange={(e) => setnextofkin(e.target.value)}
                value={nextofkin}
                required
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Next of Kin Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter next of kin"
                onChange={(e) => setnextphone(e.target.value)}
                value={nextofPhone}
                required
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Next of Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter next of kin"
                onChange={(e) => setNextAddress(e.target.value)}
                value={nextofAddress}
                required
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Bank Staff</Form.Label>
              <Form.Control
                type="text"
                placeholder="staff"
                onChange={(e) => setBankStaff(e.target.value)}
                value={bankstaff}
                required
              />
            </Form.Group>
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
              <Button
                variant="primary"
                type="submit"
                //  disabled={isLoading}
              >
                Create account
              </Button>
            </Form.Group>
            <p>
              Do you have an account ? <Link to="/login">login</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="signup__image--container"></Col>
      </Row>
    </Container>
  );
};

export default SignupCustomer;
