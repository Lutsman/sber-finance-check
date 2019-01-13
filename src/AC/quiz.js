import {QUIZ_ACTIVE_STEP_APPROVE, QUIZ_ACTIVE_STEP_SET, QUIZ_DATA_SET, QUIZ_FINAL_STEP_APPROVE} from "../constants";

export const activeStepSet = activeStep => ({
    type: QUIZ_ACTIVE_STEP_SET,
    payload: {activeStep},
});

export const activeStepApprove = approve => ({
    type: QUIZ_ACTIVE_STEP_APPROVE,
    payload: {approve},
});

export const quizFinalStepApprove = () => ({
    type: QUIZ_FINAL_STEP_APPROVE,
});

export const quizDataSet = data => ({
    type: QUIZ_DATA_SET,
    payload: {data},
});
