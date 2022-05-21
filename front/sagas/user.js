import { all, fork, put, call, takeLatest } from 'redux-saga/effects'

import axios from "axios";
import {
    LOG_IN_FAILURE, LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE, LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    NAVER_LOGIN_SUCCESS,
    NAVER_LOGIN_FAILURE,
    NAVER_LOGIN_REQUEST,
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
    return axios.post('/user/login',data)
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
    return axios.post('/user/logout')
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

function loadUserAPI() {
    return axios.get('/user');
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data,
        });
    }
}

function naverLogInAPI(data){
    return axios.get('/user/login/naver',data)
}
function* naverLogIn(action){
    try {
        const result = yield call(naverLogInAPI, action.data)
        yield put({
            type: NAVER_LOGIN_SUCCESS,
            data: result.data
        });
    }catch(err){
        yield put({
            type: NAVER_LOGIN_FAILURE,
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

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchNaverLogin() {
    yield takeLatest(NAVER_LOGIN_REQUEST, naverLogIn);
}

export default function* userSaga(){
    yield all([
        fork(watchSignUp),
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchNaverLogin),
    ])
}