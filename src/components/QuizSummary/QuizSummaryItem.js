import * as React from 'react';
import {connect} from 'react-redux';

import {RoundProgressbar} from "../RoundProgressbar";

import {QuizSummaryDecription} from "./QuizSummaryDecription";

export class QuizSummaryItem extends React.Component {

    render() {
        const percentage = 90;

        return (
            <div className="uk-child-width-expand@s uk-flex-middle uk-flex-center" data-uk-grid-margin data-uk-grid>
                <div className="uk-width-auto@s uk-width-1-4@l uk-flex uk-flex-center">
                    <div className="tm-small-progressbar">
                        <RoundProgressbar percentage={percentage}>
                            <div className="tm-indicator__content">
                                <span>{percentage}%</span>
                            </div>
                        </RoundProgressbar>
                    </div>
                </div>
                <div className="uk-width-1-2@s uk-width-auto">
                    <h2 className="uk-h2">Бюджет и расходы</h2>
                    <div>Ваши финансы под контролем на <span>90%</span></div>
                    <div className="tm-icon-warning uk-hidden">Риск получения минимальной пенсии</div>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-right@s">
                    <QuizSummaryDecription/>
                </div>
            </div>
        );
    }
}
