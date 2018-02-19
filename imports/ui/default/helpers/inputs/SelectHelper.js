import React, {Component} from 'react';
import {
    Input
} from 'reactstrap';

class SelectHelper extends Component {
    constructor(props) {
        super(props);
    }

    renderOptions(options) {
        if (typeof options == 'undefined') {
            return null;
        }

        if (options.constructor === Array) {
            return options.map((option) => {
                if (option.value && option.name) {
                    return (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    );
                } else {
                    return (
                        <option key={option._id} value={option._id}>{option.name}</option>
                    );
                }
            });
        } else {
            let optionsFixed = [];
            for (let value in options) {
                optionsFixed.push({
                    name: options[value],
                    value: value
                })
            }
            return optionsFixed.map((option) => {
                return (
                    <option key={option.value} value={option.value}>{option.name}</option>
                );
            });
        }
    }

    render() {
        const {
            name,
            id,
            options,
            value,
            required,
            onChange
        } = this.props;

        return (
            <Input type="select" name={name} id={id} onChange={onChange} required={required} value={value}>
                <option></option>
                {this.renderOptions(options)}
            </Input>
        );
    }
}

export default SelectHelper;
