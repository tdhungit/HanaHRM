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
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="auth-Login app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <InputGroup className="mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="icon-user"></i>
                                                </span>
                                            </div>
                                            <Input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="icon-lock"></i>
                                                </span>
                                            </div>
                                            <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" className="px-4">Login</Button>
                                            </Col>
                                            <Col xs="6" className="text-right">
                                                <Button color="link" className="px-0">
                                                    <Link to="/recover-password">Forgot password?</Link>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: 44 + '%'}}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>New Employee please contact with administrator</p>
                                            <Button color="primary" className="mt-3" active>
                                                <Link to="/signup">Register Now!</Link>
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;
