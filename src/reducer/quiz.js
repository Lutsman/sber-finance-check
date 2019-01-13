import {QUIZ_ACTIVE_STEP_APPROVE, QUIZ_ACTIVE_STEP_SET, QUIZ_DATA_SET} from "../constants";

export const INITIAL_STATE = {
    activeStep: 0,
    lastApprovedStep: -1,
    data: {},
};
 export const reducer = (state = INITIAL_STATE, action) => {
     const {type, payload} = action;

     switch(type) {
         case QUIZ_ACTIVE_STEP_SET:
             return {
                 ...state,
                 activeStep: payload.activeStep,
             };
         case QUIZ_ACTIVE_STEP_APPROVE:
             const {activeStep, lastApprovedStep} = state;
             if (payload.approve) {
                 if (activeStep < lastApprovedStep) return;

                 return {
                     ...state,
                     lastApprovedStep: activeStep,
                 };
             } else {
                 if (activeStep > lastApprovedStep) return;

                 return {
                     ...state,
                     lastApprovedStep: activeStep - 1,
                 };
             }

             return state;
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
