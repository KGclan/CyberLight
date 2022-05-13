import { call, put, takeEvery } from "redux-saga/effects";

import { getMatchsRequest } from "../api";

function* getMatchsSaga(action: any) {
    const {title, offset, limit, league} = action.payload;
    const {count, results} = yield call(
        getMatchsRequest,
        title,
        offset,
        limit,
        league,
    );

    yield put({type: 'SET_MATCHS', payload: {data: results, count}});
}

export default function* watchMatchsSagas() {
    yield takeEvery('LOAD_MATCHS', getMatchsSaga);
}