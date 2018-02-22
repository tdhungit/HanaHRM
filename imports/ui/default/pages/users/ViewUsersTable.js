import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Roles} from 'meteor/alanning:roles';
import {
    Table,
    Alert
} from 'reactstrap';
import BootstrapPaginator from 'react-bootstrap-pagination';

import {T} from '/imports/common/Translation';
import container from '/imports/common/Container';
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
                    <td>
                        <Link to={'/manager/users/' + user._id + '/detail'}>
                            {user.username}
                        </Link>
                    </td>
                    <td>{user.emails[0].address}</td>
                    <td>{user.hasOwnProperty('profile') ? user.profile.first_name : ''}</td>
                    <td>{user.hasOwnProperty('profile') ? user.profile.last_name : ''}</td>
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
            <div>
                <Table responsive hover>
                    <thead>
                    <tr>
                        <th><T>Username</T></th>
                        <th><T>Email</T></th>
                        <th><T>First name</T></th>
                        <th><T>Last name</T></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderUsers()}
                    </tbody>
                </Table>
                <BootstrapPaginator pagination={pagination} limit={limit} containerClass="text-right"/>
            </div>
        ) : <Alert color="warning"><T>No users yet.</T></Alert>
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
