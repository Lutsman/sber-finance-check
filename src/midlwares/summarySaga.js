import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';

import {summaryGetSuccess, summaryGetFail} from "../AC/summary";
import {SUMMARY_GET} from "../constants";
import {dataSelector} from "../selectors/quiz";
import {getSummary} from "../api/summary";
import {getRandomId} from "../utils";

export function* loadSummary(...rest) {
    console.dir(rest);
    const fileds = yield select(dataSelector);
    try {
        const itemsData = yield call(getSummary, fileds);
        const proceedData = {
            ...itemsData,
            items: itemsData.items.map( item => ({...item, id: getRandomId()}))
        };
        yield put(summaryGetSuccess(proceedData));
    } catch (error) {
        yield put(summaryGetFail(error));
    }

}

export default function* () {
    yield takeLatest(SUMMARY_GET, loadSummary);
}
