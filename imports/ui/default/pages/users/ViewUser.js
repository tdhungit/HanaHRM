import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import PropTypes from 'prop-types';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';
import {Link} from 'react-router-dom';

import container from '../../layouts/Container';
import {T, t, PT} from '/imports/common/Translation';
import Users from '/imports/collections/Users/Users';

class ViewUser extends Component {
    render() {
        const {
            user
        } = this.props;

        return (
            <div className="users-ViewUser animated fadeIn">
                <PT title={user.username}/>
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-user"></i>
                                <strong><T>View user</T></strong> {user.username}
                                <div className="card-actions">
                                    <Link to={'/manager/users/' + user._id + '/edit'}>
                                        <small className="text-muted"><T>Edit</T></small>
                                    </Link>
                                </div>
                            </CardHeader>
                            <CardBody className="detail">
                                <dl className="row">
                                    <dt className="col-sm-2"><T>Username</T></dt>
                                    <dd className="col-sm-4">{user.username}</dd>
                                    <dt className="col-sm-2"><T>Email</T></dt>
                                    <dd className="col-sm-4">{user.emails[0].address}</dd>
                                </dl>
                                <dl className="row">
                                    <dt className="col-sm-2"><T>First name</T></dt>
                                    <dd className="col-sm-4">{user.profile && user.profile.first_name}</dd>
                                    <dt className="col-sm-2"><T>Last name</T></dt>
                                    <dd className="col-sm-4">{user.profile && user.profile.last_name}</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

ViewUser.defaultProps = {
    user: {}
};

ViewUser.propTypes = {
    user: PropTypes.object
};

export default container((props, onData) => {
    const userId = props.match.params._id;
    const subscription = Meteor.subscribe('users.detail', userId);
    if (subscription.ready()) {
        onData(null, {
            user: Users.findOne(userId)
        });
    }
}, ViewUser);

