import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

import { Grid, Row, Col } from 'react-flexbox-grid';
import 'weather-icons/css/weather-icons.css';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = ["Dubai,ae", "Cancun,mx", "Ciudad Nezahualcoyotl,mx", "Texcoco de Mora,mx", "Ixtapaluca,mx", "Iztapalapa,mx"];

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#0277BD',
        primary2Color: '#447c81',
        primary3Color: '#0a87cb'
    },
    appBar: {
        height: 60
    },
});

class App extends Component {
    constructor () {
        super();

        this.state = {
            city: null
        }
    };

    handleSelectedLocation = city => {
        this.setState({ city });
        console.log("handleSelectedLocation / " + city);
    };

    render() {
        const { city } = this.state;

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <AppBar title={"Weather forecast"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationList cities={cities}
                                onSelectedLocation={this.handleSelectedLocation} />
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper zDepth={4}>
                                <div className={'weather-detail'}>
                                    {
                                        city &&
                                            <ForecastExtended city={city}>
                                            </ForecastExtended>
                                    }
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
