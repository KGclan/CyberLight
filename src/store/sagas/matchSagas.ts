import { call, put, takeEvery } from "redux-saga/effects";

import { getMatchsRequest } from "../response/api";

function* getMatchsSaga() {
    const data: any[] = yield call(getMatchsRequest);

    yield put({type: 'SET_MATCHS', payload: data});
}

export default function* watchMatchsSagas() {
    yield takeEvery('LOAD_MATCHS', getMatchsSaga);
}