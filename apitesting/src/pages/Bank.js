import React from "react";
import { Link } from "react-router-dom";

const Bank = () => {
  return (
    <div style={{marginTop: "15px"}}>
      <div className="btn-group">
        <Link to="/adminlogin"><button className="btn">Bank Admin</button></Link>
      </div>
      <br></br>

      <div className="btn-group">
        <Link to="/stafflogin"><button className="btn">Bank Staff</button></Link>
      </div>
    </div>
  );
};

export default Bank;
