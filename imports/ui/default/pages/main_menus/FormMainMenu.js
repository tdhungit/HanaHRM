import React, {Component} from 'react';
import {withRouter} from 'react-router';
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
    InputGroup,
    InputGroupAddon,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

import {T, t} from '/imports/common/Translation';
import routes from '../../components/Router/routes';
import SelectHelper from '../../helpers/inputs/SelectHelper';
import SelectSimpleLineIcon from '../../helpers/inputs/SelectSimpleLineIcon';

class FormMainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            menu: {
                icon:'',
                badge_variant: null,
                badge_text: null
            },
            root_menus: [],
            modalIcon: false
        };

        this.toggleModalIcon = this.toggleModalIcon.bind(this);
        this.getIcon = this.getIcon.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        Meteor.call('mainMenus.ROOT', (error, response) => {
            if (!error) {
                let root_menus = [];
                for (let idx in response) {
                    let menu = response[idx];
                    root_menus.push({
                        name: menu.name,
                        value: menu._id
                    });
                }

                this.setState({root_menus: root_menus});
            }
        });
    }

    toggleModalIcon() {
        this.setState({
            modalIcon: !this.state.modalIcon
        });
    }

    getIcon(event) {
        const target = event.target;
        const all_class = target.className;
        const icon_name = all_class.replace(' icons font-2xl d-block mt-4', '');
        let menu = this.state.menu;
        menu.icon = icon_name;
        this.setState({
            menu: menu,
            modalIcon: !this.state.modalIcon
        });
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
        if (this.state.menu.name && this.state.menu.url && this.state.menu.icon) {
            if (this.state.menu.badge_variant && this.state.menu.badge_text) {
                this.state.menu.badge = {
                    variant: this.state.menu.badge_variant,
                    text: this.state.menu.badge_text
                };
            }

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
                                <SelectHelper name="url" options={routes} onChange={this.handleInputChange} value={this.state.menu.url} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Icon</T></Label>
                                <InputGroup>
                                    <Input type="text" name="icon" placeholder={t.__("Enter icon")} onChange={this.handleInputChange} value={this.state.menu.icon} required/>
                                    <InputGroupAddon addonType="append">
                                        <Button color="primary" onClick={this.toggleModalIcon}><i className="fa fa-search"></i> <T>Search</T></Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Modal isOpen={this.state.modalIcon} toggle={this.toggleModalIcon} className="modal-lg">
                            <ModalHeader toggle={this.toggleModalIcon}><T>Choose Icon</T></ModalHeader>
                            <ModalBody>
                                <SelectSimpleLineIcon onClick={this.getIcon}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleModalIcon}><T>Cancel</T></Button>
                            </ModalFooter>
                        </Modal>
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
                                <Input type="select" name="badge_variant" onChange={this.handleInputChange}>
                                    <option value=""></option>
                                    <option value="info">Info</option>
                                    <option value="warning">Warning</option>
                                    <option value="danger">Danger</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs="12" lg="6">
                            <FormGroup>
                                <Label><T>Badge Text</T></Label>
                                <Input type="text" name="badge_text" placeholder={t.__("Enter badge text")} onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="12">
                            <FormGroup>
                                <Label><T>Parent</T></Label>
                                <SelectHelper name="parent" options={this.state.root_menus} onChange={this.handleInputChange} value={this.state.menu.parent}/>
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

export default withRouter(FormMainMenu);
