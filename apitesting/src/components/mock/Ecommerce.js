import React, { useState } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { verifyTransaction } from "../../transactionVerification";

const Ecommerce = () => {



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
  const [transactionType, setTransactionType] = useState("e-commerce");
  
  const [webCount, setWebCount] = useState({web: 0})

  const [webbCount, setWebbCount] = useState({webb: 0})

  const navigate = useNavigate()


  const userData =
    JSON.parse(localStorage.getItem("userDataInformation")) || {};
  const {
    firstname,
    lastname,
    othername,
    
  } = userData;
  const cardholderName = `${firstname} ${lastname} ${othername}`

  

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

    const webResult = verifyTransaction(transaction);
    localStorage.setItem("webActivities", JSON.stringify({webResult}))
    if (webResult === 1) {
        alert("Potential fraudulent transaction")
        setWebbCount((prevCounts) => ({...prevCounts, webb: prevCounts.webb + 1}))
        setTimeout(() => {
            navigate("/verification")
        }, 3000);
        
    } else {
        alert("checkout successful")
        setWebCount((prevCounts) => ({...prevCounts, web: prevCounts.web + 1}))
    }
  };

  localStorage.setItem("webCountValid", JSON.stringify(webCount))
  localStorage.setItem("webbCountFraudulent", JSON.stringify(webbCount))

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
        input.replace(/(\d{2})(\d{0,2})/, (match, p1, p2) =>  p2 ? `${p1}/${p2}` : p1)
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
              <h1>Ecommerce checkout Mock</h1>
              {/* {isError && <Alert variant='danger'>{error.data}</Alert>} */}
              <Form.Group>
                <Form.Label>Merchant/Name on card</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  onChange={(e) => setName(e.target.value)}
                  value={cardholderName}
                  required
                  disabled
                />
                
              </Form.Group>

              <Form.Group>
                <Form.Label>Credit card number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter card number"
                  pattern="[0-9]{16}"
                  onChange={handleCardNumberChange}
                  value={debitCard}
                  required
                />
                
              </Form.Group>

              <Form.Group>
                <Form.Label>Expiration (MM/YY) </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter expiration"
                //   pattern="^(0[1-9]1[0-2])\/\d{2}$"
                  onChange={handleExpiryChange}
                  value={expiry}
                  required
                />
                
              </Form.Group>

              <Form.Group>
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter cvv"
                  pattern="[0-9]{3}"
                  onChange={handleCVVChange}
                  value={cvv}
                  required
                />
                
              </Form.Group>
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
                  Checkout{" "}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ecommerce;
