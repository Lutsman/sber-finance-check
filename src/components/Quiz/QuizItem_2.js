import * as React from 'react';

const fieldsData = {
    values: [
        {
            label: 'Да',
            name: 'income_total',
            value: 1,
        },
        {
            label: 'Нет',
            name: 'income_total',
            value: 0,
        },
    ],
};

export const  QuizItem_2 = props => {
    const {setData, setApprove, data} = props;
    const fields = fieldsData.values.map(field => {
        const {label, value, name} = field;
        const isChecked = data[name] === value;
        const changeHandler = e => {
            const checked = e.target.checked;

            setApprove(checked);
            setData({[name]: checked ? value : null});
        };
        return (
            <div key={label}>
                <input
                    id={label}
                    className="radioId"
                    type="radio"
                    name={name}
                    onChange={changeHandler} checked={isChecked}
                    hidden/>
                <label className="tm-radio-button uk-button" htmlFor={label}>{label}</label>
            </div>
        );
    });

    return (
        <div className="tm-answer">
            <div className="uk-margin uk-flex" data-uk-margin>
                {fields}
            </div>

            <div className="tm-fact">
                <div className="uk-text-muted">На что тратят другие?</div>

            </div>

        </div>
    );
};