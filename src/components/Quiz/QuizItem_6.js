import * as React from 'react';

values = [
    {
        label: 'Да, есть',
        name: 'savings_like',
        value: 3,
    },
    {
        label: 'Нет целей',
        name: 'savings_like',
        value: 2,
    },
    {
        label: 'Всегда коплю без цели',
        name: 'savings_like',
        value: 1,
    },
],

export const  QuizItem_6 = props => {
    return (
        <div className="tm-answer">
            <div className="uk-margin" data-uk-margin>
                <label><input className="uk-radio" type="radio" name="radio2"/>Да, есть</label>
                <label><input className="uk-radio" type="radio" name="radio2" checked/>Нет целей</label>
                <label><input className="uk-radio" type="radio" name="radio2"/>Всегда коплю без цели</label>
            </div>

            <div className="tm-fact">
                <div className="uk-text-muted">На что копят другие?</div>
            </div>

        </div>
    );
};