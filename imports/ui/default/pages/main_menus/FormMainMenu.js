import React, {Component} from 'react';
import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';

class FormMainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        var user = this.state.user;
        user[name] = value;

        this.setState({user: user});
    }

    render() {
        return (
            <div>
                {this.state.error ? <Alert color="danger">{this.state.error}</Alert> : null}
                <Row>
                    <Col xs="12" lg="6">
                        <FormGroup>
                            <Label>Menu name</Label>
                            <Input type="text" name="name" placeholder="Enter Name" onChange={this.handleInputChange} required/>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}
