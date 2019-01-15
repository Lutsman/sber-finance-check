import * as React from 'react';

import {Svg} from "../common/Svg";

import {STEPS} from "./constants";
import logoIcon from "../../images/logo-icon.png";
import iconArrow from "../../images/icon-arrow.svg";

export const Quiz = props => {
    const {activeStep, data, setApprove, setData, nextStep, prevStep,
        nextStepDisable, prevStepDisable, finalStepApprove} = props;
    const {title, component: QuizStep, question, fieldsData} = STEPS[activeStep];

    return (
        <div className="tm-main">
            <div className="tm-content-wrapper uk-flex uk-flex-wrap uk-flex-stretch">
                <div className="tm-content-decoration"></div>
                <div className="tm-content uk-child-width-1-1 uk-flex uk-flex-wrap uk-flex-between">
                    <div>
                        <div className="tm-content-header">
                            <div className="uk-container uk-flex uk-flex-middle uk-flex-between">
                                <a className="uk-logo uk-flex uk-flex-middle">
                                    <img src={logoIcon} alt="" className="uk-margin-small-right"/>
                                    <span>{title}</span>
                                </a>

                                <button className="tm-button-continue tm-border-rounded uk-button uk-button-primary"
                                        onClick={nextStep}
                                        disabled={nextStepDisable}>
                                    Продолжить <Svg src={iconArrow} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="tm-content-inner">
                            <div className="uk-container">
                                <div className="uk-flex uk-flex-between">
                                    <h2>{question}</h2>

                                    <button className="tm-button-next tm-border-rounded uk-button uk-button-default"
                                            onClick={prevStep}
                                            disabled={prevStepDisable}>
                                        Назад <Svg src={iconArrow} alt="" />
                                    </button>
                                </div>

                                <QuizStep setData={setData} setApprove={setApprove} data={data} fieldsData={fieldsData}/>

                            </div>
                        </div>
                    </div>

                    <div className="tm-content-footer">
                        <div className="uk-container">
                            <div className="uk-text-meta">Источник: Премьер</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};
