import { all, fork, take, put, call } from 'redux-saga/effects'
import axios from 'axios';

function logInAPI(){
    //return axios.post
}
function* logIn(){
    try {
        const result = yield call(logInAPI)
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        });
    }catch(err){
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}
function* watchLogin(){
    yield take('LOG_IN');
}

function* watchLogOut(){
    yield take('LOG_OUT');
}


export default function* rootSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogOut)
    ]);
}