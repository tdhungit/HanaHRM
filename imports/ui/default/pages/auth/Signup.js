import React, {Component} from 'react';
import {withHistory} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
    Alert
} from 'reactstrap';
import {Accounts} from 'meteor/accounts-base';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirm: '',
            error: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSignup(event) {
        event.preventDefault();
        if (this.state.password.trim() == this.state.password_confirm.trim()) {
            Accounts.createUser({
                username: this.state.username.trim(),
                email: this.state.email.trim(),
                password: this.state.password.trim()
            }, (error) => {
                if (error) {
                    this.setState({error: error});
                } else {
                    this.props.history.push('/login');
                }
            });
        }
    }

    render() {
        return (
            <div className="auth-Signup app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <h1>Register</h1>
                                    <p className="text-muted">Create your account</p>
                                    {this.state.error ? <Alert color="danger">{this.state.error}</Alert> : null}
                                    <InputGroup className="mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="icon-user"></i>
                                            </span>
                                        </div>
                                        <Input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <Input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="icon-lock"></i>
                                            </span>
                                        </div>
                                        <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="icon-lock"></i>
                                            </span>
                                        </div>
                                        <Input type="password" name="password_confirm" placeholder="Repeat password" value={this.state.password_confirm} onChange={this.handleInputChange}/>
                                    </InputGroup>
                                    <Button color="success" block onClick={this.handleSignup}>Create Account</Button>
                                </CardBody>
                                <CardFooter className="p-4">
                                    <Row>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-facebook" block><span>facebook</span></Button>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-twitter" block><span>twitter</span></Button>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Signup;
