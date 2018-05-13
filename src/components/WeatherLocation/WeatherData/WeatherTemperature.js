import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, RAIN, SNOW, SUN, WINDY, THUNDER, DRIZZLE } from '../../../constants/weathers';
import './styles.css';

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
      case THUNDER:
          return "day-thunderstorm";
      case DRIZZLE:
          return "day-showers";
      default:
          return "day-sunny";
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className={'weather-temperature-container'}>
        <WeatherIcons className={'icon'} name={stateToIconName(weatherState)} size="2x"/>
        <span className={'temperature'}>{`${temperature}`}</span>
        <span className={'type'}>°C</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};

export default WeatherTemperature;