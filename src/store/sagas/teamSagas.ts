import { call, put, takeEvery } from "redux-saga/effects";

import { getTeamsRequest } from "../api";

function* getTeamsSaga(action: any) {
    const {title, league} = action.payload;

    const {count, results} = yield call(getTeamsRequest, league, title);

    yield put({type: 'SET_TEAMS', payload: {teams: results, totalCount: count}});
}

export default function* watchTeamSagas() {
    yield takeEvery('LOAD_TEAMS', getTeamsSaga);
}