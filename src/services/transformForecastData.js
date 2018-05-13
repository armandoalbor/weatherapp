import moment from 'moment';
import 'moment/locale/es';
import TransformWeatherData from './transformWeatherData';

const transformForecastData = forecast_data => (
    forecast_data.list.filter(item => (
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).utc().format("ddd"),
            hour: moment.unix(item.dt).utc().hour(),
            data: TransformWeatherData(item)
        }
     ))
);

export default transformForecastData;
