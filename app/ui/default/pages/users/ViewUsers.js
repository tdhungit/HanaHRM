import React, {Component} from 'react';
import {
    Badge,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import Users from '/app/collections/Users';

class ViewUsers extends Component {
    renderUsers() {
        return this.props.users.map((user) => {
            return (
                <tr key={user._id}>
                    <td>{user.username}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="users-Users animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Simple Table
                            </CardHeader>
                            <CardBody className="card-body">
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Date registered</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderUsers()}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('allUsers');
    return {
        users: Users.find({}).fetch(),
    };
}, ViewUsers);
