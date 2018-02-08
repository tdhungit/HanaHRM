import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    CardGroup,
    Card, CardBody,
    Button,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

class RecoverPassword extends Component {
    render() {
        return (
            <div className="auth-RecoverPassword app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <h1>Recover Password</h1>
                                    <p className="text-muted">Forgot Password</p>
                                    <InputGroup className="mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <Input type="text" placeholder="Email"/>
                                    </InputGroup>
                                    <Button color="success" block>Send</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RecoverPassword;
