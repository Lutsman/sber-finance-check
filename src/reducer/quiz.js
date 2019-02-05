import {
    _FAIL,
    _SUCCESS,
    QUIZ_ACTIVE_STEP_APPROVE,
    QUIZ_ACTIVE_STEP_SET,
    QUIZ_DATA_SET,
    QUIZ_INIT,
    QUIZ_STEPS_LOAD
} from "../constants";
import {isEmptyObj} from "../utils";
import {steps} from "../fixtures";

export const INITIAL_STATE = {
    steps: [],
    stepsLoading: false,
    stepsLoaded: false,
    activeStep: 0,
    lastApprovedStep: -1,
    data: {},
    isComplete: false,
    history: [],
    errors: [],
};

export default (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case QUIZ_INIT:
            const {data, history} = state;
            return {
                ...state,
                data: {},
                activeStep: 0,
                isComplete: false,
                history: isEmptyObj(data) ? history : [...history, data],
            };
        case QUIZ_STEPS_LOAD:
            return {
                ...state,
                stepsLoading: true,
            };
        case QUIZ_STEPS_LOAD + _SUCCESS:
            return {
                ...state,
                steps: payload.steps,
                stepsLoading: false,
                stepsLoaded: true,
            };
        case QUIZ_STEPS_LOAD + _FAIL:
            return {
                ...state,
                stepsLoading: false,
                stepsLoaded: false,
            };
        case QUIZ_ACTIVE_STEP_SET:
            return {
                ...state,
                activeStep: payload.activeStep,
                isComplete: payload.activeStep === (state.steps && state.steps.length),
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
