import React from 'react';
import {render} from 'react-dom';

import {Meteor} from 'meteor/meteor';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '/app/scss/style.scss';

// Routes
import App from '../app/ui/default/layouts/App';

Meteor.startup(() => {
    render((
        <App/>
    ), document.getElementById('PenguinHRMApp'));
});