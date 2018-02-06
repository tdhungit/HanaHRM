import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Container} from 'reactstrap';

import AppNavigation from '../components/AppNavigation';
import Sidebars from '../components/Sidebars';

import Dashboard from '../pages/dashboard/Dashboard';

import Users from '../pages/users/Users';

import Authenticate from '../pages/auth/Authenticate';
import Public from '../pages/auth/Public';

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
                    </Container>
                </main>
            </div>
        );
    }
}
