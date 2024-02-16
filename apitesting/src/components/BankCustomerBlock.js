import React, { useEffect, useState } from "react";
import { Badge, Button, Modal, Table } from "react-bootstrap";
// import { useSelector } from 'react-redux';
// import axios from '../axios';
// import Loading from './Loading';

const BankCustomerBlock = () => {
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
    const randomPassword = Math.random().toString(36).slice(2);
    setGeneratedPassword(randomPassword);

    localStorage.setItem(
      "userDataInformation",
      JSON.stringify({ ...userData, password: randomPassword })
    );
  };

  return (
    <>
      <div className="table-container">
        <div className="table-row header">
          <div className="table-cell">Accoun Number</div>
          <div className="table-cell">Email</div>
          <div className="table-cell">Name</div>
          <div className="table-cell">Last Name</div>
          <div className="table-cell">Other Name</div>
          <div className="table-cell">Type</div>
          <div className="table-cell">Activity</div>
          <div className="table-cell">Block</div>
          <div className="table-cell">Unblock</div>
        </div>
        <div className="table-row">
          <div className="table-cell">245345353553</div>
          <div className="table-cell">{email}</div>
          <div className="table-cell">{firstname}</div>
          <div className="table-cell">{lastname}</div>
          <div className="table-cell">{othername}</div>
          <div className="table-cell">{type}</div>
          <div className="table-cell">{activity}</div>
          <div className="table-cell">
            {" "}
            <Button size="sm" onClick={() => markgeneratedPassword()}>
              Block
            </Button>
          </div>
          <div className="table-cell">
            {" "}
            <Button size="sm" onClick={() => markgeneratedPassword()}>
              Unblock
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankCustomerBlock;




 {/* <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Bank Staff</th>
            <th>Account</th>
            <th>email</th>
            <th>first</th>
            <th>last</th>
            <th>block</th>
            <th>unblock</th>
            <th>type</th>
            <th>{""}</th>
            <th>activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{bankstaff}</td>
            <td>{account}</td>
            <td>{email}</td>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>
              <Button size="sm" onClick={() => markgeneratedPassword()}>
                Block
              </Button>
              {generatedPassword && (
                <>
                  <Badge bg="success">generated</Badge>
                  <div>{generatedPassword}</div>
                </>
              )}
            </td>
            <td>
              <Button size="sm" onClick={() => markgeneratedPassword()}>
                Unblock
              </Button>
              {generatedPassword && (
                <>
                  <Badge bg="success">generated</Badge>
                  <div>{generatedPassword}</div>
                </>
              )}
            </td>

            <td>{}</td>
            <td>{type}</td>
            <td>{}</td>
            <td>{type}</td>
          </tr>
        </tbody>
      </Table> */}
