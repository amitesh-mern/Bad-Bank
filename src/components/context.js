import React from "react";

const dttm = new Date();
const init = { 
    "Users" : [{ "user_id" : 1, "name": "Amitesh", "email" : "amitesh@xyz.com", "password" : "Welcome123"}],
    "Balance" : [{"user_id" : 1, "amount" : 0}],
    "Transactions" : [{"trans_id" : 1, "name" : "Amitesh", "action": "New Account", "amount": 0, "balance": 0, "timestamp" : dttm.toLocaleDateString() + " @ " + dttm.toLocaleTimeString()}],
    "current_user" : 0
    };

export default init;
export const MyContext = React.createContext();