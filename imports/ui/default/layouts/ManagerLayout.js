import React, {Component} from 'react';
import {Container} from 'reactstrap';

import Authenticate from '../components/Router/Authenticate';
import Header from '../components/Header/Header';
import AppNavigation from '../components/Navigation/AppNavigation';
import Sidebar from '../components/Sidebar/Sidebar';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';

import Dashboard from '../pages/dashboard/Dashboard';
import ViewProfile from '../pages/users/ViewProfile';

import ViewUsers from '../pages/users/ViewUsers';
import ViewUser from '../pages/users/ViewUser';
import CreateUser from '../pages/users/CreateUser';
import EditUser from '../pages/users/EditUser';

import CreateMainMenu from '../pages/main_menus/CreateMainMenu';
import ViewMainMenus from '../pages/main_menus/ViewMainMenus';
import EditMainMenu from '../pages/main_menus/EditMainMenu';

class ManagerLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const appProps = this.props;
        return (
            <div className="PenguinHRMManager app">
                <Header {...appProps}/>
                <div className="app-body">
                    <AppNavigation {...appProps}/>
                    <Sidebar {...appProps}/>
                    <main className="main">
                        <Breadcrumb/>
                        <Container fluid>
                            <Authenticate exact path="/manager" component={Dashboard} {...appProps}/>
                            <Authenticate exact path="/manager/me" component={ViewProfile} {...appProps}/>

                            <Authenticate exact path="/manager/users" component={ViewUsers} {...appProps} />
                            <Authenticate exact path="/manager/users/create" component={CreateUser} {...appProps} />
                            <Authenticate exact path="/manager/users/:_id/edit" component={EditUser} {...appProps} />
                            <Authenticate exact path="/manager/users/:_id/detail" component={ViewUser} {...appProps} />

                            <Authenticate exact path="/manager/main-menus" component={ViewMainMenus} {...appProps}/>
                            <Authenticate exact path="/manager/main-menus/create" component={CreateMainMenu} {...appProps}/>
                            <Authenticate exact path="/manager/main-menus/:_id/edit" component={EditMainMenu} {...appProps}/>
                        </Container>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default  ManagerLayout;
