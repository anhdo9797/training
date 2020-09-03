import { fork, all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import fetchSaga from './covi/saga';

function* saga() {
    yield fork(authSaga);
    yield fork(fetchSaga);
}

export default saga;
