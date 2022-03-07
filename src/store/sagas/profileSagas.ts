import { call, put, takeEvery } from "redux-saga/effects";

import { getProfilesRequest } from "../response/api";

function* getProfilesSaga() {
    const data: any[] = yield call(getProfilesRequest);

    yield put({type: 'SET_PROFILES', payload: data});
}

export default function* watchProfileSagas() {
    yield takeEvery('LOAD_PROFILES', getProfilesSaga);
}