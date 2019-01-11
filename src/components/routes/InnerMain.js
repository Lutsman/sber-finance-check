import * as React from 'react';
import iconArrow  from '../../images/icon-arrow.svg';
import {Svg} from "../common/Svg";

export const InnerMain = props => {
    return (
        <div className="tm-main">
            <div className="tm-content-wrapper">
                <div className="tm-content-decoration"></div>

                <div className="tm-content">
                    <div className="uk-container">
                        <div className="tm-content-header uk-flex uk-flex-middle uk-flex-between">
                            <a className="uk-logo uk-flex uk-flex-middle" href="/">
                                <img src="../../images/logo-icon.png" alt="" className="uk-margin-small-right"/>
                                    <span>Сбережения</span>
                            </a>

                            <button className="tm-button-continue uk-button uk-button-primary" disabled>
                                Продолжить <Svg src={iconArrow} />
                            </button>
                        </div>

                        <div className="tm-content-inner">
                            <div className="uk-flex uk-flex-between">
                                <h2>Удается ли вам откладывать часть ваших доходов?</h2>

                                <button className="tm-button-continue uk-button uk-button-default">
                                    Назад <Svg src={iconArrow} />
                                </button>
                            </div>

                            <div className="tm-answer">
                                <div className="uk-margin" data-uk-margin>
                                    <label><input className="uk-radio" name="income" type="radio"/> Да, раз в 3 месяца или
                                        чаще</label>
                                    <label><input className="uk-radio" name="income" type="radio"/> Редко, раз в
                                        полгода-год</label>
                                    <label><input className="uk-radio" name="income" type="radio"/> Нет, обычно тратится
                                        всё</label>
                                </div>

                                <div className="">
                                    <div className="uk-text-muted">А вы знали, что:</div>

                                    <div className="uk-flex-between uk-grid-large" data-uk-grid>
                                        <div className="uk-width-2-5">
                                            <div className="">46%</div>
                                            <div>всех клиентов тратят практически всю свою зарплату.
                                                Практически каждый второй.
                                            </div>
                                        </div>

                                        <div className="uk-width-3-5">
                                            <img src="../../images/people.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>


                </div>
            </div>

        </div>
    );
};