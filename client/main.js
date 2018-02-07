import React from 'react';
import {render} from 'react-dom';

import {Meteor} from 'meteor/meteor';

// Import css
import '/public/css/style.min.css';
import '/imports/scss/style.scss';

// Routes
import App from '../imports/ui/default/layouts/App';

Meteor.startup(() => {
    render((
        <App/>
    ), document.getElementById('PenguinHRMApp'));
});