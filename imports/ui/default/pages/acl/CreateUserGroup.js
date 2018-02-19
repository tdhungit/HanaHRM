import React, {Component} from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import {T, t} from '/imports/common/Translation';
import FormUserGroup from './FormUserGroup';

class CreateUserGroup extends Component {
    render() {
        return (
            <div className="acl-FormUserGroup animated fadeIn">
                <Row>
                    <Col>
                        <FormUserGroup title={t.__('Create new user group')} slogan=""/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CreateUserGroup;
