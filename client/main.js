import React from 'react';
import {render} from 'react-dom';

import {Meteor} from 'meteor/meteor';

// Import css
import '/public/css/style.min.css';
import '/app/scss/style.scss';

// Routes
import App from '../app/ui/default/layouts/App';

Meteor.startup(() => {
    render((
        <App/>
    ), document.getElementById('PenguinHRMApp'));
});