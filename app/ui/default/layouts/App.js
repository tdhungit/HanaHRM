import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';

import container from '../../../common/Container';

// Import layout
import ManagerLayout from "./ManagerLayout";
import HomeLayout from "./HomeLayout";

// Import custom router
import Public from '../pages/auth/Public';

// Import view
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import RecoverPassword from '../pages/auth/RecoverPassword';
import ResetPassword from '../pages/auth/ResetPassword';

class App extends Component {
    render() {
        const appProps = this.props;
        return (
            <Router>
                <div className="PenguinHRM">
                    {appProps.loading ? <div className="AppLoading">loading</div> : null}
                    <Switch>
                        <Public exact path="/signup" component={Signup} {...appProps} />
                        <Public exact path="/login" component={Login} {...appProps} />
                        <Route exact path="/recover-password" component={RecoverPassword}/>
                        <Route exact path="/reset-password/:token" component={ResetPassword}/>

                        <Route path="/manager" component={ManagerLayout} {...appProps}/>
                        <Route path="/" component={HomeLayout} {...appProps}/>
                    </Switch>
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
