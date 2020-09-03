import { put, takeEvery, fork } from 'redux-saga/effects';
import actionFetchCov, { FETCH_DATA } from './action';
import Axios from 'axios';
import { fetchDataCov } from '../../services/covid';

function* fetchData() {
    try {
        yield put(actionFetchCov.fetchStart());

        let response = yield fetchDataCov();
        // console.log('===SAGA=====response======', response);

        yield put(actionFetchCov.fetchSuccess(response));
    } catch (error) {
        console.log('===SAGA=====SIGN_UP_FAIL======');
        console.log(error.message);
    }
}

function* watchFetch() {
    yield takeEvery(FETCH_DATA, fetchData);
}

export default function* fetchSaga() {
    yield fork(watchFetch);
}
