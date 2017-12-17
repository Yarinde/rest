import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ContentHeader from './Components/ContentHeader';
import ForecastCont from './Components/ForecastCont';
import { Grid } from 'react-bootstrap';


export class ForecastApp extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let payload = [
            {
                id: 0,
                name: 'Ashdod',
            },
            {
                id: 1,
                name: 'Tel Aviv',
            },
            {
                id: 2,
                name: 'Ashkelon',
            },
            {
                id: 3,
                name: 'Herzelia',
            },
        ];
        let forecast = {
            id: 1,
            height: 300,
            condition: 30,
            windCondition: 20,
            windDirection: "NW",
            seaTemp: 21,
            AirTemp: 13,
        };
        this.props.getDefaultLocations(payload);
        this.props.changeLocationById(payload[0].id);
        this.props.getForecastForLocation(forecast);
    }

    render() {
        const { locations, selectedLocation, selectedLocationForecast } = this.props;
        return (
            <Grid>
                {console.log(this.props)}
                <ContentHeader locations={locations} />
                <ForecastCont selectedLocation={locations ? locations[selectedLocation] : ""}
                              selectedLocationForecast={selectedLocationForecast} />
            </Grid>
        );
    }
}


function mapStateToProps(state) {
    return {
        locations: state.locations,
        selectedLocation: state.selectedLocation,
        selectedLocationForecast: state.selectedLocationForecast,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefaultLocations: (payload) => dispatch({ type: 'GET_DEFAULT_LOCATIONS', payload: payload }),
        changeLocationById: (payload) => dispatch({ type: 'CHANGE_LOCATION', payload: payload }),
        getForecastForLocation: (payload) => dispatch({ type: 'GET_FORECAST_FOR_LOCATION', payload: payload }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastApp);
