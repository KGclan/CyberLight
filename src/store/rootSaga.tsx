import { all, fork } from 'redux-saga/effects';

import watchHomeSagas from './sagas/gameSagas';
import watchMatchsSagas from './sagas/matchSagas';
import watchNewsSagas from './sagas/newsSagas';
import watchTopSagas from './sagas/profileSagas';
import watchAuthSagas from './sagas/settingsSagas';
import watchTeamSagas from './sagas/teamSagas';

export default function* rootSaga() {
    yield all([
        fork(watchHomeSagas),
        fork(watchTopSagas),
        fork(watchTeamSagas),
        fork(watchMatchsSagas),
        fork(watchNewsSagas),
        fork(watchAuthSagas),
    ]);
};