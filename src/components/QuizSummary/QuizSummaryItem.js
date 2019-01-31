import * as React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';

import budgetNormal from '../../images/illustration-budget-normal.png';

export class QuizSummaryItem extends React.Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    render() {
        const {open} = this.state;

        return (
            <div className="uk-child-width-expand@s uk-flex-middle uk-flex-center" data-uk-grid-margin data-uk-grid>
                <div className="uk-width-1-4@s">
                    <div className="uk-text-center">
                        <img src="https://via.placeholder.com/136x136" alt=""/>
                    </div>
                </div>
                <div className="uk-width-1-2@s uk-width-auto">
                    <h2 className="uk-h2">Бюджет и расходы</h2>
                    <div>Ваши финансы под контролем на <span>90%</span></div>
                    <div className="tm-icon-warning uk-hidden">Риск получения минимальной пенсии</div>
                </div>
                <div className="uk-flex uk-flex-right@s">
                    <button
                        className="tm-button-details uk-button uk-button-default uk-width-auto@s"
                        onClick={this.onOpenModal}>
                        Подробнее
                    </button>
                    <Modal open={open} onClose={this.onCloseModal}>
                        <div className="tm-final">
                            <div className="uk-width-2-3@s uk-margin-auto uk-text-center">
                                <img className="uk-hidden" src="../../images/illustration-budget-bad.png"/>
                                <img src={budgetNormal}/>
                                <img className="uk-hidden" src="../../images/illustration-budget-good.png"/>
                                <h2 className="uk-modal-title uk-margin-top">Бюджет и расходы</h2>
                                <div className="uk-margin-large-bottom tm-text-transparent">
                                    <p>
                                        Откладывая деньги, вы создаёте финансовую подушку безопасности на будущее.
                                    </p>
                                    <p>
                                        С сервисом <a href="#" className="tm-link-modal">Бюджет</a> в
                                        Сбербанк Онлайн вы сможете контролировать расходы и начать откладывать
                                        деньги.
                                    </p>
                                </div>
                                <button
                                    className="uk-modal-close uk-button uk-button-primary"
                                    onClick={this.onCloseModal}>
                                    Закрыть
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}
