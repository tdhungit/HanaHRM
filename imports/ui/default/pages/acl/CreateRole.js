import React, {Component} from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import {T, t} from '/imports/common/Translation';
import FormRole from './FormRole';

class CreateRole extends Component {
    render() {
        return (
            <div className="acl-CreateRole animated fadeIn">
                <Row>
                    <Col>
                        <FormRole title={t.__('Create Role')} slogan={t.__('ACL')}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CreateRole;
