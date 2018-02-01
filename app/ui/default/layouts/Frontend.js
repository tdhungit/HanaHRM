import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import container from '../../../common/Container';

import Index from '../pages/index/Index';
import NotFound from '../pages/index/NotFound';

class Frontend extends Component {
    render() {
        const appProps = this.props;
        return (
            <div className="PenguinHRM">
                {appProps.loading ? <div className="AppLoading">loading</div> : null}
                <main className="main">
                    <Switch>
                        <Route exact path="/" component={Index}/>

                        <Route component={NotFound}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

Frontend.propTypes = {
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
}, Frontend);
