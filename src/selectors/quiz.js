export const getApproveSelector = state =>
    state.quiz.activeStep <= state.quiz.lastApprovedStep;
export const nextStepDisable = (state, props) =>
    state.quiz.activeStep > state.quiz.lastApprovedStep ||
    state.quiz.activeStep === props.steps.length - 1;
export const prevStepDisable = (state, props) =>
    state.quiz.activeStep === 0 ||
    state.quiz.activeStep === props.steps.length - 1;
export const getDataSelector = state => state.quiz.data;