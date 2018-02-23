import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Meteor} from 'meteor/meteor';
import {
    Row,
    Col,
    Input,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import {Bert} from 'meteor/themeteorchef:bert';
import classnames from 'classnames';

import {T, t} from '/imports/common/Translation';

class ProfileUserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEdit: false,
            user: {
                username: '',
                email: '',
                first_name: '',
                last_name: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        const currentUser = Meteor.user();
        let user = this.state.user;
        user.username = currentUser.username;
        user.email = currentUser.emails && currentUser.emails[0].address;
        if (currentUser.profile && currentUser.profile.first_name) {
            user.first_name = currentUser.profile.first_name;
        }
        if (currentUser.profile && currentUser.profile.last_name) {
            user.last_name = currentUser.profile.last_name;
        }

        this.state.user = user;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let user = this.state.user;
        user[name] = value;

        this.setState({user: user});
    }

    saveUserInfo() {
        Meteor.call('users.update', this.state.user, (error, userId) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert(t.__('Update successful!'), 'success');
                this.setState({showEdit: false});
            }
        });
    }

    render() {
        return (
            <div className="ProfileUserInfo">
                <div className={classnames({'detail': true, hide: this.state.showEdit ? true : false})}>
                    <dl className="row">
                        <dt className="col-sm-2"><T>Username</T></dt>
                        <dd className="col-sm-4">{this.state.user.username}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-2"><T>Email</T></dt>
                        <dd className="col-sm-4">{this.state.user.email}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-2"><T>First name</T></dt>
                        <dd className="col-sm-4">{this.state.user.first_name}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-2"><T>Last name</T></dt>
                        <dd className="col-sm-4">{this.state.user.last_name}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-2"></dt>
                        <dd className="col-sm-4">
                            <Button type="button" size="sm" color="warning"
                                onClick={() => this.setState({showEdit: true})}><T>Edit</T></Button>
                        </dd>
                    </dl>
                </div>
                <div className={classnames({edit: true, hide: this.state.showEdit ? false : true})}>
                    <Row>
                        <Col>
                            <FormGroup row>
                                <Col md="3">
                                    <Label><T>Username</T></Label>
                                </Col>
                                <Col md="9">
                                    <Input type="text" name="username" value={this.state.user.username} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup row>
                                <Col md="3">
                                    <Label><T>Email</T></Label>
                                </Col>
                                <Col md="9">
                                    <Input type="text" name="email" value={this.state.user.email} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup row>
                                <Col md="3">
                                    <Label><T>First name</T></Label>
                                </Col>
                                <Col md="9">
                                    <Input type="text" name="first_name" value={this.state.user.first_name} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup row>
                                <Col md="3">
                                    <Label><T>Last name</T></Label>
                                </Col>
                                <Col md="9">
                                    <Input type="text" name="last_name" value={this.state.user.last_name} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3"></Col>
                        <Col md="9">
                            <Button type="button" size="sm" color="primary"
                                onClick={this.saveUserInfo.bind(this)}><T>Save</T></Button>
                            <Button type="button" size="sm" color="default"
                                onClick={() => this.setState({showEdit: false})}><T>Cancel</T></Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withRouter(ProfileUserInfo);
