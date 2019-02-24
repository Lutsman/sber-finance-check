import {
    QUIZ_ACTIVE_STEP_APPROVE,
    QUIZ_ACTIVE_STEP_SET,
    QUIZ_DATA_SET,
    QUIZ_INIT,
    QUIZ_STEPS_LOAD,
    _SUCCESS,
    _FAIL,
    QUIZ_STEP_SEND,
} from "../constants";

export const init = () => ({
    type: QUIZ_INIT,
});

export const stepsLoad = () => ({
    type: QUIZ_STEPS_LOAD,
});

export const stepsLoadSuccess = steps => ({
    type: QUIZ_STEPS_LOAD + _SUCCESS,
    payload: {steps},
});

export const stepsLoadFail = error => ({
    type: QUIZ_STEPS_LOAD + _FAIL,
    payload: {error},
});

export const activeStepSet = activeStep => ({
    type: QUIZ_ACTIVE_STEP_SET,
    payload: {activeStep},
});

export const activeStepApprove = approve => ({
    type: QUIZ_ACTIVE_STEP_APPROVE,
    payload: {approve},
});

export const dataSet = data => ({
    type: QUIZ_DATA_SET,
    payload: {data},
});

export const stepSend = data => ({
    type: QUIZ_STEP_SEND,
    payload: {data},
});

export const stepSendSuccess = data => ({
    type: QUIZ_STEP_SEND,
    payload: {data},
});

export const stepSendFail = error => ({
    type: QUIZ_STEP_SEND,
    payload: {error},
});
