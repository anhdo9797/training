import { FETCH_DATA, FETCH_FAIL, FETCH_SUCCESS, START_FETCH } from './action';

const INITIAL_STATE = {
    loading: false,
    data: null,
};

const reducerCov = (state = INITIAL_STATE, action) => {
    const { payload, type } = action;
    switch (type) {
        case FETCH_DATA:
            return state;
        case START_FETCH:
            return {
                ...state,
                loading: true,
            };
        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
            };
        default:
            return state;
    }
};

export default reducerCov;
