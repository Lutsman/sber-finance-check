import {QUIZ_ACTIVE_STEP_APPROVE, QUIZ_ACTIVE_STEP_SET, QUIZ_DATA_SET, QUIZ_FINAL_STEP_APPROVE, QUIZ_INIT} from "../constants";

export const init = () => ({
    type: QUIZ_INIT,
});

export const activeStepSet = activeStep => ({
    type: QUIZ_ACTIVE_STEP_SET,
    payload: {activeStep},
});

export const activeStepApprove = approve => ({
    type: QUIZ_ACTIVE_STEP_APPROVE,
    payload: {approve},
});

export const finalStepApprove = () => ({
    type: QUIZ_FINAL_STEP_APPROVE,
});

export const dataSet = data => ({
    type: QUIZ_DATA_SET,
    payload: {data},
});
