import produce from "immer";

const testData = [
    {
        id : 1,
        User: {
            id:1,
            nickname: '도토리묵념',
        },
        title: '닥터 네임즈',
        context: '어느 날 도은설 몸에 새겨진 이름, 너는 누구니?',
        image: 'https://user-images.githubusercontent.com/55998706/165961802-dd5400cb-f2d2-43c9-a846-384263c5b28a.png',
    },
    {
        id : 2,
        User: {
            id:2,
            nickname: '김철수',
        },
        title: '이리오너라',
        context: '돌쇠가 마님을 부르는데...',
        image: 'https://user-images.githubusercontent.com/55998706/165961802-dd5400cb-f2d2-43c9-a846-384263c5b28a.png',
    }
];
export const initialState = {
    loadSeriesLoading: false,
    loadSeriesDone: false,
    loadSeriesError: null,
    seriesData: {},
}

export const LOAD_SERIES_REQUEST = 'LOAD_SERIES_REQUEST';
export const LOAD_SERIES_SUCCESS = 'LOAD_SERIES_SUCCESS';
export const LOAD_SERIES_FAILURE = 'LOAD_SERIES_FAILURE';


const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type){
        case LOAD_SERIES_REQUEST:
            draft.loadSeriesLoading = true;
            draft.loadSeriesDone = false;
            draft.loadSeriesError = null;
            break;
        case LOAD_SERIES_SUCCESS:
            draft.loadSeriesLoading = false;
            draft.loadSeriesDone = true;
            draft.seriesData.unshift(testData) //action.data;
            break;
        case LOAD_SERIES_FAILURE:
            draft.loadSeriesLoading = false;
            draft.loadSeriesError = action.error;
            break;
        default:
            return state;
    }
});

export default reducer;