import React from "react";

const BankStaff = () => {
  return (
    <div style={{marginTop: "15px"}}>
      <div className="btn-group">
        <button className="btn">Open Account For Customer</button>
      </div>
      <br></br>

      <div className="btn-group">
        <button className="btn">Post Cash Deposit</button>
      </div>
      <br></br>

      <div className="btn-group">
        <button className="btn">Post Cash Withdrawal</button>
      </div>
      <br></br>
      <div className="btn-group">
        <button className="btn">Upload Passport to Db</button>
      </div>
      <br></br>
      <div className="btn-group">
        <button className="btn">fraud database</button>
      </div>
      <div className="btn-group">
        <button className="btn">fraud monitoring</button>
      </div>
    </div>
  );
};

export default BankStaff;
