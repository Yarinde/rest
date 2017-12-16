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
                name: 'Tel Aviv'
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
    }

    render() {
        const { locations } = this.props;
        return (
            <Grid>
                <ContentHeader locations={locations}/>
                <ForecastCont />
            </Grid>
        );
    }
}


function mapStateToProps(state) {
    return {
        locations: state.locations,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefaultLocations: (payload) => dispatch({ type: 'GET_DEFAULT_LOCATIONS', payload: payload}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastApp);
