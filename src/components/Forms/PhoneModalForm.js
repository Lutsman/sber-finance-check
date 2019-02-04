import * as React from 'react';
import MaskedInput from 'react-maskedinput';

import {Svg} from "../common/Svg";
import {LoadingSpinner} from "../common/LoadingSpinner";
import {FormValidation} from "../common/FormValidation";

import iconArrow from "../../images/icon-arrow.svg";

export class PhoneModalForm extends FormValidation {
    state = {
        phone: '',
    };

    limits = {
        phone: {
            min: 10,
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

        return (
            <div className="tm-final uk-text-center uk-flex uk-flex-center">
                <div className="uk-width-2-3@s uk-margin-top uk-margin-large-top@s">
                    <h2 className="uk-modal-title">Оставьте ваш номер телефона для обратной связи</h2>
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
                                onChange={this.handleChange('phone')}
                            />
                        </div>
                        <div className="uk-flex uk-flex-column uk-flex-middle uk-child-width-1-2@s">
                            <button
                                className="tm-border-rounded uk-button uk-button-primary"
                                disabled={submiting}>
                                Отправить заявку
                                <span className="tm-icon-arrow">
                                    {submiting ? <LoadingSpinner inline={true}/> : <Svg src={iconArrow}/>}
                                </span>
                            </button>
                            <button
                                className="tm-button-modal-close uk-button uk-button-default uk-margin-top"
                                onClick={this.handleClose}
                                type="button">
                                Закрыть
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
