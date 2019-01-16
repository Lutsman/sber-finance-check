import * as React from 'react';
import {connect} from 'react-redux';

import {Quiz} from './Quiz';
import {
    activeStepSelector,
    approveSelector,
    dataSelector, isCompleteSelector,
    nextStepDisableSelector,
    prevStepDisableSelector
} from "../../selectors/quiz";
import {activeStepApprove, activeStepSet, dataSet, init} from "../../AC/quiz";
import {QuizSummary} from "./QuizSummary";

export const QuizContainerComponent = props => {
    return props.isComplete ? (<QuizSummary reinit={props.init} />) : (<Quiz {...props}/>);
};

const mapStateToProps = state => ({
    isApproved: approveSelector(state),
    activeStep: activeStepSelector(state),
    nextStepDisable: nextStepDisableSelector(state),
    prevStepDisable: prevStepDisableSelector(state),
    data: dataSelector(state),
    isComplete: isCompleteSelector(state),
});

const mapDispatchToProps = dispatch => ({
    setApprove: approve => dispatch(activeStepApprove(approve)),
    setData: data => dispatch(dataSet(data)),
    setActiveStep: step => dispatch(activeStepSet(step)),
    init: () => dispatch(init()),
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

export const QuizOntainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(QuizContainerComponent);
