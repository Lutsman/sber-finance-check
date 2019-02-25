import {put, takeLatest, take, select, race} from 'redux-saga/effects';

import {FORMS_PHONE_SEND, QUIZ_STEP_SEND, _SUCCESS, _FAIL} from "../constants";
import {formsSendPhoneSuccess, formsSendPhoneFail} from "../AC/forms";
import {stepSend} from "../AC/quiz";
import {activeStepIndexSelector} from "../selectors/quiz";

export function* formsSendPhoneSaga(action) {
    const {phone} = action.payload;
    const step = yield select(activeStepIndexSelector);
    yield put(stepSend(step, {phone}));
    const {success, fail} = yield race({
        success: take(QUIZ_STEP_SEND + _SUCCESS),
        fail: take(QUIZ_STEP_SEND + _FAIL)
    });

    if (success) {
        yield put(formsSendPhoneSuccess());
    } else {
        yield put(formsSendPhoneFail(fail.payload.error));
    }
}

export default function* () {
    yield takeLatest(FORMS_PHONE_SEND, formsSendPhoneSaga);
}
