import * as React from 'react';

values = [
    {
        label: 'Облигации',
        name: 'securities',
        value: 'securities_1',
    },
    {
        label: 'Акции',
        name: 'securities',
        value: 'securities_2',
    },
    {
        label: 'ИСЖ',
        name: 'securities',
        value: 'securities_3',
    },
    {
        label: 'Недвижимость',
        name: 'securities',
        value: 'securities_4',
    },
    {
        label: 'Депозит',
        name: 'securities',
        value: 'securities_5',
    },
    {
        label: 'ПИФы',
        name: 'securities',
        value: 'securities_6',
    },
    {
        label: 'ИИС',
        name: 'securities',
        value: 'securities_7',
    },
],

export const  QuizItem_7 = props => {
    return (
        <div className="tm-answer">
            <div className="uk-margin uk-grid-small uk-child-width-1-3 uk-grid" data-uk-margin>
                <div className="tm-checkbox-list">
                    <label><input className="uk-checkbox" type="checkbox"/><span>Облигации</span></label>
                    <label><input className="uk-checkbox" type="checkbox" checked/><span>Акции</span></label>
                    <label><input className="uk-checkbox" type="checkbox"/><span>ИСЖ</span></label>
                </div>
                <div className="tm-checkbox-list">
                    <label><input className="uk-checkbox" type="checkbox"/><span>Недвижимость</span></label>
                    <label><input className="uk-checkbox" type="checkbox" checked/><span>Депозит</span></label>
                </div>
                <div className="tm-checkbox-list">
                    <label><input className="uk-checkbox" type="checkbox"/><span>ПИФы</span></label>
                    <label><input className="uk-checkbox" type="checkbox"/><span>ИИС</span></label>
                </div>
            </div>

            <div className="tm-fact">
                <div className="uk-text-muted">Как инвестируют другие?</div>


            </div>

        </div>
    );
};