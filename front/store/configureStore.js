import { createWrapper } from 'next-redux-wrapper';
import {applyMiddleware, createStore, compose} from "redux";
import { composeWithDevTools} from "redux-devtools-extension"; // 브라우저 개발툴 볼 수 있는
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) =>{
    console.log(action);
    return next(action);
}
const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares)) : composeWithDevTools(applyMiddleware(...middlewares)) // 브라우저 리덕스 개발 툴 사용한다 안한다.
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;