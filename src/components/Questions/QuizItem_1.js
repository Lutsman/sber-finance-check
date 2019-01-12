import * as React from 'react';

import {Svg} from "../common/Svg";

import iconArrow from "../../images/icon-arrow.svg";
import people from "../../images/people.png";

export const  QuizItem_1 = props => {
    return (
        <div className="uk-container">
            <div className="uk-flex uk-flex-between">
                <h2>Удается ли вам откладывать часть ваших доходов?</h2>

                <button className="tm-button-next tm-border-rounded uk-button uk-button-default">
                    Назад <Svg src={iconArrow} />
                </button>
            </div>

            <div className="tm-answer">
                <div className="uk-margin" data-uk-margin>
                    <label><input className="uk-radio" name="income" type="radio" />Да, раз в 3 месяца или
                        чаще</label>
                    <label><input className="uk-radio" name="income" type="radio" />Редко, раз в
                        полгода-год</label>
                    <label><input className="uk-radio" name="income" type="radio" />Нет, обычно тратится
                        всё</label>
                </div>

                <div className="tm-fact">
                    <div className="uk-text-muted">А вы знали, что:</div>

                    <div className="uk-flex-between uk-grid-large" data-uk-grid>
                        <div className="uk-width-2-5">
                            <div className="tm-font-light uk-text-lead uk-text-primary">46%</div>
                            <div className="tm-text-large">всех клиентов тратят практически всю свою
                                зарплату.
                                Практически каждый второй.
                            </div>
                        </div>

                        <div className="uk-width-3-5">
                            <img src={people} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};