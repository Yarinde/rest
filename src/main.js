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
    }

    render() {
        return (
            <Grid>
                <ContentHeader />
                <ForecastCont />
            </Grid>
        );
    }
}


function mapStateToProps(state) {
    return {
        // todoItems: state.todoItems,
        // filter: state.filter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // getDefaultTodos: (payload) => dispatch({ type: 'GET_DEFAULT_TODOS', payload: payload}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastApp);
