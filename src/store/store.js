import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import reducerAuth from './auth/reducer';
import reducerCov from './covi/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: reducerAuth,
    cov: reducerCov,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
