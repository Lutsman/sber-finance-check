import * as React from 'react';

import {Svg} from "../common/Svg";
import {Facts} from "../Facts";
import {MobileProgressbar} from "../ProgressBars/MobileProgressbar";
import {LoadingSpinner} from "../common/LoadingSpinner/index";

import logoIcon from "../../assets/images/logo-icon.png";
import iconArrow from "../../assets/images/icon-arrow.svg";

export class QuizInner extends React.Component {
    componentDidMount() {
        const {loadSteps, stepsLoading, stepsLoaded} = this.props;

        if (stepsLoading || stepsLoaded) return;

        loadSteps();
    }

    render() {
        const {
            activeStep, data, setApprove, setData, nextStep, prevStep,
            nextStepDisable, prevStepDisable, isApproved, QuizItem, stepsLoading,
            stepsLoaded
        } = this.props;

        if (stepsLoading || !stepsLoaded) return (
            <div className="tm-main">
                <div className="tm-content-wrapper uk-flex uk-flex-wrap uk-flex-stretch">
                    <div className="tm-content-decoration"/>
                    <div className="tm-content uk-child-width-1-1 uk-flex uk-flex-wrap uk-flex-center">
                        <LoadingSpinner/>
                    </div>
                </div>
            </div>
        );

        const {title, question, fieldsData} = activeStep;

        return (
            <div className="tm-main">
                <div className="tm-content-wrapper uk-flex uk-flex-wrap uk-flex-stretch">
                    <div className="tm-content-decoration"/>
                    <div className="tm-content uk-child-width-1-1 uk-flex uk-flex-wrap uk-flex-between">
                        <div>
                            <div className="tm-content-header">
                                <div className="uk-container uk-flex uk-flex-middle uk-flex-between">
                                    <a className="uk-logo uk-flex uk-flex-middle" href="/">
                                        <img src={logoIcon} alt="" className="uk-margin-small-right"/>
                                        <span>{title}</span>
                                    </a>

                                    <button
                                        className="tm-button-continue tm-border-rounded uk-visible@s uk-button uk-button-primary"
                                        onClick={nextStep}
                                        disabled={nextStepDisable}>
                                        Продолжить <Svg src={iconArrow} alt=""/>
                                    </button>
                                </div>
                            </div>
                            <MobileProgressbar/>
                            <div className="tm-content-inner">
                                <div className="uk-container">
                                    <div className="uk-flex uk-flex-between">
                                        <h2>{question}</h2>

                                        <button
                                            className="tm-button-next tm-border-rounded uk-visible@s uk-button uk-button-default"
                                            onClick={prevStep}
                                            disabled={prevStepDisable}>
                                            Назад <Svg src={iconArrow} alt=""/>
                                        </button>
                                    </div>
                                    <div className="tm-answer">

                                        <QuizItem setData={setData} setApprove={setApprove} data={data}
                                                  fieldsData={fieldsData}/>
                                        {isApproved && <Facts/>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tm-content-footer">
                            <div className="uk-container">
                                <div className="uk-text-meta uk-visible@s">Источник: Премьер</div>
                            </div>
                        </div>
                        <div
                            className="uk-hidden@s tm-bottom-panel uk-flex uk-flex-wrap uk-flex-between uk-position-fixed uk-position-bottom">
                            <button className="tm-button-next tm-border-rounded uk-button uk-button-default"
                                    onClick={prevStep}
                                    disabled={prevStepDisable}>
                                Назад <Svg src={iconArrow} alt=""/>
                            </button>
                            <button className="tm-button-continue tm-border-rounded uk-button uk-button-primary"
                                    onClick={nextStep}
                                    disabled={nextStepDisable}>
                                Продолжить <Svg src={iconArrow} alt=""/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
