// import React, { useState } from "react";
// import { Container, Row, Form, Col, Alert } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// // import { useLoginMutation } from '../services/appApi';
// import "../Signup.css";

// const AdminLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   // const [login, {isError, isLoading, error} ] = useLoginMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // await login({email, password})
//   };

//   return (
//     <Container>
//       <Row>
//         <Col md={6} className="login__form--container">
//           <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
//             <h1>Login as Bank Administrator</h1>
//             {/* {isError && <Alert variant='danger'>{error.data}</Alert>} */}
//             <Form.Group>
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter account number"
//                 onChange={(e) => setUsername(e.target.value)}
//                 value={username}
//                 required
//               />
//             </Form.Group>
//             <br></br>
//             <Form.Group>
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 required
//               />
//             </Form.Group>
//             <br></br>
//             <Form.Group>
//               <Button
//                 type="submit"
//                 //  disabled={isLoading}
//               >
//                 Login{" "}
//               </Button>
//             </Form.Group>
//           </Form>
//         </Col>
//         <Col md={6} className="login__image--container"></Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminLogin;


import React, { useState } from "react";
import { Container, Row, Form, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "../Signup.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actual login logic here, for now, just redirect to /admindashboard
    history("/bankadmin");
  };

  // Function to generate random string of given length
  const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // Function to handle automatic login with random credentials
  const autoLogin = () => {
    const randomUsername = generateRandomString(8);
    const randomPassword = generateRandomString(10);

    // Save the generated credentials to local storage
    localStorage.setItem("adminCredentials", JSON.stringify({ username: randomUsername, password: randomPassword }));

    // Automatically submit the form with the generated credentials
    setUsername(randomUsername);
    setPassword(randomPassword);
    handleSubmit({ preventDefault: () => {} }); // Pass a fake event to trigger form submission
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1>Login as Bank Administrator</h1>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter account number"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Button type="submit">Login</Button>
            </Form.Group>
            <Form.Group>
              <Button variant="secondary" onClick={autoLogin}>
                Auto Login with Random Credentials
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6} className="login__image--container"></Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
