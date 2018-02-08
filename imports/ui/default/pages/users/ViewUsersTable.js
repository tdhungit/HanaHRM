import React, {Component} from 'react';
import {Roles} from 'meteor/alanning:roles';
import PropTypes from 'prop-types';
import {
    Table,
    Alert
} from 'reactstrap';
import BootstrapPaginator from 'react-bootstrap-pagination';

import container from '../../layouts/Container';

import Loading from '../../components/Loading/Loading';

class ViewUsersTable extends Component {
    constructor(props) {
        super(props);
    }

    renderUsers() {
        const {
            users
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
            pagination,
            limit
        } = this.props;

        return users.length > 0 ? (
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
                <BootstrapPaginator pagination={pagination} limit={limit} containerClass="text-right"/>
            </div>
        ) : <Alert bsStyle="warning">No users yet.</Alert>
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
