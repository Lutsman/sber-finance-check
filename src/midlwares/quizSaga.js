import {call, put, takeEvery} from 'redux-saga/effects';

import {loadSteps} from "../api/quiz";
import {QUIZ_STEPS_LOAD} from "../constants";
import {stepsLoadFail, stepsLoadSuccess} from "../AC/quiz";

export function* quizStepsLoad() {
    try {
        const steps = yield call(loadSteps);
        yield put(stepsLoadSuccess(steps));
    } catch (error) {
        yield put(stepsLoadFail(error));
    }
}

export default function* () {
    yield takeEvery(QUIZ_STEPS_LOAD, quizStepsLoad);
}
