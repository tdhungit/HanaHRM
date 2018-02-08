import React, {Component} from 'react';
import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            user: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateUser = this.handleCreateUser.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        var user = this.state.user;
        user[name] = value;

        this.setState({user: user});
    }

    handleCreateUser(event) {
        event.preventDefault();
        if (this.state.user.username && this.state.user.password) {
            Accounts.createUser(this.state.user, (error) => {
                if (error) {
                    this.setState({error: error});
                } else {
                    this.props.history.push('/manager/users');
                }
            });
        }
    }

    render() {
        return (
            <div className="users-CreateUser animated fadeIn">
                {this.state.error}
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <strong>Profile</strong>
                                <small> Form</small>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" lg="6">
                                        <FormGroup>
                                            <Label>Username</Label>
                                            <Input type="text" name="username" placeholder="Enter username" onChange={this.handleInputChange} required/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="6">
                                        <FormGroup>
                                            <Label>Email</Label>
                                            <Input type="text" name="email" placeholder="Enter email" onChange={this.handleInputChange} required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" lg="6">
                                        <FormGroup>
                                            <Label>Password</Label>
                                            <Input type="password" name="password" placeholder="Enter password" onChange={this.handleInputChange} required/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="6">
                                        <FormGroup>
                                            <Label>Facebook</Label>
                                            <Input type="text" name="facebook" placeholder="Enter facebook" onChange={this.handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button type="button" size="sm" color="primary" onClick={this.handleCreateUser}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CreateUser;
