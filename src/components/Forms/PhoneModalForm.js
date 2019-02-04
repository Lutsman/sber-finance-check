import * as React from 'react';

import {Svg} from "../common/Svg";

import iconArrow from "../../images/icon-arrow.svg";

export class PhoneModalForm extends React.Component {
    state = {
        phone: '',
    };

    render () {
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
                            <input
                                className="uk-input"
                                type="text"
                                value={phone}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="uk-flex uk-flex-column uk-flex-middle uk-child-width-1-2@s">
                            <button className="tm-border-rounded uk-button uk-button-primary">
                                Отправить заявку
                                <Svg className="tm-icon-arrow" src={iconArrow}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    handleChange = e => {
        const {value} = e.target;

        this.setState({
            phone: value,
        })
    };

    handleSubmit = () => {
      const {onSubmit} = this.props;
      const {phone} = this.state;

      onSubmit(phone);
      this.setState({
          phone: '',
      });
    };
};
