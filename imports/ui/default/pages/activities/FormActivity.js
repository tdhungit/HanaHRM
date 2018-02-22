import React, {Component} from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';
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
import {Link} from 'react-router-dom';
import {Bert} from 'meteor/themeteorchef:bert';

import {T, t} from '/imports/common/Translation';
import {AppListStrings} from '/imports/common/AppListStrings';
import {SelectHelper} from '../../helpers/inputs/SelectHelper';
import {DateInput} from '../../helpers/inputs/DateHelper';

class FormActivity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activity: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = (target.type && target.type === 'checkbox') ? target.checked : target.value;
        const name = target.name;

        let activity = this.state.activity;
        activity[name] = value;

        this.setState({activity: activity});
    }

    getInputValue(name) {
        return (this.state.activity[name] ? this.state.activity[name] : '');
    }

    handleSubmit() {

    }

    render() {
        const {
            title,
            slogan
        } = this.props;

        const existing = this.props.activity && this.props.activity._id;

        return (
            <Card>
                <CardHeader>
                    <i className="fa fa-tasks"/>
                    <strong>{title}</strong>&nbsp;
                    {slogan}
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col xs="12" md="6">
                            <FormGroup>
                                <Label><T>Subject</T></Label>
                                <Input type="text" name="name" placeholder={t.__('Enter here')}
                                       value={this.getInputValue('name')}
                                       onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" md="6">
                            <FormGroup>
                                <Label><T>Type</T></Label>
                                <SelectHelper name="type" options={AppListStrings.ActivityTypes}
                                       value={this.getInputValue('type')}
                                       onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="6">
                            <FormGroup>
                                <Label><T>Date start</T></Label>
                                <DateInput type="datetime" name="dateStart"
                                           value={this.getInputValue('dateStart')}
                                           onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" md="6">
                            <FormGroup>
                                <Label><T>Date end</T></Label>
                                <DateInput type="datetime" name="dateEnd"
                                           value={this.getInputValue('dateEnd')}
                                           onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="6"></Col>
                        <Col xs="12" md="6"></Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <Button type="button" size="sm" color="primary" onClick={this.handleSubmit.bind(this)}>
                        <i className="fa fa-dot-circle-o"></i>&nbsp;
                        {existing ? <T>Update</T> :<T>Create</T>}
                    </Button>
                    <Button type="reset" size="sm" color="danger" onClick={() => this.props.history.push('/manager/activities')}>
                        <i className="fa fa-ban"></i> <T>Cancel</T>
                    </Button>
                </CardFooter>
            </Card>
        );
    }
}

FormActivity.defaultProps = {
    title: '',
    slogan: '',
    activity: {}
};

FormActivity.propTypes = {
    title: PropTypes.string,
    slogan: PropTypes.string,
    activity: PropTypes.object
};

export default withRouter(FormActivity);
