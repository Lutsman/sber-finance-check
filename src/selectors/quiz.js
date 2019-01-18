import {createSelector} from 'reselect';

import {STEP_TYPE, STEPS} from "../components/Quiz/constants";
import {QuizItemRadio} from "../components/Quiz/QuizItemRadio";
import {QuizItemDual} from "../components/Quiz/QuizItemDual";
import {QuizItemVoting} from "../components/Quiz/QuizItemVoting";
import {QuizItemCheckbox} from "../components/Quiz/QuizItemCheckbox";

export const approveSelector = state => state.quiz.activeStep <= state.quiz.lastApprovedStep;
export const activeStepIndexSelector = state => state.quiz.activeStep;
export const nextStepDisableSelector = state => state.quiz.activeStep > state.quiz.lastApprovedStep;
export const prevStepDisableSelector = state => state.quiz.activeStep === 0 || state.quiz.activeStep === STEPS.length - 1;
export const dataSelector = state => state.quiz.data;
export const quizFillingSelector = state => Math.round((state.quiz.lastApprovedStep + 1) / STEPS.length * 100);
export const isCompleteSelector = state => state.quiz.isComplete;

export const activeStepSelector = createSelector(activeStepIndexSelector, index => STEPS[index]);
export const  quizItemSelector = createSelector(activeStepSelector, step => {
    if (!step) return null;

    switch (step.component) {
        case STEP_TYPE.radio:
            return QuizItemRadio;
        case STEP_TYPE.dual:
            return QuizItemDual;
        case STEP_TYPE.vote:
            return QuizItemVoting;
        case STEP_TYPE.checkbox:
            return QuizItemCheckbox;
        default:
            return null;
    }
});
