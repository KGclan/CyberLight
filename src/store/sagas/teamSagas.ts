import { call, put, takeEvery } from "redux-saga/effects";

import { getTeamRequest, getTeamsRequest } from "../api";

function* getTeamsSaga(action: any) {
    const {title, league} = action.payload;

    const {count, results} = yield call(getTeamsRequest, league, title);

    yield put({type: 'SET_TEAMS', payload: {teams: results, totalCount: count}});
}

function* getTeamSaga(action: any) {
    const {id} = action.payload;

    const data: Promise<any> = yield call(getTeamRequest, id);

    yield put({type: 'SET_TEAM', payload: {teams: data, totalCount: 1}});
}

export default function* watchTeamSagas() {
    yield takeEvery('LOAD_TEAMS', getTeamsSaga);
    yield takeEvery('LOAD_TEAM', getTeamSaga);
}