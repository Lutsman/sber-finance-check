import * as React from 'react';
import {connect} from 'react-redux';

import {QuizInner} from './QuizInner';
import {
    activeStepSelector, activeStepIndexSelector,
    approveSelector,
    dataSelector, isCompleteSelector,
    nextStepDisableSelector,
    prevStepDisableSelector,
    quizItemSelector, stepsLoadingSelector,
    stepsLoadedSelector,
} from "../../selectors/quiz";
import {activeStepApprove, activeStepSet, dataSet, init, stepsLoad} from "../../AC/quiz";
import {QuizSummary} from "../QuizSummary";

export const QuizContainerComponent = props => {
    return props.isComplete ? (<QuizSummary reinit={props.init} />) : (<QuizInner {...props}/>);
};

const mapStateToProps = state => ({
    stepsLoading: stepsLoadingSelector(state),
    stepsLoaded: stepsLoadedSelector(state),
    isApproved: approveSelector(state),
    activeStepIndex: activeStepIndexSelector(state),
    activeStep: activeStepSelector(state),
    nextStepDisable: nextStepDisableSelector(state),
    prevStepDisable: prevStepDisableSelector(state),
    data: dataSelector(state),
    isComplete: isCompleteSelector(state),
    QuizItem: quizItemSelector(state),
});

const mapDispatchToProps = dispatch => ({
    loadSteps: () => dispatch(stepsLoad()),
    setApprove: approve => dispatch(activeStepApprove(approve)),
    setData: data => dispatch(dataSet(data)),
    setActiveStep: step => dispatch(activeStepSet(step)),
    init: () => dispatch(init()),
});

export const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {activeStepIndex, nextStepDisable, prevStepDisable} = stateProps;
    const {setActiveStep} = dispatchProps;
    const nextStep = () => !nextStepDisable && setActiveStep(activeStepIndex + 1);
    const prevStep = () => !prevStepDisable && setActiveStep(activeStepIndex - 1);

    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        nextStep,
        prevStep,
    };
};

export const QuizOntainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(QuizContainerComponent);
