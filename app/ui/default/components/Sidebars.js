import React from 'react';
import PropTypes from 'prop-types';

const Sidebars = ({ authenticated }) => (
    authenticated ?
        <div>Sidebars Login OK</div> :
        null
);

Sidebars.propTypes = {
    authenticated: PropTypes.bool,
};

export default Sidebars;