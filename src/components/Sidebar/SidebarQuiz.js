import * as React from 'react';
import {connect} from 'react-redux';

import {RoundProgressbar} from "../RoundProgressbar/RoundProgressbar";
import {isCompleteSelector, quizFillingSelector} from "../../selectors/quiz";

export const SidebarQuizComponent = props => {
    const {percentage, isComplete} = props;
    const getIndicatorContent = () => {
        if (isComplete) {
            return (
                <div className="tm-indicator__content">
                    Рейтинг ваших финансов:
                    <span>АА+</span>
                </div>
            );
        }

        if (percentage) {
            return (
                <div className="tm-indicator__content">
                    Ваша форма заполнена на:
                    <span>{percentage}%</span>
                </div>
            );
        } else {
            return (
                <div className="tm-indicator__content">
                    <i className="fa fa-play" aria-hidden="true"/>
                </div>
            );
        }

    };

    return (
        <div
            className="tm-sidebar uk-visible@m uk-width-medium uk-child-width-1-1 uk-flex uk-flex-wrap uk-flex-wrap-between uk-text-center uk-light"
            data-uk-margin>
            <div>
                <div className="tm-sidebar-title uk-text-large uk-text-bold">СберСканер</div>

                <div className="tm-scale-header tm-opacity-70 uk-text-small">Заполните шкалу, чтобы получить отчет о
                    финансах
                </div>
                <div className="uk-flex uk-flex-center tm-indicator">
                    <RoundProgressbar percentage={percentage}>
                        {getIndicatorContent()}
                    </RoundProgressbar>
                </div>

            </div>

            <div className="tm-font-tiny">
                <div>
                    <a href="/" className="tm-font-light">sberscaner.ru</a>
                </div>
                <div>
                    <a href="/" className="tm-opacity-70">Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    percentage: quizFillingSelector(state),
    isComplete: isCompleteSelector(state),
});

export const SidebarQuiz = connect(mapStateToProps)(SidebarQuizComponent);
