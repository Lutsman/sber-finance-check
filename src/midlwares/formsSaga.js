import {call, put, takeLatest, take, select} from 'redux-saga/effects';

import {FORMS_PHONE_SEND, QUIZ_STEP_SEND, _SUCCESS} from "../constants";
import {sendPhone} from "../api/forms";
import {formsSendPhoneSuccess, formsSendPhoneFail} from "../AC/forms";
import {stepSend} from "../AC/quiz";
import {activeStepIndexSelector} from "../selectors/quiz";

export function* formsSendPhoneSaga(action) {
    const {phone} = action.payload;
    const step = yield select(activeStepIndexSelector);

    yield put(stepSend(step, {phone}));
    yield take(QUIZ_STEP_SEND + _SUCCESS);
    yield put(formsSendPhoneSuccess());

    // try {
    //     yield call(sendPhone, phone);
    //     yield put(formsSendPhoneSuccess());
    // } catch (error) {
    //     yield put(formsSendPhoneFail(error));
    // }
}

export default function* () {
    yield takeLatest(FORMS_PHONE_SEND, formsSendPhoneSaga);
}
