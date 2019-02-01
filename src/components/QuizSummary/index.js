import * as React from 'react';

import {QuizSummaryItem} from "./QuizSummaryItem";
import {QuizSummaryForm} from "./QuizSummaryForm";

export class QuizSummary extends React.Component {

    render() {
        const itemsData = [1,2,3];
        const items = itemsData.map((item) => <QuizSummaryItem key={item}/>);

        return (
            <div className="tm-main tm-summary">
                <div className="tm-content-wrapper uk-flex uk-flex-wrap uk-flex-stretch">

                    <div className="tm-content">
                        <div className="tm-final uk-container">
                            <div className="tm-text-transparent uk-margin-top">Результат финансового сканирования</div>
                            <div className="tm-header-divider uk-hidden@s"/>
                            <h1 className="uk-h1">Поздравляем! Ваши финансы почти в порядке</h1>

                            {items}

                            <div className="uk-padding uk-padding-remove-horizontal">
                                <div className="uk-child-width-1-2@s uk-child-width-1-1 uk-flex-between" data-uk-grid>
                                    <div>
                                        Мы знаем как минимизировать риски и сделать финансовое здоровье ещё лучше
                                    </div>
                                    <div className="uk-width-1-3@s uk-flex uk-flex-right">
                                        <QuizSummaryForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
