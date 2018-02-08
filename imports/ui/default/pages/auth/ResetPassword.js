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

class ResetPassword extends Component {
    render() {
        return (
            <div className="auth-ResetPassword app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <h1>Reset Password</h1>
                                    <p className="text-muted">Reset password your account</p>
                                    <InputGroup className="mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="icon-lock"></i>
                                            </span>
                                        </div>
                                        <Input type="password" placeholder="Password"/>
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="icon-lock"></i>
                                            </span>
                                        </div>
                                        <Input type="password" placeholder="Repeat password"/>
                                    </InputGroup>
                                    <Button color="success" block>Change Password</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ResetPassword;
