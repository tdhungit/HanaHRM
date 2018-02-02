import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Container} from 'reactstrap';

import AppNavigation from '../components/AppNavigation';
import Sidebars from '../components/Sidebars';

import Dashboard from '../pages/dashboard/Dashboard';

import Users from '../pages/users/Users';

import Authenticate from '../pages/auth/Authenticate';
import Public from '../pages/auth/Public';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import RecoverPassword from '../pages/auth/RecoverPassword';
import ResetPassword from '../pages/auth/ResetPassword';

export default class ManagerLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const appProps = this.props;
        return (
            <div className="PenguinHRMManager">
                <AppNavigation {...appProps} />
                <main className="main">
                    <Container fluid>
                        <Route path="/manager" component={Sidebars} {...appProps}/>

                        <Route exact path="/manager" component={Dashboard} {...appProps}/>

                        <Authenticate exact path="/manager/users" component={Users} {...appProps} />

                        <Public exact path="/manager/signup" component={Signup} {...appProps} />
                        <Public exact path="/manager/login" component={Login} {...appProps} />

                        <Route exact path="/manager/recover-password" component={RecoverPassword}/>
                        <Route exact path="/manager/reset-password/:token" component={ResetPassword}/>
                    </Container>
                </main>
            </div>
        );
    }
}
