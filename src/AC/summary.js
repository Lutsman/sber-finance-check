import {_FAIL, _SUCCESS, SUMMARY_GET} from "../constants";

export const summaryGet = () => ({
    type: SUMMARY_GET,
});

export const summaryGetSuccess = itemsData => ({
    type: SUMMARY_GET + _SUCCESS,
    payload: {itemsData},
});

export const summaryGetFail = error => ({
    type: SUMMARY_GET + _FAIL,
    payload: {error},
});
