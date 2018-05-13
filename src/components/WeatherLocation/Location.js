import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const Location = ({ city }) => (
        <div className={'location'}>
            <h2>{city}</h2>
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