import React, { useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";

// import "./BankStaffDash.css";
import "./cell.css";

const BankStaffDash = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");

  const staffData =
    JSON.parse(localStorage.getItem("staffDataInformation")) || {};
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
  } = staffData;

  const markgeneratedPassword = () => {
    const randomPassword = Math.random().toString(36).slice(2);
    setGeneratedPassword(randomPassword);

    localStorage.setItem(
      "staffDataInformation",
      JSON.stringify({ ...staffData, password: randomPassword })
    );
  };
  return (
    <div className="table-container">
      <div className="table-row header">
        <div className="table-cell">Image</div>
        <div className="table-cell">ID</div>
        <div className="table-cell">Join</div>
        <div className="table-cell">Name</div>
        <div className="table-cell">Last Name</div>
        <div className="table-cell">Other Name</div>
        <div className="table-cell">Email</div>
        <div className="table-cell">Password</div>
      </div>
      <div className="table-row">
        <div className="table-cell">{/* <img src={Image} alt=""  /> */}</div>
        <div className="table-cell">245345353553</div>
        <div className="table-cell">24-May-2023</div>
        <div className="table-cell">{firstname}</div>
        <div className="table-cell">{lastname}</div>
        <div className="table-cell">{othername}</div>
        <div className="table-cell">{email}</div>
        <div className="table-cell">
          {" "}
          <Button size="sm" onClick={() => markgeneratedPassword()}>
            generate Customer Password
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
  );
};

export default BankStaffDash;

// <Table striped bordered hover responsive>
//   <thead>
//     <tr>
//       <th></th>
//       {/* <th>ID</th>
//       <th>Date Join</th> */}
//       <th>Name</th>
//       <th>Last</th>
//       <th>Other</th>
//       <th>Email</th>
//       <th>Password</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>
//         <img src="/" alt="" className="dashboard-product-preview" />
//       </td>
//       <td>{firstname}</td>
//       <td>{lastname}</td>
//       <td>{othername}</td>
//       <td>{email}</td>
//       <td></td>
//       <td>
//         <Button size="sm" onClick={() => markgeneratedPassword()}>
//           generate Customer Password
//         </Button>
//         {generatedPassword && (
//           <>
//             <Badge bg="success">generated</Badge>
//             <div>{generatedPassword}</div>
//           </>
//         )}
//       </td>
//     </tr>
//   </tbody>
// </Table>
