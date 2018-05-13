import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import '../styles.css';
import transformWeatherData from '../../services/transformWeatherData';
//import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';

//const city = "Ciudad Nezahualcoyotl,mx";
const apiKey = "582220375e3dc678f9425d6d5207427a";
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {

    constructor({ city }){
        super();
        this.state = {
            data: null,
            city
        };

        console.log("constructor");
    }

    /*
    handleUpdateClick = () => {
        fetch(apiWeather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeatherData(weather_data);
            this.setState({ data });
        });
        //this.setState({ data: data2 });
    };
    */

    componentWillMount(){
        console.log("componentWillMount");
        const { city } = this.state;
        const apiWeather = `${url}?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiWeather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeatherData(weather_data);
            this.setState({ data });
        });
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const {city, data} = this.state;
        console.log("render");
        //    <CircularProgress size={60} thickness={7} />
        return (
            <div className={'weather-location-container'} onClick={onWeatherLocationClick}>
                <Location city={city.split(',')[0]}/>
                { data ? <WeatherData data={data}/> :  <LinearProgress mode="indeterminate" /> }
                {/*<button onClick={this.handleUpdateClick}>Actualizar</button>*/}
            </div>
        );
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
};
export default WeatherLocation;