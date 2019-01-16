import {STEPS} from "../components/Quiz/constants";

export const approveSelector = state =>
    state.quiz.activeStep <= state.quiz.lastApprovedStep;
export const activeStepSelector = state =>
    state.quiz.activeStep;
export const nextStepDisableSelector = (state, props) =>
    state.quiz.activeStep > state.quiz.lastApprovedStep ||
    state.quiz.activeStep === props.steps.length - 1;
export const prevStepDisableSelector = (state, props) =>
    state.quiz.activeStep === 0 ||
    state.quiz.activeStep === props.steps.length - 1;
export const dataSelector = state => state.quiz.data;
export const  quizFillingSelector = state => Math.round((state.quiz.lastApprovedStep + 1) / STEPS.length * 100);
