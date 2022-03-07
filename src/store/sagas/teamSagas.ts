import { call, put, takeEvery } from "redux-saga/effects";

import { getTeamsRequest } from "../response/api";

function* getTeamsSaga() {
    const data: any[] = yield call(getTeamsRequest);

    yield put({type: 'SET_TEAMS', payload: data});
}

export default function* watchTeamSagas() {
    yield takeEvery('LOAD_TEAMS', getTeamsSaga);
}