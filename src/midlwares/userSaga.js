import {call, put, takeLatest} from 'redux-saga/effects';

import {userGet, userGetSuccess, userGetFail} from "../AC/user";
import {USER_ID_SET, USER_GET} from "../constants";
import {getUserName} from "../api/user";

export function* userIdSetSaga(action) {
    const {id} = action.payload;

    yield put(userGet(id));
}

export function* userGetSaga(action) {
    const {id} = action.payload;

    try {
        const response = yield call(getUserName, id);
        yield put(userGetSuccess({name: response.data || 'уважаемый пользователь'}));
    } catch (error) {
        yield put(userGetFail(error));
    }
}

export default function*() {
    yield takeLatest(USER_ID_SET, userIdSetSaga);
    yield takeLatest(USER_GET, userGetSaga);
}
