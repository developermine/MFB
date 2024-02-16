import React from 'react'
import { Tab, Container, Row, Col,Nav } from 'react-bootstrap'
import BankStaffDash from '../components/BankStaffDash';
import AdminCustDash from '../components/AdminCustDash';
import { Link } from 'react-router-dom';
// import DashboardProducts from '../components/DashboardProducts'
// import { OrdersAdminPage } from '../components/OrdersAdminPage'
// import ClientsAdminPage from '../components/ClientsAdminPage'

const BankAdmin = () => {
  return (
   
    <Container>
    <Tab.Container defaultActiveKey="products">
        <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                         <Link to="/createbankstaff">Create Bank Staff Admin Password</Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Link to="/createcustomerpass">Create Customer Password</Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Link to="/createpin">Create Debit Card Pin</Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Link to="/blockandunblock">Block And Unblock</Link>
                    </Nav.Item>
                    <Nav.Item>
                         {/* <Nav.Link eventKey="fraud">fraud database</Nav.Link> */}
                         <Link to="/frauddatabase">fraud database</Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Link to="/fraudmonitoring">fraud monitoring</Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>
    </Tab.Container>
</Container>
  );
};

export default BankAdmin;
