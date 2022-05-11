export const initialState = {
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    me: null,
    signUpData: {},
    loginData: {},
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const signUpRequestAction = (data) =>{
    return{
        type: SIGN_UP_REQUEST,
        data,
    }
}

export const loginRequestAction = (data) =>{
    return{
        type: LOG_IN_REQUEST,
        data,
    }
}


export const logoutRequestAction = () =>{
    return{
        type: LOG_OUT_REQUEST
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SIGN_UP_REQUEST:
            return{
                ...state,
                signUpLoading: true,
                signUpDone: false,
                signUpError: null,
            };
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                signUpLoading: false,
                signUpDone: true,
                me:null,
            };
        case SIGN_UP_FAILURE:
            return{
                ...state,
                signUpLoading:false,
                signUpError: action.error,
            };
        case LOG_IN_REQUEST:
            return{
                ...state,
                logInLoading: true,
                logInError: null,
                logInDone: false,
            };
        case LOG_IN_SUCCESS:
            return{
                ...state,
                logInLoading: false,
                logInDone: true,
                me:action.data,
            };
        case LOG_IN_FAILURE:
            return{
                ...state,
                logInLoading: false,
                logInError: action.error,
            };
        case LOG_OUT_REQUEST:
            return{
                ...state,
                logOutLoading: true,
                logOutDone: false,
                logOutError: null,
            };
        case LOG_OUT_SUCCESS:
            return{
                ...state,
                logOutLoading: false,
                logOutDone: true,
                me:null,
            };
        case LOG_OUT_FAILURE:
            return{
                ...state,
                logOutLoading:false,
                logOutError: action.error,
            };
        default:
            return state;
    }
};

export default reducer;