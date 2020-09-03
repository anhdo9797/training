import { put, takeEvery, fork, all, call } from 'redux-saga/effects';
import actionAuth, { SIGN_UP, LOGIN } from './action';

import firebase from 'firebase';
import { message } from 'antd';

var firebaseConfig = {
    apiKey: 'AIzaSyCOwN9vJ1mjrod0vXlnQZ_flrHmkByhNAI',
    authDomain: 'selloapp-eb391.firebaseapp.com',
    databaseURL: 'https://selloapp-eb391.firebaseio.com',
    projectId: 'selloapp-eb391',
    storageBucket: 'selloapp-eb391.appspot.com',
    messagingSenderId: '408740375125',
    appId: '1:408740375125:web:c1c23492b4fb04e19242dc',
    measurementId: 'G-646ZEF137L',
};

firebase.initializeApp(firebaseConfig);

const delay = (ms) =>
    new Promise((res) => {
        console.log('=====delay====', ms);
        setTimeout(res, ms);
    });

function* signUp({ payload }) {
    try {
        let { email, password, callback } = payload;

        yield put(actionAuth.startSignUp());
        yield delay(3000);

        let auth = firebase.auth();
        const user = yield auth.createUserWithEmailAndPassword(email, password);
        console.log('============user==============');
        console.log(user);
        console.log('====================================');
        // yield call([auth, auth.createUserWithEmailAndPassword], email, password);
        yield put(actionAuth.signUpSUCCESS());
        callback();

        message.success('Successful registration,please login to use the service');
        console.log('===SAGA=====SIGN_UP_SUCCESS======');
    } catch (error) {
        console.log('===SAGA=====SIGN_UP_FAIL======');
        console.log(error.message);
        yield put(actionAuth.signUpFail(error.message));
        message.error(error.message);
    }
}

function* watchSigUp() {
    yield takeEvery(SIGN_UP, signUp);
}
//=========================================

function* signIn({ payload }) {
    try {
        let { email, password, history } = payload;

        yield put(actionAuth.startLogin());
        yield delay(3000); //test loading at components

        let auth = firebase.auth();
        yield call([auth, auth.signInWithEmailAndPassword], email, password);

        yield put(actionAuth.loginSuccess());
        yield history.push('./main');

        console.log('===SAGA=====SIGN_IN_SUCCESS======');
    } catch (error) {
        console.log('===SAGA=====SIGN_IN_FAIL======');
        yield put(actionAuth.signUpFail(error.message));
        console.log(error.message);
        message.error(error.message);
    }
}

function* watchSigIn() {
    yield takeEvery(LOGIN, signIn);
}

function* authSaga() {
    yield all([fork(watchSigUp), fork(watchSigIn)]);
}

export default authSaga;
