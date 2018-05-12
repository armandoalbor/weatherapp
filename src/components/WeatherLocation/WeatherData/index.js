import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUDY } from '../../../constants/weathers';


const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={CLOUDY} />
        <WeatherExtraInfo humidity={80} wind={"810m/s"}/>
    </div>
);

export default WeatherData;