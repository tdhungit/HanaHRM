import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Input,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

import {T, t} from '/imports/common/Translation';

class ViewProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'activities',
            user: {}
        };

        this.toggle = this.toggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
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

    render() {
        const currentUser = Meteor.user();

        return (
            <div className="users-ViewProfile animated fadeIn">
                <Row>
                    <Col xs="12" md="3" className="mb-3">
                        <Card>
                            <CardBody>
                                <img src={Meteor.absoluteUrl('img/avatars/6.jpg')} className="rounded img-profile" alt={currentUser.username}/>
                                <h3 className="text-center">
                                    {currentUser.profile && currentUser.profile.first_name} {currentUser.profile && currentUser.profile.last_name}
                                </h3>
                                <p className="text-center">{currentUser.emails[0].address}</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="9" className="mb-9">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === 'activities'})}
                                    onClick={() => {
                                        this.toggle('activities');
                                    }}>
                                    <T>Activities</T>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === 'timeline'})}
                                    onClick={() => {
                                        this.toggle('timeline');
                                    }}>
                                    <T>Timeline</T>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === 'userinfo'})}
                                    onClick={() => {
                                        this.toggle('userinfo');
                                    }}>
                                    <T>User Info</T>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === 'settings'})}
                                    onClick={() => {
                                        this.toggle('settings');
                                    }}>
                                    <T>Settings</T>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="activities">
                                <div className="post">
                                    <div className="user-block">
                                        <img src={Meteor.absoluteUrl('img/avatars/6.jpg')} className="img-avatar" alt={currentUser && currentUser.emails[0].address}/>
                                        <span className="username">{currentUser.username}</span>
                                        <span className="description">description</span>
                                        <div className="post-detail">Activity</div>
                                        <ul className="list-inline">
                                            <li>
                                                <a href="#" className="link-black text-sm">
                                                    <i className="fa fa-share margin-r-5"></i> Share
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="link-black text-sm">
                                                    <i className="fa fa-thumbs-o-up margin-r-5"></i> Like
                                                </a>
                                            </li>
                                            <li className="pull-right">
                                                <a href="#" className="link-black text-sm">
                                                    <i className="fa fa-comments-o margin-r-5"></i> Comments (5)
                                                </a>
                                            </li>
                                        </ul>
                                        <Input bsSize="sm" type="text" placeholder="Type a comment"/>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="timeline">
                                <ul className="timeline timeline-inverse">
                                    <li className="time-label">
                                        <span className="bg-red">
                                          10 Feb. 2014
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope bg-blue"></i>

                                        <div className="timeline-item">
                                            <span className="time"><i className="fa fa-clock-o"></i> 12:05</span>

                                            <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                            <div className="timeline-body">
                                                accepted your friend request
                                            </div>
                                            <div className="timeline-footer">
                                                <a className="btn btn-primary btn-sm">Read more</a>
                                                <a className="btn btn-danger btn-sm">Delete</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-user bg-cyan"></i>

                                        <div className="timeline-item">
                                            <span className="time"><i className="fa fa-clock-o"></i> 5 mins ago</span>

                                            <h3 className="timeline-header no-border">
                                                <a href="#">Sarah Young</a> accepted your friend request
                                            </h3>
                                        </div>
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane tabId="userinfo">
                                <div className="detail">
                                    <dl className="row">
                                        <dt className="col-sm-2"><T>Username</T></dt>
                                        <dd className="col-sm-4">{currentUser.username}</dd>
                                    </dl>
                                    <dl className="row">
                                        <dt className="col-sm-2"><T>Email</T></dt>
                                        <dd className="col-sm-4">{currentUser.emails[0].address}</dd>
                                    </dl>
                                    <dl className="row">
                                        <dt className="col-sm-2"><T>First name</T></dt>
                                        <dd className="col-sm-4">{currentUser.profile && currentUser.profile.first_name}</dd>
                                    </dl>
                                    <dl className="row">
                                        <dt className="col-sm-2"><T>Last name</T></dt>
                                        <dd className="col-sm-4">{currentUser.profile && currentUser.profile.last_name}</dd>
                                    </dl>
                                </div>
                            </TabPane>
                            <TabPane tabId="settings">
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs="12" lg="12">
                                                <FormGroup row>
                                                    <Col md="3">
                                                        <Label><T>Username</T></Label>
                                                    </Col>
                                                    <Col xs="12" md="9">
                                                        <Input type="text" name="username" value={currentUser.username} onChange={this.handleInputChange}/>
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" lg="12">
                                                <FormGroup row>
                                                    <Col md="3">
                                                        <Label><T>Email</T></Label>
                                                    </Col>
                                                    <Col xs="12" md="9">
                                                        <Input type="text" name="username" value={currentUser.emails[0].address} onChange={this.handleInputChange}/>
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <Button type="button" size="sm" color="primary">
                                            <i className="fa fa-dot-circle-o"></i> <T>Save</T>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ViewProfile;
