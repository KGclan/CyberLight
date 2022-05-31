import { call, put, takeEvery } from "redux-saga/effects";

import snackbar from "./utils/snackbar";
import { userAuth, logout, registration } from "../api";

function* loginSaga(action: any) {
    const {user, password} = action.payload;

    try {
        const {auth_token} = yield call(userAuth, user, password);

        localStorage.setItem('token', auth_token);
        
        yield put({type: 'SET_AUTH', payload: {auth: true}});
        snackbar('Вы успешно вошли в свой аккаунт.');
    } catch (error) {
        snackbar('Произошла ошибка!');
        console.log(error);
    };
}

function* logoutSaga() {

    try {
        yield call(logout);

        localStorage.removeItem('token');
        
        yield put({type: 'SET_AUTH', payload: {auth: false}});
        snackbar('Вы успешно вышли из аккаунта.');
        
    } catch (error) {
        snackbar('Произошла ошибка!');
        console.log(error);
    };
}

function* registrationSaga(action: any) {
    const {user, password} = action.payload;

    try {
        const {username} = yield call(registration, user, password);
        
        yield put({type: 'SET_USER', payload: {user: username}});
        snackbar('Вы успешно зарегистрировались.');
    } catch (error) {
        snackbar('Произошла ошибка!');
        console.log(error);
    };
}

export default function* watchAuthSagas() {
    yield takeEvery('LOGIN', loginSaga);
    yield takeEvery('LOGOUT', logoutSaga);
    yield takeEvery('REGISTRATION', registrationSaga);
}