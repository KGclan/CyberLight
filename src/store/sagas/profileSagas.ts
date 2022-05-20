import { call, put, takeEvery } from "redux-saga/effects";

import { getProfileRequest, getProfilesRequest } from "../api";

function* getProfilesSaga(action: any) {
    const {offset, title, league, team} = action.payload;
    const {count, results} = yield call(getProfilesRequest, offset, title, league, team);

    yield put({type: 'SET_PROFILES', payload: {profiles: results, totalCount: count}});
};

function* getProfileSaga(action: any) {
    const {id} = action.payload;
    const data: Promise<any> = yield call(getProfileRequest, id);

    yield put({type: 'SET_PROFILE', payload: {profiles: data, totalCount: 1}});
}

export default function* watchProfileSagas() {
    yield takeEvery('LOAD_PROFILES', getProfilesSaga);
    yield takeEvery('LOAD_PROFILE', getProfileSaga);
};