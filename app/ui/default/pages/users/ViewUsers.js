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
    getUsers() {
        const users = Users.find({}).fetch();
        console.log(users);
        return {
            users: users
        }
    }

    render() {
        const users = this.getUsers();
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
