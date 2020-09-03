//action type

export const FETCH_DATA = 'FETCH_DATA';
export const START_FETCH = 'START_FETCH';
export const FETCH_FAIL = ' FETCH_FAIL';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

const fetchData = (payload) => ({ type: FETCH_DATA, payload });
const fetchSuccess = (payload) => ({ type: FETCH_SUCCESS, payload });
const fetchFail = (payload) => ({ type: FETCH_FAIL, payload });
const fetchStart = (payload) => ({ type: START_FETCH, payload });

const actionFetchCov = {
    fetchData,
    fetchSuccess,
    fetchFail,
    fetchStart,
};

export default actionFetchCov;
