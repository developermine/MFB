import React from "react";
import { Link } from "react-router-dom";

const BankCustomer = () => {
  const userData =
    JSON.parse(localStorage.getItem("userDataInformation")) || {};
  const {
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
  } = userData;
  return (
    <div style={{ marginTop: "15px" }}>
      <div style={{marginLeft: "800px", background: "black", color: "white"}}>
        <div>
          <p>
            <span>Hi </span>
            {firstname} - {lastname}
          </p>
        </div>
        <div>BALANCE: <b><i>NGN</i>{amount}</b></div>
        <Link to="/increaselimit"><button>Increase Limit</button></Link>
      </div>

      <div className="btn-group">
        <button className="btn"> Debit Account Transaction</button>
      </div>
      <br></br>

      <div className="btn-group">
        <button className="btn">View Account Statement</button>
      </div>
      <br></br>
      <div className="btn-group">
        <button className="btn">Upload Passport to Db</button>
      </div>
      <br></br>
      <div className="btn-group">
        <button className="btn">Change Card pin</button>
      </div>
      <br></br>
      <div className="btn-group">
        <Link to="/epayment"><button className="btn">E-payment form</button></Link>
      </div>
      <br></br>
      <div className="btn-group">
        <button className="btn">fraud Detection Alert</button>
      </div>
      <br></br>
      <div className="btn-group">
        <button
          className="btn"
          style={{ color: "black", backgroundColor: "white" }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default BankCustomer;
