import * as React from 'react';
import {connect} from 'react-redux';

import {LoadingSpinner} from "../common/LoadingSpinner";
import {QuizSummaryItem} from "./QuizSummaryItem";
import {QuizSummaryForm} from "./QuizSummaryForm";

import {summaryGet} from "../../AC/summary";
import {itemsDataSelector} from "../../selectors/summary";

export class QuizSummaryComponent extends React.Component {
    componentDidMount() {
        this.props.getSummary();
    }

    render() {
        const {itemsData} = this.props;
        const {title, items} = itemsData || {};
        const itemsList = items && items.map((item) => <QuizSummaryItem key={item.id} data={item}/>);

        return (
            <div className="tm-main tm-summary">
                <div className="tm-content-wrapper uk-flex uk-flex-wrap uk-flex-stretch">

                    <div className="tm-content">
                        <div className="tm-final uk-container">
                            <div className="tm-text-transparent uk-margin-top">Результат финансового сканирования</div>
                            <div className="tm-header-divider uk-hidden@s"/>
                            <h1 className="uk-h1">{title}</h1>

                            {itemsList ? itemsList : <LoadingSpinner/>}

                            <div className="uk-padding uk-padding-remove-horizontal">
                                <div className="uk-child-width-1-2@s uk-child-width-1-1 uk-flex-between" data-uk-grid>
                                    <div>
                                        Мы знаем как минимизировать риски и сделать финансовое здоровье ещё лучше
                                    </div>
                                    <div className="uk-width-1-3@s uk-flex uk-flex-center uk-flex-right@s">
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

const mapStateToProps = state => ({
    itemsData: itemsDataSelector(state),
});

const mapDispatchToProps = dispatch => ({
    getSummary: () => dispatch(summaryGet()),
});

export const QuizSummary = connect(mapStateToProps, mapDispatchToProps)(QuizSummaryComponent);
