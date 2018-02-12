import React, {Component} from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';
import {
    Alert,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import {T, t} from '/imports/common/Translation';

class FormUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            user: {
                username: '',
                email: '',
                password: '',
                first_name: '',
                last_name: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateUser = this.handleCreateUser.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let user = this.state.user;
        user[name] = value;

        this.setState({user: user});
    }

    handleCreateUser(event) {
        event.preventDefault();
        if (this.state.user.username && this.state.user.email && this.state.user.password) {
            Meteor.call('users.insert', this.state.user, (error, userId) => {
                if (error) {
                    this.setState({error: error.reason});
                } else {
                    this.props.history.push('/manager/users');
                }
            });
        } else {
            this.setState({error: t.__("Error Data Input!")});
        }
    }

    render() {
        const {
            title,
            slogan
        } = this.props;

        return (
            <Card>
                <CardHeader>
                    <strong>{title}</strong>
                    <small> {slogan}</small>
                </CardHeader>
                <CardBody>
                    {this.state.error ? <Alert color="danger">{this.state.error}</Alert> : null}
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Username</T></Label>
                                <Input type="text" name="username" placeholder={t.__("Enter username")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Email</T></Label>
                                <Input type="text" name="email" placeholder={t.__("Enter email")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Password</T></Label>
                                <Input type="password" name="password" placeholder={t.__("Enter password")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">

                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>First name</T></Label>
                                <Input type="text" name="first_name" placeholder={t.__("Enter first name")} onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Last name</T></Label>
                                <Input type="text" name="last_name" placeholder={t.__("Enter last name")} onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <Button type="button" size="sm" color="primary" onClick={this.handleCreateUser}>
                        <i className="fa fa-dot-circle-o"></i> <T>Create</T>
                    </Button>
                    <Button type="reset" size="sm" color="danger">
                        <i className="fa fa-ban"></i> <T>Reset</T>
                    </Button>
                </CardFooter>
            </Card>
        );
    }
}

FormUser.defaultProps = {
    title: null,
    slogan: null
};

FormUser.propTypes = {
    title: PropTypes.string,
    slogan: PropTypes.string
};

export default withRouter(FormUser);
