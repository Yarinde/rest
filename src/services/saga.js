import { take, call, all, fork } from 'redux-saga/effects';
import { get } from './rest-methods';
import { fetchEntity } from './redux-utils';

function* getForcast() {
    yield call(
        fetchEntity.bind(null, () => get('http://localhost:8080/surf'), ""));
}

function* getForecastForLocationCb() {
    console.log('yessss sagaaaa');
}

function* watchGetForecastForLocation() {
    while (true) {
        yield take('GET_FORECAST_FOR_LOCATION');
        yield fork(getForcast);
    }
}

function* watchGetAllForecasts() {
    while (true) {
        yield take('GET_DEFAULT_LOCATIONS');
        yield fork(getForecastForLocationCb);
    }
}

export default function* rootSaga() {
    yield all([
        watchGetForecastForLocation(),
        watchGetAllForecasts(),
    ]);
}