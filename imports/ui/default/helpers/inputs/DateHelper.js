import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import container from '/imports/common/Container';
import Settings from '/imports/collections/Settings/Settings';

import 'react-datepicker/dist/react-datepicker.css';

class DateInput extends Component {
    constructor(props) {
        super(props);
        this.dateFormat = 'YYYY-MM-DD';
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(dateValue) {
        const {
            name,
            onChange
        } = this.props;
        const event = {
            target: {
                name: name,
                type: 'date',
                value: dateValue.format(this.dateFormat)
            }
        };
        onChange(event);
    }

    render() {
        const {
            type,
            value
        } = this.props;

        let selected = moment();
        if (value) {
            selected = moment(value, this.dateFormat);
        }

        let showTimeSelect = false;
        if (type == 'datetime') {
            showTimeSelect = true;
        }

        return (
            <div className="DateInputHelper">
                <DatePicker name={name}
                            dateFormat={this.dateFormat}
                            selected={selected}
                            onChange={this.handleChange}
                            showTimeSelect={showTimeSelect}
                />
            </div>
        );
    }
}

DateInput.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export {
    DateInput
}
