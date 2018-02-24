import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Meteor} from 'meteor/meteor';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import {T, t} from '/imports/common/Translation';
import {utilsHelper} from '../../helpers/utils/utils';

class UserSettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            setting: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    getValue(key) {
        return this.state.setting[key] || '';
    }

    handleInputChange(event) {
        const setting = utilsHelper.inputChange(event, this.state.setting);
        this.setState({setting: setting});
    }

    render() {
        const currentUser = Meteor.user();

        return (
            <Card>
                <CardBody>
                    <Row>
                        <Col>
                            <FormGroup row>
                                <Col md="3">
                                    <Label><T>Full Name</T></Label>
                                </Col>
                                <Col md="9">
                                    <Input type="text" name="fullName" value={this.getValue('fullName')} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup row>
                                <Col md="3">
                                    <Label><T>Email</T></Label>
                                </Col>
                                <Col md="9">
                                    <Input type="text" name="username" value={currentUser.emails[0].address} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <Button type="button" size="sm" color="primary">
                        <i className="fa fa-dot-circle-o"></i> <T>Save</T>
                    </Button>
                </CardFooter>
            </Card>
        );
    }
}

export default withRouter(UserSettings);
