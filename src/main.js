import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ContentHeader from './Components/ContentHeader';
import ForecastCont from './Components/ForecastCont';
import { Grid, Row } from 'react-bootstrap';


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
        this.props.getDefaultLocations(payload);
        this.props.changeLocationById(payload[0].id);
        this.props.getForecastForLocation();
    }

    render() {
        const { locations, selectedLocation } = this.props;
        return (
            <Grid>
                <Row>
                    <ContentHeader locations={locations} />
                </Row>
                <ForecastCont selectedLocation={locations ? locations[selectedLocation] : ""} />
            </Grid>
        );
    }
}


function mapStateToProps(state) {
    return {
        locations: state.locations,
        selectedLocation: state.selectedLocation,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefaultLocations: (payload) => dispatch({ type: 'GET_DEFAULT_LOCATIONS', payload: payload }),
        changeLocationById: (payload) => dispatch({ type: 'CHANGE_LOCATION', payload: payload }),
        getForecastForLocation: () => dispatch({ type: 'GET_FORECAST_FOR_LOCATION' }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastApp);
