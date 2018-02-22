import React, {Component} from 'react';
import {
    Input
} from 'reactstrap';
import Select, {Async} from 'react-select';

import 'react-select/dist/react-select.css';

class SelectHelper extends Component {
    renderOptions(options) {
        if (typeof options == 'undefined') {
            return [];
        }

        if (options.constructor === Array) {
            return options.map((option) => {
                if (option.value && option.name) {
                    return (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    );
                } else if (option._id && option.name) {
                    return (
                        <option key={option._id} value={option._id}>{option.name}</option>
                    );
                } else {
                    return (
                        <option key={option} value={option}>{option}</option>
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
            id,
            name,
            placeholder,
            options,
            value,
            required,
            onChange
        } = this.props;

        return (
            <Input type="select" name={name} id={id} onChange={onChange} required={required} value={value}>
                <option value="">{placeholder}</option>
                {this.renderOptions(options)}
            </Input>
        );
    }
}
SelectHelper.defaultProps = {
    id: '',
    name: '',
    placeholder: '',
    options: [],
    value: '',
    required: false,
    onChange: function () {}
};

class Select2Helper extends Component {
    getOptions(options) {
        if (options.constructor === Array) {
            if (options[0] && options[0].value && options[0].label) {
                return options;
            }

            let optionsFixed = [];
            options.map((option) => {
                if (option._id && option.name) {
                    optionsFixed.push({
                        value: option._id,
                        label: option.name
                    });
                } else {
                    optionsFixed.push({
                        value: option,
                        label: option
                    });
                }
            });
            return optionsFixed;
        }

        let optionsFixed = [];
        for (let value in options) {
            optionsFixed.push({
                value: value,
                label: options[value]
            })
        }
        return optionsFixed;
    }

    handleChange(selectedOption) {
        const {
            name,
            onChange
        } = this.props;

        const event = {
            selectedOption: selectedOption,
            target: {
                name: name,
                type: 'select',
                value: selectedOption.value
            }
        };
        onChange(event);
    }

    render() {
        const {
            name,
            placeholder,
            value,
            options,
            async,
            loadOptions
        } = this.props;

        if (async) {
            return (
                <Async name={name} placeholder={placeholder} value={value}
                       onChange={this.handleChange.bind(this)}
                       loadOptions={loadOptions}/>
            );
        } else {
            return (
                <Select name={name} placeholder={placeholder} value={value}
                    onChange={this.handleChange.bind(this)}
                    options={this.getOptions(options)}/>
            );
        }
    }
}
Select2Helper.defaultProps = {
    name: '',
    placeholder: '',
    value: '',
    options: [],
    onChange: function () {},
    async: false,
    loadOptions: function () {}
};

export {
    SelectHelper,
    Select2Helper
};
