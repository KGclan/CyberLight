import { call, put, takeEvery } from "redux-saga/effects";

import { getNewsRequest } from "../api";

function* getNewsSaga(action: any) {
    const {offset} = action.payload;
    const {count, results} = yield call(getNewsRequest, offset);

    yield put({type: 'SET_NEWS', payload: {data: results, count}});
};

export default function* watchNewsSagas() {
    yield takeEvery('LOAD_NEWS', getNewsSaga);
};