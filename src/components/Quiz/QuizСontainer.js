import * as React from 'react';
import {connect} from 'react-redux';

import {Quiz} from './Quiz';
import {STEPS} from "./constants";
import {
    activeStepSelector,
    approveSelector,
    dataSelector,
    nextStepDisableSelector,
    prevStepDisableSelector
} from "../../selectors/quiz";
import {activeStepApprove, activeStepSet, dataSet, finalStepApprove} from "../../AC/quiz";

export const QuizContainerInstance = props => {
    return (
        <Quiz {...props}/>
    );
};

const mapStateToProps = state => ({
    isApproved: approveSelector(state),
    activeStep: activeStepSelector(state),
    nextStepDisable: nextStepDisableSelector(state, {steps: STEPS}),
    prevStepDisable: prevStepDisableSelector(state, {steps: STEPS}),
    data: dataSelector(state),
});

const mapDispatchToProps = dispatch => ({
    setApprove: approve => dispatch(activeStepApprove(approve)),
    finalStepApprove: () => dispatch(finalStepApprove()),
    setData: data => dispatch(dataSet(data)),
    setActiveStep: step => dispatch(activeStepSet(step)),
});

export const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {activeStep, nextStepDisable, prevStepDisable} = stateProps;
    const {setActiveStep} = dispatchProps;
    const nextStep = () => !nextStepDisable && setActiveStep(activeStep + 1);
    const prevStep = () => !prevStepDisable && setActiveStep(activeStep - 1);

    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        nextStep,
        prevStep,
    };
};

export const QuizOntainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(QuizContainerInstance);
