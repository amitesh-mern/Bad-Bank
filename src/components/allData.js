import { Table, Card, Container, Tab, Tabs } from "react-bootstrap";
import React from "react";
import { useContext } from "react";
import { MyContext } from "./context";

function AllData() {
    const ctx = useContext(MyContext);
    return (
        <Container><br />
            <Card>
                <Tabs
                    defaultActiveKey="Users"
                    className="mb-3"
                >
                    <Tab eventKey="Users" title="Users">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ctx.details.Users.map((e, i) => <tr>{
                                        Object.values(e).map((j, k) => <th key={k}>{j}</th>)}
                                        <th>{ctx.details.Balance[i].amount}</th>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="Transactions" title="Transactions">
                    <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                    <th>Amount</th>
                                    <th>Balance</th>
                                    <th>Date/Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ctx.details.Transactions.map((e, i) => <tr>{
                                        Object.values(e).map((j, k) => <th key={k}>{j}</th>)}
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Card>
        </Container>
    );
}

export default AllData;