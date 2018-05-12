import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, RAIN, SNOW, SUN, WINDY } from '../../../constants/weathers';

const stateToIconName = weatherState => {
  switch (weatherState){
      case CLOUD:
          return "cloud";
      case CLOUDY:
          return "cloudy";
      case SUN:
          return "day-sunny";
      case RAIN:
          return "rain";
      case SNOW:
          return "snow";
      case WINDY:
          return "windy";
      default:
          return "day-sunny";
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        <WeatherIcons name={stateToIconName(weatherState)} size="2x"/>
        <span>{`${temperature} °C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};

export default WeatherTemperature;