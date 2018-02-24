import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Settings from '/imports/collections/Settings/Settings';
import container from '/imports/common/Container';

import 'react-datepicker/dist/react-datepicker.css';

class DateInputClass extends Component {
    constructor(props) {
        super(props);
        this.dateFormat = 'YYYY-MM-DD';
        this.dateTimeFormat = 'YYYY-MM-DD HH:mm';
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        const currentUser = this.props.currentUser;
        const userSettings = currentUser.settings || false;
        const systemSettings = this.props.systemSettings;

        if (userSettings && userSettings.dateFormat) {
            this.dateFormat = userSettings.dateFormat;
        } else if (systemSettings.dateFormat) {
            this.dateFormat = systemSettings.dateFormat.value;
        }

        if (userSettings && userSettings.dateTimeFormat) {
            this.dateTimeFormat = userSettings.dateTimeFormat;
        } else if (systemSettings.dateTimeFormat) {
            this.dateTimeFormat = systemSettings.dateTimeFormat.value;
        }
    }

    handleChange(dateValue) {
        let inputType = 'date';
        let dateFormat = this.dateFormat;
        if (this.props.type = 'datetime') {
            inputType = 'datetime';
            dateFormat = this.dateTimeFormat;
        }

        const event = {
            dateValue: dateValue,
            target: {
                name: this.props.name,
                type: inputType,
                value: dateValue.format(dateFormat)
            }
        };
        this.props.onChange(event);
    }

    render() {
        let showTimeSelect = false;
        let dateFormat = this.dateFormat;
        if (this.props.type == 'datetime') {
            showTimeSelect = true;
            dateFormat = this.dateTimeFormat;
        }

        let selected = moment();
        if (this.props.value) {
            selected = moment(this.props.value, dateFormat);
        }

        return (
            <div className="DateInputHelper">
                <DatePicker name={name}
                            dateFormat={dateFormat}
                            selected={selected}
                            onChange={this.handleChange}
                            showTimeSelect={showTimeSelect}
                />
            </div>
        );
    }
}

const DateInput = container((props, onData) => {
    const userSubscription = Meteor.subscribe('users.user');
    const settingSubscription = Meteor.subscribe('settings.systemSettings');
    if (settingSubscription && settingSubscription.ready()
        && userSubscription && userSubscription.ready()) {
        onData(null, {
            currentUser: Meteor.user(),
            systemSettings: Settings.getSystemSettings()
        });
    }
}, DateInputClass);

export {
    DateInput
}
