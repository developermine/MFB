import React, { useEffect, useRef } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
// import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from "@mui/x-charts/PieChart";

import "./cell.css";

const FraudMonitoring = () => {
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

  return (
    <>
    <div><h1>Monitoring</h1></div>
      <div className="table-container">
        <div className="table-row header">
          <div className="table-cell">POS</div>
          <div className="table-cell">WEB</div>
          <div className="table-cell">ATM</div>
        </div>
        <React.Fragment>
          <div className="table-row">
            <div className="table-cell pos">Valid: {pos}</div>
            <div className="table-cell web">Valid: {web}</div>
            <div className="table-cell atm">Valid: {atm}</div>
          </div>
          <div className="table-row nested">
            <div className="table-cell pos">Fraud: {poss}</div>
            <div className="table-cell web">Fraud: {webb}</div>
            <div className="table-cell atm">Fraud: {atmm}</div>
          </div>
        </React.Fragment>
      </div>

      <div className="chart-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginRight: "20px" /* Adjust spacing as needed */ }}>
            <h3>Transaction Counts</h3>
            <BarChart
              xAxis={[{ scaleType: "band", data: ["POS", "WEB", "ATM"] }]}
              series={[
                { data: [pos, web, atm], stack: "A", label: "Valid" },
                { data: [poss, webb, atmm], stack: "B", label: "Fraudulent" },
              ]}
              width={500}
              height={300}
            />
          </div>
          {/* Pie Chart on the right */}
          <div>
            <h3>Volume of total Transaction</h3>
            {/* Render your Pie Chart component here */}
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: pos + poss, label: "POS" },
                    { id: 1, value: web + webb, label: "WEB" },
                    { id: 2, value: atm + atmm, label: "ATM" },
                  ],
                },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FraudMonitoring;
