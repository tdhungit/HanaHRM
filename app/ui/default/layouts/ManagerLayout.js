import React, {Component} from 'react';
import {Container} from 'reactstrap';

// Import component
import Authenticate from '../components/Router/Authenticate';
import Header from '../components/Header/Header';
import AppNavigation from '../components/Navigation/AppNavigation';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

import Dashboard from '../pages/dashboard/Dashboard';

import Users from '../pages/users/Users';

export default class ManagerLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const appProps = this.props;
        return (
            <div className="PenguinHRMManager app">
                <Header/>
                <div className="app-body">
                    <AppNavigation {...appProps} />
                    <Sidebar {...appProps}/>
                    <main className="main">
                        <Container fluid>
                            <Authenticate exact path="/manager" component={Dashboard} {...appProps}/>
                            <Authenticate exact path="/manager/users" component={Users} {...appProps} />
                        </Container>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}
