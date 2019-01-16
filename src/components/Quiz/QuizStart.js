import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {init} from "../../AC/quiz";

import btnPower from "../../images/btn-power.png";

export const QuizStartComponent = props => {
    const {quizInit} = props;
    return (
        <div className="tm-main">
            <div className="tm-content-wrapper tm-content-start uk-flex uk-flex-wrap uk-flex-stretch">

                <div className="tm-content uk-padding uk-padding-remove-horizontal">
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
                                <div className="">
                                    <Link to="/inner" onClick={quizInit} className="tm-button-start">
                                        <img className="uk-border-circle" src={btnPower} alt=""/>
                                    </Link>
                                </div>
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
