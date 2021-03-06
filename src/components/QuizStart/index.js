import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {LoadingSpinner} from "../common/LoadingSpinner";

import {init} from "../../AC/quiz";
import {userIdSet} from "../../AC/user";
import {userNameSelector, userLoadingSelector, userLoadedSelector} from "../../selectors/user";

import btnPower from "../../assets/images/btn-power.png";
import btnFingerprint from "../../assets/images/btn-fingerprint.png";

export class QuizStartComponent extends React.Component {
    componentDidMount() {
        const {userLoaded, getUser} = this.props;

        if (userLoaded) return;

        getUser();
    }

    render() {
        const {quizInit, userName, userLoading} = this.props;

        return (
            <div className="tm-main tm-main-start">
                <div className="tm-content-wrapper tm-content-start uk-flex uk-flex-wrap uk-flex-stretch">

                    <div className="tm-content tm-start-only uk-padding uk-padding-remove-horizontal uk-flex uk-flex-column uk-flex-stretch">
                        {
                            !userName || userLoading ?
                                <LoadingSpinner/> :
                                <div className="uk-container uk-padding-large uk-padding-remove-top uk-text-center uk-flex uk-flex-column uk-flex-around">

                                    <div>
                                        <h1 className="tm-text-scaner">СберСканер</h1>
                                        <div className="tm-text-subscaner">Сканер вашего финансового здоровья</div>
                                    </div>
                                    <h5>Здравствуйте, {userName}!</h5>
                                    <p>
                                        Ответьте на несколько вопросов чтобы продиагностировать
                                        ваше финансовое здоровье
                                    </p>
                                    <div>
                                        <div className="tm-scale-header-alt">
                                            Начать<br/>сканирование
                                        </div>
                                        <div className="uk-flex uk-flex-center">
                                            <div className="tm-button-start-wrapper">
                                                <Link to="/inner" onClick={quizInit} className="tm-button-start uk-button">
                                                    <img className="uk-border-circle uk-visible@s" src={btnPower} alt="btn power"/>
                                                    <img className="uk-border-circle uk-hidden@s" src={btnFingerprint} alt="fingerprint"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                        <div className="tm-margin-megalarge uk-container uk-hidden@s uk-padding-large uk-text-center">
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
    }
}

const mapStateToProps = state => ({
    userName: userNameSelector(state),
    userLoading: userLoadingSelector(state),
    userLoaded: userLoadedSelector(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    quizInit: () => dispatch(init()),
    getUser: () => dispatch(userIdSet(ownProps.userId)),
});

export const QuizStart = connect(mapStateToProps, mapDispatchToProps)(QuizStartComponent);
