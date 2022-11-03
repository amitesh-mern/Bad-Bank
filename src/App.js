import './App.css';
import React, { useState } from "react";
import BankNavbar from './navbar';
import { useReducer } from "react";
import init from './components/context';
import { MyContext } from './components/context';

function App() {

  const [show, setShow] = useState(true);
  const [details, dispatch] = useReducer(Reducer, init);

  /* useReducer cannot be put inside the context,js because we don't have another function there
  and useReducer cannot be written outside a function at the top. And Reducer function always needs to be written
  where you wrtie useReducer, and then you can pass the "dispatch" to the child components using Context */
  function Reducer(state, action) {

    const newUserID = state.Users[Object.keys(state.Users)[Object.keys(state.Users).length - 1]].user_id + 1;
    const newTxnID = state.Transactions[Object.keys(state.Transactions)[Object.keys(state.Transactions).length - 1]].trans_id + 1;
    const dttm = new Date();
    let newRow = { ...state };
    let name = '';
    /* const person = ctx.details.login === "signedin" ? (ctx.details.current_user + '!') : null; */
    newRow.Users.forEach((item) => {
      for (const [key, value] of Object.entries(item)) {
        if (key === "user_id" && value === newRow.current_user) {
          name = item.name;
        }
      }
    });
    switch (action.type) {
      case 'login':
        console.log('login');
        let [currUser, Userfnd] = [0, 0];
        state.Users.forEach((item) => {
          if (item.email === action.payload.uid) {
            Userfnd = 1;
            if (action.payload.pwd === item.password) {
              alert('Welcome ' + item.name + '!');
              currUser = item.user_id;
            }
            else alert('User ID / Password is not correct');
          }
        });
        if (Userfnd === 0) alert('User ID / Password is not correct');
        return { ...state, "current_user": currUser };

      case 'logout':
        console.log('logout');
        alert('You are Logged Out!');
        return { ...state, "current_user": 0 };

      case 'deposit':
        console.log('deposit');
        if (isNaN(action.payload) || (action.payload < 1)) alert('Please enter a valid positive number')
        else {
          newRow.Balance.forEach((item) => {
            if (item.user_id === state.current_user) {
              item.amount = Math.round((item.amount + action.payload) * 100) / 100;
              newRow.Transactions.push({ "trans_id": newTxnID, "name": name, "action": "Deposit", "amount": action.payload, "balance": item.amount, "timestamp": dttm.toLocaleDateString() + " @ " + dttm.toLocaleTimeString() })
            }
          });
          alert('Amount Successfully Deposited!');
        }
        return { ...state, newRow };


      case 'withdraw':
        console.log('withdraw');
        if (isNaN(action.payload) || (action.payload < 1)) alert('Please enter a valid positive number')
        else {
          newRow.Balance.forEach((item) => {
            if (item.user_id === state.current_user) {
              if ((item.amount - action.payload) < 0) alert('You cannot withdraw more than available balance')
              else {
                item.amount = Math.round((item.amount - action.payload) * 100) / 100;
                newRow.Transactions.push({ "trans_id": newTxnID, "name": name, "action": "Withdraw", "amount": action.payload, "balance": item.amount, "timestamp": dttm.toLocaleDateString() + " @ " + dttm.toLocaleTimeString() })
                alert('Amount Successfully Withdrawn!');
              }
            }
          });
        }

        return { ...state, newRow };

      case 'create':
        console.log(action.payload);
        /* find user_id of the last user created and then increment */
        if (action.payload.name === '') alert('Please enter a name')
        else {
          if (action.payload.uid === '') alert('Please enter an email ID')
          else {
            if (action.payload.pwd.length < 8) alert('Please enter a Password that is atleast 8 characters long')
            else {
              alert('Successfully Created Account, please login to access your account!');

              newRow.Users.push({ "user_id": newUserID, "name": action.payload.name, "email": action.payload.uid, "password": action.payload.pwd });
              newRow.Balance.push({ "user_id": newUserID, "amount": 0 });
              newRow.Transactions.push({ "trans_id": newTxnID, "name": action.payload.name, "action": "New Account", "amount": 0, "balance": 0, "timestamp": dttm.toLocaleDateString() + " @ " + dttm.toLocaleTimeString() })
            }
          }
        }
        return { ...state, newRow };
    }
  };

  return (
    <>
      <MyContext.Provider value={{ details, "action": dispatch }}>
        <BankNavbar />
      </MyContext.Provider>
    </>
  );
}

export default App;
