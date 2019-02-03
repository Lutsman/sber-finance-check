import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';

import {summaryGetSuccess, summaryGetFail} from "../AC/summary";
import {SUMMARY_GET} from "../constants";
import {dataSelector} from "../selectors/quiz";
import {getSummary} from "../api/summary";
import {getRandomId} from "../utils";

export function* loadSummary() {
    const fileds = yield select(dataSelector);
    try {
        let items = call(getSummary, fileds);
        items = items.map( item => ({...item, id: getRandomId()}));
        yield put(summaryGetSuccess(items));
    } catch (error) {
        yield put(summaryGetFail(error));
    }

}

export default function* () {
    yield takeLatest(SUMMARY_GET, loadSummary);
}
