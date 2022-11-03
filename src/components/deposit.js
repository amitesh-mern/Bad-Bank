import { Button, Container, Form, Card } from "react-bootstrap";
import { useState, useContext } from "react";
import { MyContext } from "./context";

function Deposit() {
    const ctx = useContext(MyContext);
    const [amt, setamt] = useState(0.0);
    const [dep, setdep] = useState(true);

    let bal = 0.0;
    ctx.details.Balance.forEach((item) => {
        if (item.user_id === ctx.details.current_user) {
            bal = item.amount;
        }
    });

    return (
        <Container><br/>
            <Card>
                <div className="jumbotron">
                    <h1>DEPOSIT</h1><br />
                    <h3>Balance {'$' + bal}</h3>
                    <Form>
                        <Form.Group className="form-group" controlId="formBasicAmount">
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control type="amount" placeholder="0.00" onChange={(e) => {
                                setamt(e.target.value);
                                setdep(false);
                            }} />
                        </Form.Group><br />
                        <Button variant="primary" disabled= {dep} onClick={() => ctx.action({ type: 'deposit', payload: parseFloat(amt) })}>Deposit</Button>
                    </Form>
                </div>
            </Card>
        </Container>
    );
}

export default Deposit;