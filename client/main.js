import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

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

import NotFound from '../app/ui/default/pages/index/NotFound';

Meteor.startup(() => {
    render((
        <Router>
            <Switch>
                <Route path="/" component={App}/>
                <Route exact path="/404" component={NotFound}/>
            </Switch>
        </Router>
    ), document.getElementById('PenguinHRMApp'));
});