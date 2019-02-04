import * as React from 'react';
import {connect} from 'react-redux';

import {RoundProgressbar} from "../RoundProgressbar";
import {QuizSummaryDecription} from "./QuizSummaryDecription";

import {getLevel} from "../../utils";
import {GUIDANCE_MAP, COLOR_MAP} from "./constants";
import circle10 from '../../images/circle-10.png';
import circle45 from '../../images/circle-45.png';
import circle90 from '../../images/circle-90.png';

const getIndicatorImg = num => {
    if (num > 66) return circle90;
    if (num > 33) return circle45;
    return circle10;
};

export class QuizSummaryItem extends React.Component {

    render() {
        const {title, subTitle, percentage, alerts, description, name} = this.props.data;
        const level = getLevel(percentage);
        const {gradient, colorClassName} = COLOR_MAP[level];
        const descriptionImg = GUIDANCE_MAP[name][level].img;
        const indicatorImg = getIndicatorImg(percentage);
        const alertList = alerts && alerts.map(alert => (
            <div key={alert.id} className="tm-icon-warning">{alert.text}</div>
        ));

        return (
            <div className="uk-child-width-expand@s uk-flex-middle uk-flex-center" data-uk-grid-margin data-uk-grid>
                <div className="uk-width-auto@s uk-width-1-4@l uk-flex uk-flex-center">
                    <div className={`tm-small-progressbar ${colorClassName}`}>
                        <div className="uk-hidden">
                            <RoundProgressbar percentage={percentage} gradient={gradient}>
                                <div className="tm-indicator__content">
                                    <span>{percentage}%</span>
                                </div>
                            </RoundProgressbar>
                        </div>
                        <div className="img-wrapper">
                            <img src={indicatorImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="uk-width-1-2@s uk-width-auto">
                    <h2 className="uk-h2">{title}</h2>
                    <div>{subTitle} <span>{percentage}%</span></div>
                    <div>
                        {alertList}
                    </div>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-right@s">
                    <QuizSummaryDecription title={title} content={description} img={descriptionImg} />
                </div>
            </div>
        );
    }
}
