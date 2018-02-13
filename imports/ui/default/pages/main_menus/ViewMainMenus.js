import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';
import {Link} from 'react-router-dom';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import {T, t} from '/imports/common/Translation';

class ViewMainMenus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menusTree: []
        };
    }

    componentWillMount() {
        Meteor.call('mainMenus.Nav', (error, response) => {
            if (!error) {
                let menusTree = [];
                for (let idx in response) {
                    let menu = response[idx];
                    let menuTree = {
                        title: (<Link to={'/manager/main-menus/' + menu._id + '/edit'}>{menu.name}</Link>),
                        subtitle: (
                            <span>
                                <i className={menu.icon}/>&nbsp;&nbsp;&nbsp;
                                <span>{menu.url}</span>&nbsp;&nbsp;&nbsp;
                                <span>Title: {menu.title ? 'true' : 'false'}</span>&nbsp;&nbsp;&nbsp;
                                <span>Divider: {menu.divider ? 'true' : 'false'}</span>&nbsp;&nbsp;&nbsp;
                                {menu.badge && menu.badge.variant ? <span>Badge: {menu.badge.variant} - {menu.badge.text}</span> : null}
                            </span>
                        )
                    };
                    if (menu.children) {
                        menuTree.expanded = true;
                        menuTree.children = [];
                        for (let idx2 in menu.children) {
                            let child_menu = menu.children[idx2];
                            menuTree.children.push({
                                title: (<Link to={'/manager/main-menus/' + child_menu._id + '/edit'}>{child_menu.name}</Link>),
                                subtitle: (
                                    <span>
                                        <i className={child_menu.icon}/>&nbsp;&nbsp;&nbsp;
                                        <span>{child_menu.url}</span>&nbsp;&nbsp;&nbsp;
                                        <span>Title: {child_menu.title ? 'true' : 'false'}</span>&nbsp;&nbsp;&nbsp;
                                        <span>Divider: {child_menu.divider ? 'true' : 'false'}</span>&nbsp;&nbsp;&nbsp;
                                        {child_menu.badge && child_menu.badge.variant ? <span>Badge: {child_menu.badge.variant} - {child_menu.badge.text}</span> : null}
                                    </span>
                                )
                            });
                        }
                    }
                    menusTree.push(menuTree);
                }

                this.setState({menusTree: menusTree});
            }
        });
    }

    render() {
        return (
            <div className="mainmenu-ViewMainMenus animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-list"></i>
                                <strong><T>View Main Menus</T></strong>
                            </CardHeader>
                            <CardBody>
                                <div style={{height: 600}}>
                                    <SortableTree
                                        treeData={this.state.menusTree}
                                        onChange={menusTree => this.setState({menusTree})}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ViewMainMenus;
