import {FORMS_PHONE_SEND, _SUCCESS, _FAIL, FORMS_PHONE_SEND_RESET} from "../constants";

export const fromsSendPhone = phone => ({
    type: FORMS_PHONE_SEND,
    payload: {phone},
});

export const formsSendPhoneSuccess = () => ({
    type: FORMS_PHONE_SEND + _SUCCESS,
});

export const formsSendPhoneFail = error => ({
    type: FORMS_PHONE_SEND + _FAIL,
    payload: {error},
});

export const fromsSendPhoneReset = () => ({
    type: FORMS_PHONE_SEND_RESET,
});
