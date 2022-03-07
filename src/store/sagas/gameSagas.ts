import { call, put, takeEvery } from "redux-saga/effects";

import { getGamesRequest } from "../response/api";

function* getGamesSaga() {
    const data: any[] = yield call(getGamesRequest);

    yield put({type: 'SET_GAMES', payload: data});
}

export default function* watchGameSagas() {
    yield takeEvery('LOAD_GAMES', getGamesSaga);
}