import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {init} from "../../AC/quiz";

import btnPower from "../../images/btn-power.png";
import btnFingerprint from "../../images/btn-fingerprint.png";

export const QuizStartComponent = props => {
    const {quizInit} = props;
    return (
        <div className="tm-main">
            <div className="tm-content-wrapper tm-content-start uk-flex uk-flex-wrap uk-flex-stretch">

                <div className="tm-content tm-start-only uk-padding uk-padding-remove-horizontal">
                    <div className="uk-container uk-padding-large uk-padding-remove-top uk-text-center">

                        <div className="uk-margin-large-bottom">
                            <h1 className="tm-text-scaner">СберСканер</h1>
                            <div className="tm-text-subscaner">Сканер вашего финансового здоровья</div>
                        </div>
                        <p className="uk-margin-large-bottom">Ответьте на несколько вопросов чтобы продиагностировать
                            ваше финансовое здоровье</p>
                        <div>
                            <div className="tm-scale-header-alt">
                                Начать<br/>сканирование
                            </div>
                            <div className="uk-flex uk-flex-center">
                                <div className="tm-button-start-wrapper">
                                    <Link to="/inner" onClick={quizInit} className="tm-button-start uk-button">
                                        <img className="uk-border-circle uk-visible@s" src={btnPower} alt=""/>
                                        <img className="uk-border-circle uk-hidden@s" src={btnFingerprint} alt=""/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-container uk-hidden@s uk-margin-xlarge-top uk-padding-large uk-text-center">
                        <div>
                            <div className="tm-sidebar-title uk-flex uk-flex-center">
                                <div className="tm-app-icon" />
                            </div>
                        </div>

                        <div className="tm-font-tiny tm-links-alt">
                            <div>
                                <a href="/" className="tm-opacity-70">Политика конфиденциальности</a>
                            </div>
                            <div>
                                <a href="/" className="tm-opacity-70">Другая юридическая инфа</a>
                            </div>
                            <div>
                                <a href="/" className="tm-font-light">sberscaner.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    quizInit: () => dispatch(init()),
});

export const QuizStart = connect(null, mapDispatchToProps)(QuizStartComponent);
