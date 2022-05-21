import produce from "immer";

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
    loadUserLoading: false, // 유저 정보 가져오기 시도중
    loadUserDone: false,
    loadUserError: null,
    naverLogInLoading: false, // 로그인 시도중
    naverLogInDone: false,
    naverLogInError: null,
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

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const NAVER_LOGIN_REQUEST = 'NAVER_LOGIN_REQUEST';
export const NAVER_LOGIN_SUCCESS = 'NAVER_LOGIN_SUCCESS';
export const NAVER_LOGIN_FAILURE = 'NAVER_LOGIN_FAILURE';


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
    return produce(state, (draft) => {
        switch (action.type){
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpError = null;
                draft.signUpDone = false;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInError = null;
                draft.logInDone = false;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.me = action.data;
                draft.logInDone = true;
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutError = null;
                draft.logOutDone = false;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.me = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
                break;
            case LOAD_USER_REQUEST:
                draft.loadUserLoading = true;
                draft.loadUserError = null;
                draft.loadUserDone = false;
                break;
            case LOAD_USER_SUCCESS:
                draft.loadUserLoading = false;
                draft.me = action.data;
                draft.loadUserDone = true;
                break;
            case LOAD_USER_FAILURE:
                draft.loadUserLoading = false;
                draft.loadUserError = action.error;
                break;
            case NAVER_LOGIN_REQUEST:
                draft.naverLogInLoading = true;
                draft.naverLogInError = null;
                draft.naverLogInDone = false;
                break;
            case NAVER_LOGIN_SUCCESS:
                draft.naverLogInLoading = false;
                draft.me = action.data;
                draft.naverLogInDone = true;
                break;
            case NAVER_LOGIN_FAILURE:
                draft.naverLogInLoading = false;
                draft.naverLogInError = action.error;
                break;
            default:
                return state;
        }
    });
};

export default reducer;