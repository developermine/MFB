import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AtmVerification = () => {
  return (
    <div>
      {" "}
      <h1>AtmVerification</h1>
      <Link to="/">
        <Button
          variant="primary"
          type="submit"
          //  disabled={isLoading}
        >
          Complete the Biometric verification on the machine{" "}
        </Button>
      </Link>
    </div>
  );
};

export default AtmVerification;
