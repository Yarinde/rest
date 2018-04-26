import { call, put } from 'redux-saga/effects';

/**
 * fetch function know how to handle request response and failure
 * @param entity - request object includes request/success/failure functions
 * @param apiFn - api function we need to call
 * @param data - api function params to send to the server
 */
export function* fetchEntity(apiFn, data) {
    const response = yield call(apiFn, data);
    if (response) {
        yield put({type : 'GET_FORCAST_SUCCESS', payload: response});
        return { response: response };
    } else {
        yield put({ type: 'GET_FORCAST_FAILURE', payload: response});
        return { error : 'Something went wrong' };
    }
}