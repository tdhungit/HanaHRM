import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import PropTypes from 'prop-types';
import {
    Table
} from 'reactstrap';
import BootstrapPaginator from 'react-bootstrap-pagination';

import container from '../../layouts/Container';

import Loading from '../../components/Loading/Loading';

class ViewUsersTable extends Component {
    renderUsers() {
        const {
            users,
            pagination
        } = this.props;

        return users.map((user) => {
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
        const {
            users,
            pagination
        } = this.props;

        return (
            <div className="animated fadeIn">
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
                <BootstrapPaginator pagination={pagination} limit={2} containerClass="text-right"/>
            </div>
        );
    }
}

ViewUsersTable.defaultProps = {
    users: [],
    pagination: null
};

ViewUsersTable.propTypes = {
    users: PropTypes.array,
    pagination: PropTypes.object
};

export default container((props, onData) => {
    if (props.pagination.ready()) {
        const users = props.pagination.getPage();
        const totalPages = props.pagination.totalPages();
        onData(null, {users, totalPages});
    }
}, ViewUsersTable, {loadingHandler: () => <Loading/>});
