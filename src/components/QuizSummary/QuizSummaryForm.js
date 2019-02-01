import * as React from 'react';
import {Svg} from "../Svg";
import iconArrow from "../../images/icon-arrow.svg";
import Modal from "react-responsive-modal";

export class QuizSummaryForm extends React.Component {
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

        return (
            <div>
                <button
                    className="tm-button-order uk-button uk-button-primary"
                    onClick={this.onOpenModal}>
                    Записаться на консультацию
                    <Svg className="tm-icon-arrow" src={iconArrow}/>
                </button>
                <Modal open={open} onClose={this.onCloseModal}>
                    <div className="tm-final uk-text-center uk-flex uk-flex-center">
                        <div className="uk-width-2-3@s uk-margin-top uk-margin-large-top@s">
                            <h2 className="uk-modal-title">Оставьте ваш номер телефона для обратной связи</h2>
                            <form onSubmit={this.onSubmit}>
                                <div className="uk-margin-medium-top@s uk-margin-large-bottom uk-text-left">
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
                                        className="tm-button-modal-close uk-button uk-button-default uk-margin-top"
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
        );
    }
}
