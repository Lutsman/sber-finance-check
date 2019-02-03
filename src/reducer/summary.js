import {SUMMARY_GET, _SUCCESS, _FAIL} from "../constants";

export const INITIAL_STATE = {
    items: null,
    errors: [],
};

export default (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case SUMMARY_GET + _SUCCESS:
            return {
                ...state,
                items: payload.items,
            };
        case SUMMARY_GET + _FAIL:
            return {
                ...state,
                errors: [...state.errors, payload.error],
            };
        default:
            return state;
    }
};
