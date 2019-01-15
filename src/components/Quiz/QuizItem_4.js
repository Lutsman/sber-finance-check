import * as React from 'react';

const fieldsData = {
    values: [
        {
            label: '',
            name: '',
            value: 3,
        },
        {
            label: '',
            name: '',
            value: 3,
        },
        {
            label: '',
            name: '',
            value: 3,
        },
    ],
};


export const QuizItem_4 = props => {
    return (
        <div className="tm-answer">
            <div className="uk-margin uk-flex" data-uk-margin>
                <div className="">
                    <input id="radioIdYes" className="radioId" type="radio" name="radio2" hidden/>
                    <label className="tm-radio-button uk-button" htmlFor="radioIdYes">Да</label>
                </div>
                <div className="uk-padding-small uk-padding-remove-vertical">
                    <input id="radioIdNo" className="radioId" type="radio" name="radio2" hidden/>
                    <label className="tm-radio-button uk-button" htmlFor="radioIdNo">Нет</label>
                </div>
            </div>

            <div className="tm-fact">
                <div className="uk-text-muted">Сколько хранят другие?</div>

            </div>

        </div>
    );
};