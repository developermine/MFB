import React, { useEffect, useState } from "react";
import { Badge, Button, Modal, Table } from "react-bootstrap";
// import { useSelector } from 'react-redux';
// import axios from '../axios';
// import Loading from './Loading';

const DebitCard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderToShow, setOrderToShow] = useState([]);
  const [show, setShow] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleClose = () => setShow(false);

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
    activity,
  } = userData;

  const markgeneratedPassword = () => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomPassword = Array.from({ length: 4 }, () => digits[Math.floor(Math.random() * 10)]).join(''); // Generate 4 random digits
    setGeneratedPassword(randomPassword);
  };

  return (
    <>
      <div className="table-container">
        <div className="table-row header">
          <div className="table-cell">Accoun Number</div>

          <div className="table-cell">Name</div>
          <div className="table-cell">Last Name</div>
          <div className="table-cell">Other Name</div>
          <div className="table-cell">Type</div>
          <div className="table-cell">Debit Card Details</div>
          <div className="table-cell">Pin</div>
        </div>
        <div className="table-row">
          <div className="table-cell">245345353553</div>
          <div className="table-cell">{firstname}</div>
          <div className="table-cell">{lastname}</div>
          <div className="table-cell">{othername}</div>
          <div className="table-cell">{type}</div>
          <div className="table-cell">2323***435</div>

          <div className="table-cell">
            {" "}
            <Button size="sm" onClick={() => markgeneratedPassword()}>
              Generate Debit card PIN
            </Button>
            {generatedPassword && (
              <>
                <Badge bg="success">generated</Badge>
                <div>{generatedPassword}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DebitCard;
