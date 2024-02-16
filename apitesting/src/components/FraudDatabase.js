import React from "react";
import { Table } from "react-bootstrap";
import "./cell.css";

const FraudDatabase = () => {
  const posData = JSON.parse(localStorage.getItem("posActivities")) || {};
  const { result } = posData;

  const webData = JSON.parse(localStorage.getItem("webActivities")) || {};
  const { webResult } = webData;

  const atmData = JSON.parse(localStorage.getItem("atmActivities")) || {};
  const {atmResult} = atmData;



  const posDataValid = JSON.parse(localStorage.getItem("posCountValid")) || {};
  const { pos } = posDataValid;
  const posDataFraud =
    JSON.parse(localStorage.getItem("possCountFraudulent")) || {};
  const { poss } = posDataFraud;

  const webDataValid = JSON.parse(localStorage.getItem("webCountValid")) || {};
  const { web } = webDataValid;
  const webDataFraud =
    JSON.parse(localStorage.getItem("webbCountFraudulent")) || {};
  const { webb } = webDataFraud;

  const atmDataValid = JSON.parse(localStorage.getItem("atmCountValid")) || {};
  const { atm } = atmDataValid;
  const atmDataFraud =
    JSON.parse(localStorage.getItem("atmmCountFraudulent")) || {};
  const { atmm } = atmDataFraud;

//   console.log(posData)
  return (
    <>
    <div><h1>Recent Transaction</h1></div>
      <div className="table-container">
        <div className="table-row header">
          <div className="table-cell">POS</div>
          <div className="table-cell">WEB</div>
          <div className="table-cell">ATM</div>
        </div>
        <div className="table-row">
          <div className="table-cell">{result}</div>
          <div className="table-cell">{webResult}</div>
          <div className="table-cell">{atmResult}</div>
        </div>
      </div>

      <div><h2>Total Transaction in the counter</h2></div>

      <div className="table-container">
        <div className="table-row header">
          <div className="table-cell">POS</div>
          <div className="table-cell">WEB</div>
          <div className="table-cell">ATM</div>
        </div>
        <div className="table-row">
          <div className="table-cell">{pos + poss}</div>
          <div className="table-cell">{web + webb}</div>
          <div className="table-cell">{atm + atmm}</div>
        </div>
      </div>
    </>
  );
};

export default FraudDatabase;
