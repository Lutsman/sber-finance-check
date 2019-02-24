import {USER_GET, _SUCCESS, _FAIL, USER_ID_SET} from "../constants";

export const userIdSet = id => ({
    type: USER_ID_SET,
    payload: {id},
});

export const userGet = id => ({
    type: USER_GET,
    payload: {id},
});

export const userGetSuccess = userData => ({
    type: USER_GET + _SUCCESS,
    payload: {userData},
});

export const userGetFail = error => ({
    type: USER_GET + _FAIL,
    payload: {error},
});
