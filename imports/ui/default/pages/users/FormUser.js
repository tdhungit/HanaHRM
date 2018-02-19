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
import {Link} from 'react-router-dom';

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

    componentWillMount() {
        const {
            user
        } = this.props;

        if (user && user._id) {
            user.email = user && user.emails && user.emails[0].address;
            user.first_name = user && user.profile && user.profile.first_name;
            user.last_name = user && user.profile && user.profile.last_name;
            this.setState({user: user});
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let user = this.state.user;
        user[name] = value;

        this.setState({user: user});
    }

    handleCreateUser() {
        const existingUser = this.props.user && this.props.user._id;
        const methodToCall = existingUser ? 'users.update' : 'users.insert';
        if (this.state.user.username && this.state.user.email) {
            Meteor.call(methodToCall, this.state.user, (error, userId) => {
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

        const existingUser = this.props.user && this.props.user._id;

        return (
            <Card>
                <CardHeader>
                    <strong>{title}</strong> {slogan}
                </CardHeader>
                <CardBody>
                    {this.state.error ? <Alert color="danger">{this.state.error}</Alert> : null}
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Username</T></Label>
                                <Input type="text" name="username" value={this.state.user.username} placeholder={t.__("Enter here")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Email</T></Label>
                                <Input type="text" name="email" value={this.state.user.email} placeholder={t.__("Enter here")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Password</T></Label>
                                <Input type="password" name="password" placeholder={t.__("Enter here")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">

                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>First name</T></Label>
                                <Input type="text" name="first_name" value={this.state.user.first_name} placeholder={t.__("Enter here")} onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Last name</T></Label>
                                <Input type="text" name="last_name" value={this.state.user.last_name} placeholder={t.__("Enter here")} onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <Button type="button" size="sm" color="primary" onClick={this.handleCreateUser}>
                        <i className="fa fa-dot-circle-o"></i> <T>{existingUser ? 'Update' : 'Create'}</T>
                    </Button>
                    <Button type="button" size="sm" color="danger">
                        {existingUser
                        ?
                            <Link to={'/manager/users/' + this.state.user._id + '/detail'}>
                                <i className="fa fa-ban"></i> <T>Cancel</T>
                            </Link>
                        :
                            <Link to={'/manager/users'}>
                                <i className="fa fa-ban"></i> <T>Cancel</T>
                            </Link>
                        }
                    </Button>
                </CardFooter>
            </Card>
        );
    }
}

FormUser.defaultProps = {
    title: null,
    slogan: null,
    user: {}
};

FormUser.propTypes = {
    title: PropTypes.string,
    slogan: PropTypes.string,
    user: PropTypes.object
};

export default withRouter(FormUser);
