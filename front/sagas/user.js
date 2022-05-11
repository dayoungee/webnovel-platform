import { all, fork, put, call, takeLatest } from 'redux-saga/effects'

import axios from "axios";
import {
    LOG_IN_FAILURE, LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE, LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS
} from "../reducers/user";

function signUpAPI(data) {
    return axios.post('/user', data);
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function logInAPI(data){
    return axios.post('/api/login',data)
}
function* logIn(action){
    try {
        const result = yield call(logInAPI, action.data)
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data
        });
    }catch(err){
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function logoutAPI(){
    return axios.post('/api/logout')
}

function* logOut(){
    try {
        const result = yield call(logoutAPI)
        yield put({
            type: LOG_OUT_SUCCESS,
            data: result.data,
        });
    }catch(err){
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLogin(){
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga(){
    yield all([
        fork(watchSignUp),
        fork(watchLogin),
        fork(watchLogOut),
    ])
}