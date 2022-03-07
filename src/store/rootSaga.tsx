import { all, fork } from 'redux-saga/effects';

import watchHomeSagas from './sagas/gameSagas';
import watchMatchsSagas from './sagas/matchSagas';
import watchTopSagas from './sagas/profileSagas';
import watchTeamSagas from './sagas/teamSagas';

export default function* rootSaga() {
    yield all([
        fork(watchHomeSagas),
        fork(watchTopSagas),
        fork(watchTeamSagas),
        fork(watchMatchsSagas),
    ]);
};