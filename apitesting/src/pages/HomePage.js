import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <Link to="/ecommerce">
        <button className="btn">E-commerce/Webcheckout</button>
      </Link>

      <Link to="pos">
        <button className="btn">Pos</button>
      </Link>
      <Link to="atm">
        <button className="btn">ATM</button>
      </Link>
    </div>
  );
};

export default HomePage;
