import { Button, Container, Form, Card } from "react-bootstrap";
import { useState, useContext } from "react";
import { MyContext } from "./context.js";

function Login() {
    const ctx = useContext(MyContext);
    const [uid, setuid] = useState('');
    const [pwd, setpwd] = useState('');

    return (
        <Container><br/>
            <Card>
                <div className="jumbotron">
                    <h1>LOGIN</h1><br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setuid(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setpwd(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={() => ctx.action({ type: 'login', payload: { "uid": uid, "pwd": pwd } })}>Login</Button>
                    </Form>
                </div>
            </Card>
        </Container>
    );
}

export default Login;