import { all, delay, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';

import axios from "axios";

import {
    LOAD_SERIES_SUCCESS,
    LOAD_SERIES_REQUEST,
    LOAD_SERIES_FAILURE,
} from "../reducers/series";

function loadSeriesAPI(data) {
    return axios.post('/Series', data);
}

function* loadSeries(action) {
    try {
        const result = yield call(loadSeriesAPI, action.data);
        console.log(result);
        yield put({
            type: LOAD_SERIES_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_SERIES_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLoadSeries() {
    yield throttle(5000, LOAD_SERIES_REQUEST, loadSeries);
}

export default function* SeriesSaga() {
    yield all([
        fork(watchLoadSeries),
    ]);
}