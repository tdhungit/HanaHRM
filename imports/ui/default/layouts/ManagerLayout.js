import React, {Component} from 'react';
import {Container} from 'reactstrap';

import Authenticate from '../components/Router/Authenticate';
import Header from '../components/Header/Header';
import AppNavigation from '../components/Navigation/AppNavigation';
import Sidebar from '../components/Sidebar/Sidebar';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';

import Dashboard from '../pages/dashboard/Dashboard';

import ViewUsers from '../pages/users/ViewUsers';
import CreateUser from '../pages/users/CreateUser';

import CreateMainMenu from '../pages/main_menus/CreateMainMenu';
import ViewMainMenu from '../pages/main_menus/ViewMainMenus';

class ManagerLayout extends Component {
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
                        <Breadcrumb/>
                        <Container fluid>
                            <Authenticate exact path="/manager" component={Dashboard} {...appProps}/>

                            <Authenticate exact path="/manager/users" component={ViewUsers} {...appProps} />
                            <Authenticate exact path="/manager/users/create" component={CreateUser} {...appProps} />
                            <Authenticate exact path="/manager/main-menus" component={ViewMainMenu} {...appProps}/>
                            <Authenticate exact path="/manager/main-menus/create" component={CreateMainMenu} {...appProps}/>
                        </Container>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default  ManagerLayout;
