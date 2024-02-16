import React, { useState } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { verifyTransaction } from "../../transactionVerification";

const POS = () => {



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
  const [transactionType, setTransactionType] = useState("POS-withdrawal");

  const [posCount, setPosCount] = useState({pos: 0})
  const [possCount, setPossCount] = useState({poss: 0})

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

   

    const result = verifyTransaction(transaction);
    localStorage.setItem("posActivities", JSON.stringify({result}))
    if (result === 1) {
        alert("Potential fraudulent transaction")
        setPossCount((prevCounts) => ({...prevCounts, poss: prevCounts.poss + 1}))
        // navigate("/verification")
    } else {
        alert("Successful")
       
        setPosCount((prevCounts) => ({...prevCounts, pos: prevCounts.pos + 1}))
    }
  };


  localStorage.setItem("posCountValid", JSON.stringify(posCount))
  localStorage.setItem("possCountFraudulent", JSON.stringify(possCount))

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
              <h1>POS withdrawal Mock</h1>
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
                  Withdraw{" "}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default POS;
