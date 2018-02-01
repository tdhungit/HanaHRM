import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import {Container} from 'reactstrap';

import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';

import container from '../../../common/Container';

import AppNavigation from '../components/AppNavigation';

import Authenticate from '../pages/auth/Authenticate';
import Public from '../pages/auth/Public';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import RecoverPassword from '../pages/auth/RecoverPassword';
import ResetPassword from '../pages/auth/ResetPassword';

import Dashboard from '../pages/dashboard/Dashboard';
import NotFound from '../pages/index/NotFound';

import Users from '../pages/users/Users';

class App extends Component {
    render() {
        const appProps = this.props;
        return (
            <div className="PenguinHRMManager">
                {appProps.loading ? <div className="AppLoading">loading</div> : null}
                <AppNavigation {...appProps} />
                <main className="main">
                    <Container fluid>
                        <Switch>
                            <Route exact path="/manager" component={Dashboard}/>

                            <Authenticate path="/manager/users" component={Users} {...appProps} />

                            <Public path="/manager/signup" component={Signup} {...appProps} />
                            <Public path="/manager/login" component={Login} {...appProps} />

                            <Route path="/manager/recover-password" component={RecoverPassword}/>
                            <Route path="/manager/reset-password/:token" component={ResetPassword}/>

                            <Route component={NotFound}/>
                        </Switch>
                    </Container>
                </main>
            </div>
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
