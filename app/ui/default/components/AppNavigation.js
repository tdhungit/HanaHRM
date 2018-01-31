import React from 'react';
import PropTypes from 'prop-types';

const AppNavigation = ({ authenticated }) => (
    authenticated ?
        <div>AppNavigation Login OK</div> :
        null
);

AppNavigation.propTypes = {
    authenticated: PropTypes.bool,
};

export default AppNavigation;
