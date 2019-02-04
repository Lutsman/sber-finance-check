import {call, put, takeLatest} from 'redux-saga/effects';

import {FORMS_PHONE_SEND} from "../constants";
import {sendPhone} from "../api/forms";
import {formsSendPhoneSuccess, formsSendPhoneFail} from "../AC/forms";

export function* formsSendPhoneSaga(action) {
    const {phone} = action.payload;

    try {
        yield call(sendPhone, phone);
        yield put(formsSendPhoneSuccess());
    } catch (error) {
        yield put(formsSendPhoneFail(error));
    }
}

export default function* () {
    takeLatest(FORMS_PHONE_SEND, formsSendPhoneSaga);
}
