import * as React from 'react';
import {connect} from 'react-redux';
import Modal from "react-responsive-modal";

import {Svg} from "../common/Svg";
import {PhoneModalForm} from "../Forms/PhoneModalForm";
import {ModalCompleteForm} from "../Forms/ModalCompleteForm";

import iconArrow from "../../images/icon-arrow.svg";
import {formsSendPhone, formsSendPhoneReset} from "../../AC/forms";
import {phoneSendingSelector, phoneSendCompleteSelector, phoneSendSuccessSelector} from "../../selectors/forms";

export class QuizSummaryFormComponent extends React.Component {
    state = {
        open: false,
    };

    handleModalOpen = () => {
        this.setState({open: true});
    };

    handleModalClose = () => {
        this.props.resetForm();
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
        const {onSubmit, formSendComplete, formSendSuccess, formSending} = this.props;

        if (formSendComplete) {
            return (
                <ModalCompleteForm fail={formSendSuccess} handleClick={this.handleModalClose}>
                    {
                        formSendSuccess ?
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

        return (<PhoneModalForm onClose={this.handleModalClose} onSubmit={onSubmit} submiting={formSending}/>);
    }
}

const mapStateToProps = state => ({
    formSending: phoneSendingSelector(state),
    formSendComplete: phoneSendCompleteSelector(state),
    formSendSuccess: phoneSendSuccessSelector(state),
});

const mapDispatchToProps = dispatch => ({
    onSubmit: phone => dispatch(formsSendPhone(phone)),
    resetForm: () => dispatch(formsSendPhoneReset()),
});

export const QuizSummaryForm = connect(mapStateToProps, mapDispatchToProps)(QuizSummaryFormComponent);
