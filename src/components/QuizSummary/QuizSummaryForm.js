import * as React from 'react';
import Modal from "react-responsive-modal";

import {Svg} from "../common/Svg";
import {PhoneModalForm} from "../Forms/PhoneModalForm";
import {ModalCompleteForm} from "../Forms/ModalCompleteForm";

import iconArrow from "../../images/icon-arrow.svg";

export class QuizSummaryForm extends React.Component {
    state = {
        open: false,
        phone: '',
    };

    handleModalOpen = () => {
        this.setState({open: true});
    };

    handleModalClose = () => {
        this.setState({open: false});
    };

    render() {
        const {open} = this.state;


        return (
            <div>
                <button
                    className="tm-button-order uk-button uk-button-primary"
                    onClick={this.handleModalOpen}>
                    Записаться на консультацию
                    <Svg className="tm-icon-arrow" src={iconArrow}/>
                </button>
                <Modal open={open} onClose={this.handleModalClose}>
                    {this.getModalContent()}
                </Modal>
            </div>
        );
    }

    getModalContent() {
        const {onSubmit, sendFormComplete, sendFormSuccess} = this.props;

        if (sendFormComplete) {
            return (
                <ModalCompleteForm fail={sendFormSuccess} handleClick={this.handleModalClose}>
                    {
                        sendFormSuccess ?
                            (
                                <div>
                                    <h2 className="uk-modal-title uk-margin-top">Что-то пошло не так!</h2>
                                    <p className="tm-text-transparent uk-margin-top">
                                        В следвствии технических неполадок произошел сбой. Попробуйте отправить заявку
                                        еще раз.
                                    </p>
                                </div>
                            ) :
                            (
                                <div>
                                    <h2 className="uk-modal-title uk-margin-top">Что-то пошло не так!</h2>
                                    <p className="tm-text-transparent uk-margin-top">
                                        В следвствии технических неполадок произошел сбой. Попробуйте отправить заявку
                                        еще раз.
                                    </p>
                                </div>
                            )
                    }
                </ModalCompleteForm>
            );
        }

        return (<PhoneModalForm onSubmit={onSubmit}/>);
    }
}
