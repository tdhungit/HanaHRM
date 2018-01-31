import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

import container from '../../../common/Container';

import AppNavigation from '../components/AppNavigation';

import Authenticate from '../pages/auth/Authenticate';
import Public from '../pages/auth/Public';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import RecoverPassword from '../pages/auth/RecoverPassword';
import ResetPassword from '../pages/auth/ResetPassword';

import Index from '../pages/index/Index';
import NotFound from '../pages/index/NotFound';

import Users from '../pages/users/Users';

class App extends Component {
    render() {
        const appProps = this.props;
        return (
            <Router>
                <div className="PenguinHRM">
                    {appProps.loading ? <div>loading</div> : null}
                    <AppNavigation {...appProps} />
                    <main className="main">
                        <Container fluid>
                            <Switch>
                                <Route exact name="index" path="/" component={Index} />
                                <Authenticate exact path="/users" component={Users} {...appProps} />
                                <Public path="/signup" component={Signup} {...appProps} />
                                <Public path="/login" component={Login} {...appProps} />
                                <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
                                <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
                                <Route component={NotFound} />
                            </Switch>
                        </Container>
                    </main>
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired,
    loggingIn: PropTypes.bool,
    authenticated: PropTypes.bool,
};

export default container((props, onData) => {
    const loggingIn = Meteor.loggingIn();
    const user = Meteor.user();
    const userId = Meteor.userId();
    const loading = !Roles.subscription.ready();

    onData(null, {
        loading,
        loggingIn,
        authenticated: !loggingIn && !!userId
    });
}, App);
