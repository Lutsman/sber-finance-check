import * as React from 'react';
import Modal from 'react-responsive-modal';

import {Svg} from "../Svg/index";
import {QuizSummaryItem} from "./QuizSummaryItem";

import iconArrow from '../../images/icon-arrow.svg';

export class QuizSummary extends React.Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onSubmit = e => {

    };

    render() {
        const {open} = this.state;
        const itemsData = [1,2,3];
        const items = itemsData.map((item) => <QuizSummaryItem key={item}/>);

        return (
            <div className="tm-main">
                <div className="tm-content-wrapper uk-flex uk-flex-wrap uk-flex-stretch">

                    <div className="tm-content">
                        <div className="tm-final uk-container uk-padding">
                            <div className="tm-text-transparent">Результат финансового сканирования</div>
                            <h1 className="uk-h1">Поздравляем! Ваши финансы почти в порядке</h1>

                            {items}

                            <div className="uk-margin-large-top uk-padding uk-padding-remove-horizontal">
                                <div className="uk-child-width-1-2@s uk-child-width-1-1 uk-flex-between" data-uk-grid>
                                    <div>
                                        Мы знаем как минимизировать риски и сделать финансовое здоровье ещё лучше
                                    </div>
                                    <div className="uk-width-1-3@s uk-flex uk-flex-right">
                                        <button
                                            className="tm-button-order tm-border-rounded uk-button uk-button-primary"
                                            onClick={this.onOpenModal}>
                                            Записаться на консультацию
                                            <Svg className="tm-icon-arrow" src={iconArrow}/>
                                        </button>
                                        <Modal open={open} onClose={this.onCloseModal}>
                                            <div className="uk-modal-dialog uk-modal-body uk-text-center uk-flex uk-flex-center">                                             <div className="uk-width-2-3@s uk-margin-large-top">
                                                    <h2 className="uk-modal-title">Оставьте ваш номер телефона для обратной связи</h2>
                                                    <form onSubmit={this.onSubmit}>
                                                        <div className="uk-margin-medium-top uk-margin-large-bottom uk-text-left">
                                                            <div className="tm-text-transparent tm-font-tiny uk-margin-small-bottom">
                                                                Номер телефона
                                                            </div>
                                                            <input className="uk-input" type="text" value="+7" />
                                                        </div>
                                                        <div className="uk-flex uk-flex-column uk-flex-middle uk-child-width-1-2@s">
                                                            <button className="tm-border-rounded uk-button uk-button-primary">
                                                                Отправить заявку
                                                                <Svg className="tm-icon-arrow" src={iconArrow}/>
                                                            </button>
                                                            <button
                                                                className="tm-border-rounded tm-button-modal-close uk-button uk-button-default uk-margin-top"
                                                                onClick={this.onCloseModal}
                                                                type="button">
                                                                Закрыть
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
