import {FORMS_PHONE_SEND, _SUCCESS, _FAIL, FORMS_PHONE_SEND_RESET} from "../constants";

export const INITIAL_STATE = {
    phoneSending: false,
    phoneSentComplete: false,
    phoneSentSuccess: false,
    errors: [],
};

export default (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case FORMS_PHONE_SEND:
            return {
                ...state,
                phoneSending: true,
            };
        case FORMS_PHONE_SEND + _SUCCESS:
            return {
                ...state,
                phoneSending: false,
                phoneSentComplete: true,
                phoneSentSuccess: true,
            };
        case FORMS_PHONE_SEND + _FAIL:
            return {
                ...state,
                phoneSending: false,
                phoneSentComplete: true,
                phoneSentSuccess: false,
                errors: [...state.errors, payload.error],
            };
        case FORMS_PHONE_SEND_RESET:
            return {
                ...state,
                ...INITIAL_STATE,
                errors: [...state.errors],
            };
        default:
            return state;
    }
}
