function reducer(state = [], action) {
    switch (action.type) {
        case('GET_FORECAST_FOR_LOCATION'):
            return {
                ...state,
                selectedLocationForecast: action.payload,
            };
        case('GET_DEFAULT_LOCATIONS'):
            return {
                ...state,
                locations: [...action.payload]};
        case('CHANGE_LOCATION'):
            return {
                ...state,
                selectedLocation: action.payload,
            };
        case('GET_FORCAST_SUCCESS'):
            return {
                ...state,
                selectedLocation: action.payload,
            };
        case('GET_FORCAST_ERROR'):
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;