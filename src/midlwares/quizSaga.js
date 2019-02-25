import {call, put, take, takeEvery, takeLatest, select} from 'redux-saga/effects';

import {loadSteps, postStep} from "../api/quiz";
import {QUIZ_STEPS_LOAD, QUIZ_DATA_SET, QUIZ_ACTIVE_STEP_SET, QUIZ_STEP_SEND} from "../constants";
import {stepsLoadFail, stepsLoadSuccess, stepSend, stepSendSuccess, stepSendFail} from "../AC/quiz";
import {userIdSelector, sessionIdSelector} from "../selectors/user";
import {activeStepIndexSelector} from "../selectors/quiz";

export function* quizStepsLoadSaga() {
    try {
        const steps = yield call(loadSteps);
        yield put(stepsLoadSuccess(steps));
    } catch (error) {
        yield put(stepsLoadFail(error));
    }
}

export function* quizDataSetSaga(action) {
    const {data} = action.payload;
    const step = yield select(activeStepIndexSelector);

    yield take(QUIZ_ACTIVE_STEP_SET);
    yield put(stepSend(step, data));
}

export function* quizStepSendSaga(action) {
    const {step, data} = action.payload;
    const id = yield select(userIdSelector);
    const sessionId = yield select(sessionIdSelector);
    const stepData = {
        step,
        sessionId,
        id,
        value: {...data},
    };

    try {
        const response = yield call(postStep, stepData);
        yield put(stepSendSuccess(response.data));
    } catch (error) {
        yield put(stepSendFail(error));
    }
}

export default function* () {
    yield takeEvery(QUIZ_STEPS_LOAD, quizStepsLoadSaga);
    yield takeLatest(QUIZ_DATA_SET, quizDataSetSaga);
    yield takeEvery(QUIZ_STEP_SEND, quizStepSendSaga);
}
