import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {Roles} from 'meteor/alanning:roles';
import {Bert} from 'meteor/themeteorchef:bert';

import {T, t} from '/imports/common/Translation';

class FormUserGroup extends Component {
    render() {
        return (
            <Card>

            </Card>
        );
    }
}

export default withRouter(FormUserGroup);
