import { all, fork } from 'redux-saga/effects';

import watchHomeSagas from './sagas/homeSagas';

export default function* rootSaga() {
    yield all([
        fork(watchHomeSagas),
    ]);
};