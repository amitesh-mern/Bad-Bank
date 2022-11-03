import { Button, Container, Form, Card } from "react-bootstrap";
import { useState, useContext } from "react";
import { MyContext } from "./context";
import { useReducer } from "react";

function CreateAccount() {
    const ctx = useContext(MyContext);
    const [name, setname] = useState('');
    const [uid, setuid] = useState('');
    const [pwd, setpwd] = useState('');
    const [dis, setdis] = useState(true);

    return (
        <Container><br/>
            <Card>
                <div className="jumbotron">
                    <h1>CREATE ACCOUNT</h1><br />
                    <Form>
                        <Form.Group className="form-group" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" onChange={(e) => {
                                setname(e.target.value);
                                setdis(false);}
                            } />
                        </Form.Group><br />

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                                setuid(e.target.value);
                                setdis(false);}
                                } />
                        </Form.Group><br />

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => {
                                setpwd(e.target.value);
                                setdis(false);}                            
                        } />
                        </Form.Group>

                        <Button variant="primary" disabled= {dis} onClick={() => ctx.action({ type: 'create', payload: { "name": name, "uid": uid, "pwd": pwd } })}>Register</Button>
                    </Form>
                </div>
            </Card>
        </Container>
    );
}

export default CreateAccount;