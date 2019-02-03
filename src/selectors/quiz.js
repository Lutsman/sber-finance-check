import {createSelector} from 'reselect';

import {STEP_TYPE} from "../components/Quiz/constants";
import {QuizItemRadio} from "../components/Quiz/QuizItemRadio";
import {QuizItemDual} from "../components/Quiz/QuizItemDual";
import {QuizItemVoting} from "../components/Quiz/QuizItemVoting";
import {QuizItemCheckbox} from "../components/Quiz/QuizItemCheckbox";

export const approveSelector = state => state.quiz.activeStep <= state.quiz.lastApprovedStep;
export const activeStepIndexSelector = state => state.quiz.activeStep;
export const nextStepDisableSelector = state => state.quiz.activeStep > state.quiz.lastApprovedStep;
export const dataSelector = state => state.quiz.data;
export const isCompleteSelector = state => state.quiz.isComplete;
export const stepsSelector = state => state.quiz.steps;
export const lastApprovedStepSelector = state => state.quiz.lastApprovedStep;

export const quizFillingSelector = createSelector(lastApprovedStepSelector, stepsSelector, (lastApprovedStepIndex, steps) => Math.round((lastApprovedStepIndex + 1) / steps.length * 100));
export const prevStepDisableSelector = createSelector(activeStepIndexSelector, stepsSelector, (activeStepIndex, steps) => activeStepIndex === 0 || activeStepIndex === steps.length - 1);
export const activeStepSelector = createSelector(activeStepIndexSelector, stepsSelector, (activeStepIndex, steps) => steps[activeStepIndex]);
export const  quizItemSelector = createSelector(activeStepSelector, step => {
    if (!step) return null;

    switch (step.type) {
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
