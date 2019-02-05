import * as React from 'react';
import {connect} from 'react-redux';
import {Modal} from "../Modal";

import {Svg} from "../common/Svg";
import {FormPhoneModal} from "../Forms/FormPhoneModal";
import {FormCompleteModal} from "../Forms/FormCompleteModal";

import iconArrow from "../../assets/images/icon-arrow.svg";
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
                    <Svg className="tm-button-icon" src={iconArrow}/>
                </button>
                <Modal  open={open} onClose={this.handleModalClose}>
                    {this.getModalContent()}
                </Modal>
            </div>
        );
    }

    getModalContent() {
        const {onSubmit, formSendComplete, formSendSuccess, formSending} = this.props;

        if (formSendComplete) {
            return (
                <FormCompleteModal fail={!formSendSuccess} onSubmit={this.handleModalClose}>
                    {
                        formSendSuccess ?
                            (
                                <div>
                                    <h2 className="uk-modal-title uk-margin-top">Спасибо, ваша заявка принята!</h2>
                                    <p className="tm-text-transparent uk-margin-top">
                                        Ваш клиентский менеджер свяжется с вами в течении 2 рабочих дней.
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
                </FormCompleteModal>
            );
        }

        return (<FormPhoneModal onClose={this.handleModalClose} onSubmit={onSubmit} submiting={formSending}/>);
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
