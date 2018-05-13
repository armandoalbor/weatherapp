import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation/index';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const strToComponent = cities => {
        // Warning: Each child in an array or iterator should have a unique "key" prop.
        return(
            cities.map((city) => (
                <WeatherLocation
                    key={city}
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)} />
                )
            )
        );
    };

    return (
        <div className={'location-list'}>
            {strToComponent(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
};
export default LocationList;