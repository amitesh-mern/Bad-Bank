import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import AllData from './components/allData';
import CreateAccount from './components/createAccount.js';
import Deposit from './components/deposit.js';
import Home from './components/home.js';
import Login from './components/login.js';
import Withdraw from './components/withdraw.js';
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { MyContext } from "./components/context.js";

function BankNavbar() {
  const ctx = useContext(MyContext);
  console.log(ctx);
  return (
    <>
      <BrowserRouter>
        <Navbar bg="primary" variant="dark">
        <LinkContainer to="/">
            <Navbar.Brand data-toggle="tooltip" data-placement="bottom" title="Click to go to the Home Page">Bad Bank</Navbar.Brand>
            </LinkContainer>
          <Container>
            <Nav className="me-auto">
              <LinkContainer to="/login/">
                <Nav.Link data-toggle="tooltip" data-placement="bottom" title="Click to go to the Login Page" disabled= {ctx.details.current_user > 0}>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/createAccount/">
                <Nav.Link data-toggle="tooltip" data-placement="bottom" title="Click to Register a new user" disabled= {ctx.details.current_user > 0}>Create Account</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/deposit/">
                <Nav.Link data-toggle="tooltip" data-placement="bottom" title="Page to Deposit money to your account" disabled= {ctx.details.current_user === 0}>Deposit</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/withdraw/">
                <Nav.Link data-toggle="tooltip" data-placement="bottom" title="Page to Withdraw money from your account" disabled= {ctx.details.current_user === 0}>Withdraw</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/allData/">
                <Nav.Link data-toggle="tooltip" data-placement="bottom" title="Click to view all User Accounts">All Data</Nav.Link>
              </LinkContainer>
            </Nav>
            <LinkContainer to="/">
              <Button onClick={() => ctx.action({ type: 'logout' })} data-placement="bottom" title="Click to Log Out" disabled= {ctx.details.current_user === 0}>Log Out</Button>
            </LinkContainer>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/createAccount/" element={<CreateAccount />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/allData/" element={<AllData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default BankNavbar;