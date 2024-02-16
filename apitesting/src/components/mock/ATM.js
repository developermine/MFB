import React, { useState } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { verifyTransaction } from "../../transactionVerification";

const ATM = () => {



  const [debitCard, setDebitCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");

  const [account, setAccount] = useState("A1");
  const [name, setName] = useState()
  const [pin, setPin] = useState()
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("CityA");
  const [merchant, setMerchant] = useState("MerchantA");
  const [time, setTime] = useState("2024-01-28T12:30:00");
  const [ip, setIp] = useState("192.168.0.1");
  const [transactionType, setTransactionType] = useState("ATM-withdrawal");

  const [atmCount, setAtmCount] = useState({atm: 0})
  const [atmmCount, setAtmmCount] = useState({atmm: 0})

  const navigate = useNavigate()



  const handleCheckout = (e) => {
    e.preventDefault();
    const transaction = {
        account,
        amount: parseFloat(amount),
        location,
        merchant,
        time,
        ip,
        transactionType,
        pin
    }

    const atmResult = verifyTransaction(transaction);
    localStorage.setItem("atmActivities", JSON.stringify({atmResult}))
    if (atmResult === 1) {
        alert("Potential fraudulent transaction")
        setAtmmCount((prevCounts) => ({...prevCounts, atmm: prevCounts.atmm + 1}))
        setTimeout(() => {
            navigate("/atmverification")
        }, 3000);
        
    } else {
        alert("Successful")

        setAtmCount((prevCounts) => ({...prevCounts, atm: prevCounts.atm + 1}))
    }
  };

  localStorage.setItem("atmCountValid", JSON.stringify(atmCount))
  localStorage.setItem("atmmCountFraudulent", JSON.stringify(atmmCount))

  const handleCardNumberChange = (e) => {
    // Restrict card number to 16 digits
    const input = e.target.value.replace(/\D/g, "").slice(0, 16);
    setDebitCard(input);
  };

  const handleExpiryChange = (e) => {
    // Format expiry as MM/YY
    const input = e.target.value.replace(/\D/g, "");
    if (input.length <= 4) {
      setExpiry(
        input.replace(/(\d{2})(\d{0,2})/, (match, p1, p2) => `${p1}/${p2}`)
      );
    }
  };

  const handleCVVChange = (e) => {
    // Restrict CVV to 3 digits
    const input = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(input);
  };
  const handlePinChange = (e) => {
    // Restrict CVV to 3 digits
    const input = e.target.value.replace(/\D/g, "").slice(0, 4);
    setPin(input);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="login__form--container">
            <Form style={{ width: "100%" }} onSubmit={handleCheckout}>
              <h1>ATM Mock</h1>
              <br />
              <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Debit card pin</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter pin"
                  onChange={handlePinChange}
                  value={pin}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Button
                  type="submit"
                  //  disabled={isLoading}
                >
                  Request{" "}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ATM;
