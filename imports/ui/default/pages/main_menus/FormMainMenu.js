import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor';
import {
    Alert,
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

import {T, t} from '/imports/common/Translation';

class FormMainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            menu: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let menu = this.state.menu;
        menu[name] = value;

        this.setState({user: menu});
    }

    handleSubmit() {
        console.log(this.state);
        if (this.state.menu.name && this.state.menu.url && this.state.menu.icon) {
            Meteor.call('mainMenus.insert', this.state.menu, (error) => {
                if (error) {
                    this.setState({error: error.reason});
                } else {
                    this.setState({error: 'success'});
                }
            });
        }
    }

    render() {
        const {
            title,
            slogan
        } = this.props;

        return (
            <Card>
                <CardHeader>
                    <strong>{title}</strong>
                    <small> {slogan}</small>
                </CardHeader>
                <CardBody>
                    {this.state.error ? <Alert color="danger">{this.state.error}</Alert> : null}
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Menu name</T></Label>
                                <Input type="text" name="name" placeholder={t.__("Enter name")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Weight</T></Label>
                                <Input type="text" name="weight" placeholder={t.__("Enter weight")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Url</T></Label>
                                <Input type="text" name="url" placeholder={t.__("Enter url")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Icon</T></Label>
                                <Input type="text" name="icon" placeholder={t.__("Enter icon")} onChange={this.handleInputChange} required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup check>
                                <div className="checkbox">
                                    <Label>
                                        <Input type="checkbox" name="title" onChange={this.handleInputChange}/>
                                        <T>Title</T>
                                    </Label>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup check>
                                <div className="checkbox">
                                    <Label>
                                        <Input type="checkbox" name="divider" onChange={this.handleInputChange}/>
                                        <T>Divider</T>
                                    </Label>
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Badge Variant</T></Label>
                                <Input type="text" name="badge_variant" placeholder={t.__("Enter badge type")} onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Badge Text</T></Label>
                                <Input type="text" name="badge_text" placeholder={t.__("Enter badge text")} onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <Button type="button" size="sm" color="primary" onClick={this.handleSubmit.bind(this)}>
                        <i className="fa fa-dot-circle-o"></i> <T>Create</T>
                    </Button>
                    <Button type="reset" size="sm" color="danger">
                        <i className="fa fa-ban"></i> <T>Reset</T>
                    </Button>
                </CardFooter>
            </Card>
        );
    }
}

FormMainMenu.defaultProps = {
    title: null,
    slogan: null
};

FormMainMenu.propTypes = {
    title: PropTypes.string,
    slogan: PropTypes.string
};

export default FormMainMenu;
