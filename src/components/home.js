import React from "react";
import { useState, useContext } from "react";
import { MyContext } from "./context";
import { Card, Container } from 'react-bootstrap';
import BankImg from "./bank.png";

function Home() {
  const ctx = useContext(MyContext);
  let person = '';
  /* const person = ctx.details.login === "signedin" ? (ctx.details.current_user + '!') : null; */
  ctx.details.Users.forEach((item) => {
    for (const [key, value] of Object.entries(item)) {
      if (key === "user_id" && value === ctx.details.current_user) {
        person = item.name + '!';
      }
    }
  });
  return (
    <Container><br/>
      <Card>
        <br />
        <div className="jumbotron">
          <h1>WELCOME TO THE BANK {person}</h1>
          <p>
            For all your banking needs
          </p><br />
          <img src={BankImg} className="img-fluid" />
        </div>
      </Card>
    </Container>
  );
}

export default Home;