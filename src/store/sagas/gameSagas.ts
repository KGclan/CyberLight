import { call, put, takeEvery } from "redux-saga/effects";

import { getGamesRequest } from "../api";

function* getGamesSaga(action: any) {
    yield put({type: 'SET_GAMES_LOADER', payload: true});

    try {
        const {offset} = action.payload;
        const {count, results} = yield call(getGamesRequest, offset);

        yield put({type: 'SET_GAMES', payload: {games: results, totalCount: count}});
    } catch (error) {
        console.log(error);
    } finally {
        yield put({type: 'SET_GAMES_LOADER', payload: false});
    }
}

export default function* watchGameSagas() {
    yield takeEvery('LOAD_GAMES', getGamesSaga);
}