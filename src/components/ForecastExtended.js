import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem';
import TransformForecastData from '../services/transformForecastData';
import './styles.css';

// const days = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
const apiKey = "582220375e3dc678f9425d6d5207427a";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = { forecastData: null };
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.state.city){
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url_forecast).then(
            data => data.json()
        ).then(forecast_data => {
            console.log(forecast_data);
            const forecastData = TransformForecastData(forecast_data);
            console.log(forecastData);
            this.setState({ forecastData });
        });
    };

    renderForecastItemDays(forecastData){
        return forecastData.map(forecast => (
             <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
                           weekDay={forecast.weekDay}
                           hour={forecast.hour}
                           data={forecast.data}
             />
        ));
    }

    renderProgress(){
        return "Cargando datos . . . ";
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h3 className={'forecast-title'}>Pronostico { city }</h3>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    };
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};
export default ForecastExtended;