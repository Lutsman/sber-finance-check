import * as React from 'react';

import {Svg} from "../common/Svg";

import iconArrow from '../../images/icon-arrow.svg';
import recycle from '../../images/recycle.png';

export const  QuizSummary = props => {
    return (
        <div className="tm-main">
            <div className="tm-content-wrapper uk-flex uk-flex-wrap uk-flex-stretch">

                <div className="tm-content">
                    <div className="uk-container uk-padding">

                        <h1>Результаты финансового сканирования</h1>

                        <div className="tm-diagnostics-card tm-cover-card uk-flex uk-child-width-1-2 uk-padding-small">
                            <div className="uk-flex uk-flex-wrap uk-flex-wrap-between">
                                <div>
                                    <div className="tm-font-tiny">Рекомендация</div>
                                    <div className="uk-text-large uk-light uk-padding-small uk-padding-remove-horizontal">На
                                        первый взгляд у вас всё хорошо
                                    </div>
                                    <div className="uk-text-small">Но для уверенности рекомендуем провести полную диагностику
                                        ваших финансов с клиентским менеджером.
                                    </div>
                                </div>
                                <div>
                                    <button className="tm-border-rounded uk-button uk-button-default uk-light">Оставить заявку
                                    </button>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>

                        <ul data-uk-accordion>
                            <li className="uk-open">
                                <a className="tm-warning uk-accordion-title" href="/">Бюджет и Расходы</a>
                                <div className="uk-accordion-content">
                                    <div className="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
                                        <div
                                            className="tm-font-light tm-padding-tiny uk-text-large uk-padding-remove-horizontal">Сбережения
                                        </div>
                                        <div className="uk-text-small">Вы сохраните текущий уровень жизни от 3 до 6 месяцев,
                                            если потеряете работу.
                                        </div>
                                        <div className="uk-text-bold uk-padding-small uk-padding-remove-horizontal">Неплохо! Но
                                            мы верим, что вы можете лучше!
                                        </div>
                                        <div>У Вас оптимальный уровень защиты, если Ваши доходы временно прекратятся. В этом
                                            случае у Вас будет время, чтобы восстановить доход без снижения текущего уровня
                                            жизни!
                                        </div>
                                        <div className="tm-padding-tiny uk-padding-remove-horizontal">Но возможно уровень Вашего
                                            резерва избыточен, и Вы упускаете возможность получить дополнительны доход!
                                            Рекомендуем Вам обратиться к Вашему клиентскому менеджеру для формирования
                                            инвестиционного портфеля.
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className="tm-font-light tm-padding-tiny uk-text-large uk-padding-remove-horizontal">Обязательные
                                            расходы
                                        </div>
                                        <div className="uk-text-small">Вы знаете размер своих обязательных расходов.</div>
                                        <div className="uk-text-bold uk-padding-small uk-padding-remove-horizontal">Отлично! Вы
                                            на правильном пути.
                                        </div>
                                        <div className="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-top">Для
                                            более точного анализа расходов предлагаем Вам свериться с расходами, которые
                                            отражены в сервисе Бюджет Мобильного приложения Онлайн
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="tm-warning uk-accordion-title" href="/">Финансовый резерв</a>
                                <div className="uk-accordion-content">
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                </div>
                            </li>
                            <li>
                                <a className="tm-good uk-accordion-title" href="/">Финансовая защита</a>
                                <div className="uk-accordion-content">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                            <li>
                                <a className="tm-bad uk-accordion-title" href="/">Инвестиции</a>
                                <div className="uk-accordion-content">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="uk-flex uk-flex-between uk-flex-wrap">
                            <button className="tm-button-next tm-border-rounded uk-button uk-button-default">
                                <img src={recycle} alt=""/> Пройти заново
                            </button>
                            <button className="tm-border-rounded uk-button uk-button-primary">
                                Выслать мне результаты <Svg src={iconArrow} alt="" className="" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};