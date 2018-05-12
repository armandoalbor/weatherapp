import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => (
        <div>
            <h1>{city}</h1>
        </div>
);

/*
const Location = (props) => {
    //const City = props.city;
    const { city } = props; // Destructuring
    //debugger;
    return (
        <div>
            <h1>{city}</h1>
        </div>
    );
};
*/

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;