import { USER_GET, _FAIL, _SUCCESS, USER_ID_SET } from "../constants";
import {getRandomId} from "../utils";

export const INITIAL_STATE = {
    loading: false,
    loaded: false,
    userData: {},
    sessionId: getRandomId(),
    errors: [],
};

export default (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case USER_ID_SET:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    id: payload.id,
                },
            };
        case USER_GET:
            return {
                ...state,
                loading: true,
            };
        case USER_GET + _SUCCESS:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...payload.userData,
                },
                loading: false,
                loaded: true,
            };
        case USER_GET + _FAIL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
