import * as React from 'react';
import Modal from "react-responsive-modal";

import budgetNormal from "../../images/illustration-budget-normal.png";

export class QuizSummaryDecription extends React.Component {
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
            <div>
                <button
                    className="tm-button-details uk-button uk-button-default uk-width-auto@s"
                    onClick={this.onOpenModal}>
                    Подробнее
                </button>
                <Modal open={open} onClose={this.onCloseModal}>
                    <div className="tm-final">
                        <div className="uk-width-2-3@s uk-margin-auto uk-text-center">
                            <img className="uk-hidden" src="../../images/illustration-budget-bad.png" alt=""/>
                            <img src={budgetNormal} alt=""/>
                            <img className="uk-hidden" src="../../images/illustration-budget-good.png" alt=""/>
                            <h2 className="uk-modal-title uk-margin-top">Бюджет и расходы</h2>
                            <div className="uk-margin-large-bottom tm-text-transparent">
                                <p>
                                    Откладывая деньги, вы создаёте финансовую подушку безопасности на будущее.
                                </p>
                                <p>
                                    С сервисом <a href="/" className="tm-link-modal">Бюджет</a> в
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
        );
    }
}
