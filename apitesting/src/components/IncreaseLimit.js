import React from "react";
import { Button } from "react-bootstrap";

const IncreaseLimit = () => {
  return (
    <div>
      <h3>Increase Transaction Limiit</h3>
      <br />
      <div>
        <Button
          type="submit"
          //  disabled={isLoading}
        >
          Increase to 2000{" "}
        </Button>
      </div>
      <br />
      <div>
        <Button
          type="submit"
          //  disabled={isLoading}
        >
          Increase to 7000{" "}
        </Button>
      </div>
      <br />
      <div>
        <Button
          type="submit"
          //  disabled={isLoading}
        >
          Increase to 10000{" "}
        </Button>
      </div>
      <br />
      <div>
        <Button
          type="submit"
          //  disabled={isLoading}
        >
          Increase to 15000{" "}
        </Button>
      </div>
    </div>
  );
};

export default IncreaseLimit;
