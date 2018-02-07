import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';

import Users from '/imports/collections/Users/Users';
import ViewUsersTable from './ViewUsersTable';

export default class ViewUsers extends Component {
    constructor(props) {
        super(props);

        this.pagination = new Meteor.Pagination(Users, {
            name: 'users.paginatedList',
            filters: {},
            sort: {},
            perPage: 2,
            reactive: true,
            debug: false
        });
    }

    render() {
        const {
            pagination,
        } = this;

        return (
            <div className="users-Users animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Simple Table
                            </CardHeader>
                            <CardBody className="card-body">
                                <ViewUsersTable pagination={pagination}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
