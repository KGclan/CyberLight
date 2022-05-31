import { call, put, takeEvery } from "redux-saga/effects";

import { getDetailedNewsRequest, getNewsRequest } from "../api";

function* getNewsSaga(action: any) {
    const {offset} = action.payload;
    const {count, results} = yield call(getNewsRequest, offset);

    yield put({type: 'SET_NEWS', payload: {data: results, count}});
};

function* getDetailedNewsSaga(action: any) {
    const {id} = action.payload;
    const data: Promise<any> = yield call(getDetailedNewsRequest, id);

    yield put({type: 'SET_DETAILED_NEWS', payload: {data}});
}

export default function* watchNewsSagas() {
    yield takeEvery('LOAD_NEWS', getNewsSaga);
    yield takeEvery('LOAD_DETAILED_NEWS', getDetailedNewsSaga);
};