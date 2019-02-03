import {QUIZ_ACTIVE_STEP_APPROVE, QUIZ_ACTIVE_STEP_SET, QUIZ_DATA_SET, QUIZ_INIT} from "../constants";
import {isEmptyObj} from "../utils";
import {steps} from "../fixtures";

export const INITIAL_STATE = {
    stepCount: steps.length,
    activeStep: 0,
    lastApprovedStep: -1,
    data: {},
    isComplete: false,
    history: [],
    steps: steps || [],
};

export default (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case QUIZ_INIT:
            const {data, history} = state;
            return {
                ...INITIAL_STATE,
                history: isEmptyObj(data) ? history : [...history, data],
            };
        case QUIZ_ACTIVE_STEP_SET:
            return {
                ...state,
                activeStep: payload.activeStep,
                isComplete: payload.activeStep === state.stepCount,
            };
        case QUIZ_ACTIVE_STEP_APPROVE:
            const {activeStep, lastApprovedStep} = state;
            if (payload.approve) {
                if (activeStep < lastApprovedStep) return state;

                return {
                    ...state,
                    lastApprovedStep: activeStep,
                };
            } else {
                if (activeStep > lastApprovedStep) return state;

                return {
                    ...state,
                    lastApprovedStep: activeStep - 1,
                };
            }
        case QUIZ_DATA_SET:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload.data,
                },
            };
        default:
            return state;
    }
};
