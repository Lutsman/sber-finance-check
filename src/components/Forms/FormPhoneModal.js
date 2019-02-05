import * as React from 'react';
import MaskedInput from 'react-maskedinput';

import {Svg} from "../common/Svg";
import {LoadingSpinner} from "../common/LoadingSpinner/index";
import {FormValidation} from "../common/FormValidation";

import iconArrow from "../../assets/images/icon-arrow.svg";

export class FormPhoneModal extends FormValidation {
    state = {
        phone: '',
    };

    limits = {
        phone: {
            min: 10,
            max: 10,
        },
    };

    fields = ['phone'];

    handleSubmit = e => {
        const {onSubmit} = this.props;
        const {phone} = this.state;

        e.preventDefault();

        if (!this.isValidForm()) return;

        onSubmit(phone);
        this.setState({
            phone: '',
        });
    };

    handleClose = () => this.props.onClose();

    render() {
        const {submiting} = this.props;
        const {phone} = this.state;
        const formatter = val => val.replace(/(\s|_|\(|\)|-)/g, '');

        return (
            <div className="tm-modal-small uk-text-center uk-flex uk-flex-center">
                <div className="uk-margin-top uk-margin-large-top@s">
                    <h2 className="uk-modal-title uk-margin-bottom">Оставьте ваш номер телефона для обратной связи</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="uk-margin-medium-top@s uk-margin-large-bottom uk-text-left">
                            <div className="tm-text-transparent tm-font-tiny uk-margin-small-bottom">
                                Номер телефона
                            </div>
                            <MaskedInput
                                className="uk-input"
                                type="text"
                                mask="(111) 111-1111"
                                value={phone}
                                onChange={this.handleChange('phone', formatter)}
                            />
                        </div>
                        <div className="tm-modal-controls">
                            <div className="uk-margin-bottom">
                                <button
                                    className="tm-border-rounded uk-button uk-button-primary"
                                    disabled={!this.isValidForm() || submiting}>
                                    Отправить заявку
                                    <span className="tm-button-icon">
                                    {submiting ? <LoadingSpinner inline={true}/> : <Svg src={iconArrow}/>}
                                </span>
                                </button>
                            </div>
                            <div>
                                <button
                                    className="tm-modal-button-close uk-button uk-button-default"
                                    onClick={this.handleClose}
                                    type="button">
                                    Закрыть
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
