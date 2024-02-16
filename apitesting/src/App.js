
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Bank from "./pages/Bank";
import Navbar from "./components/layout/Navbar";
import Login from "./components/Login";
import BankAdmin from "./pages/BankAdmin";
import BankStaff from "./pages/BankStaff";
import BankCustomer from "./pages/BankCustomer";
import SignupCustomer from "./pages/SignupCustomer";
import AdminLogin from "./components/layout/AdminLogin";
import StaffLogin from "./components/layout/StaffLogin";
import HomePage from "./pages/HomePage";
import StaffSignup from "./components/layout/StaffSignup";
import Ecommerce from "./components/mock/Ecommerce";
import POS from "./components/mock/POS";
import ATM from "./components/mock/ATM";
import BankStaffDash from "./components/BankStaffDash";
import AdminCustDash from "./components/AdminCustDash";
import BankCustomerBlock from "./components/BankCustomerBlock";
import FraudDatabase from "./components/FraudDatabase";
import DebitCard from "./components/DebitCard";
import FraudMonitoring from "./components/FraudMonitoring";
import EpaymentForm from "./components/EpaymentForm";
import Verification from "./components/Verification";
import AtmVerification from "./components/AtmVerification";
import IncreaseLimit from "./components/IncreaseLimit";

function App() {
  // const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/bank" element={<Bank />} />
        
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/bankadmin" element={<BankAdmin />} />
        <Route path="/bankstaff" element={<BankStaff />} />
        <Route path="/signupstaff" element={<StaffSignup />} />


        <Route path="/bankcustomer" element={<BankCustomer />} />
        <Route path="/signupcustomer" element={<SignupCustomer />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/stafflogin" element={<StaffLogin />} />


        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/atm" element={<ATM />} />

        <Route path="/createbankstaff" element={<BankStaffDash />} />
        <Route path="/createcustomerpass" element={<AdminCustDash />} />
        <Route path="/blockandunblock" element={<BankCustomerBlock />} />
        <Route path="/createpin" element={<DebitCard />} />
        <Route path="/epayment" element={<EpaymentForm />} />

        <Route path="/verification" element={<Verification />} />
        <Route path="/atmverification" element={<AtmVerification />} />

        <Route path="/increaselimit" element={<IncreaseLimit />} />



        <Route path="/frauddatabase" element={<FraudDatabase />} />
        <Route path="/fraudmonitoring" element={<FraudMonitoring />} />

        
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

