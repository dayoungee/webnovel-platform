import { HYDRATE } from "next-redux-wrapper";

import user from './user';
import {combineReducers} from "redux";

const initialState ={
    user:{
    }
}

const rootReducer = combineReducers({
    index:(state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return {...state, ...action.payload}
            default:
                return state;

        }
    },
    user,
});

export default rootReducer;