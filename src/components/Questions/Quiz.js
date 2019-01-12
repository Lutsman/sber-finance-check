import * as React from 'react';
import {STEPS} from "./constants";

import {Svg} from "../common/Svg";
import logoIcon from "../../images/logo-icon.png";
import iconArrow from "../../images/icon-arrow.svg";

export class Quiz extends React.Component {
    state = {
        activeStep: 0,
        lastApprovedStep: -1,
        data: {},
    };

    getData = data => {
        this.setState({
            data: {
                ...this.state.data,
                ...data,
            },
        });
    };

    getApprove = approve => {
        const {activeStep, lastApprovedStep} = this.state;
        if (approve) {
            if (activeStep < lastApprovedStep) return;

            this.setState({
                lastApprovedStep: activeStep,
            });
        } else {
            if (activeStep > lastApprovedStep) return;

            this.setState({
                lastApprovedStep: activeStep - 1,
            });
        }
    };

    nextHandler = () => {
        if (this.nextDisable) return;

        const {activeStep} = this.state;

        this.setState({
            activeStep: activeStep + 1,
        });
    };

    prevHandler = () => {
        if (this.prevDisable) return;

        const {activeStep} = this.state;

        this.setState({
            activeStep: activeStep - 1,
        });
    };

    get nextDisable() {
        const {activeStep, lastApprovedStep} = this.state;

        return activeStep <= lastApprovedStep;
    }

    get prevDisable() {
        const {activeStep} = this.state;

        return activeStep === 0 || activeStep === STEPS.length - 1;
    }


    render() {
        const [title, questionComponent] = STEPS[this.state.activeStep];
        const isApproved = this.state.lastAprovedStep >= this.state.activeStep;
        // const question = props => (<questionComponent {...props} getData={this.getData}  getApprove={this.getApprove} />);

        return (
            <div className="tm-main">
                <div className="tm-content-wrapper uk-flex uk-flex-wrap uk-flex-stretch">
                    <div className="tm-content-decoration"/>
                    <div className="tm-content uk-child-width-1-1 uk-flex uk-flex-wrap uk-flex-between">
                        <div>
                            <div className="tm-content-header">
                                <div className="uk-container uk-flex uk-flex-middle uk-flex-between">
                                    <a href="/" className="uk-logo uk-flex uk-flex-middle">
                                        <img src={logoIcon} alt="" className="uk-margin-small-right" />
                                        <span>{title}</span>
                                    </a>

                                    <button className="tm-button-continue tm-border-rounded uk-button uk-button-primary"
                                            disabled>
                                        Продолжить <Svg src={iconArrow} />
                                    </button>
                                </div>
                            </div>
                            <div className="tm-content-inner">
                                <questionComponent getData={this.getData}  getApprove={this.getApprove} />
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
    }
}
