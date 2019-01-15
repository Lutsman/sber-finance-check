import * as React from 'react';

import {Checkbox} from '../common/Checkbox';
import {isEmptyObj} from "../common/utils";

const fieldsData = {
    values: [
        {
            label: 'Медицинская страховка',
            name: 'inshur',
            value: 'insur_1',
                                },
        {
            label: 'Добровольное медицинское страхование',
            name: 'inshur',
            value: 'insur_2',
        },
        {
            label: 'Рисковое страхование',
            name: 'inshur',
            value: 'insur_3',
        },
        {
            label: 'Страхование от работодателя',
            name: 'inshur',
            value: 'insur_4',
        },
        {
            label: 'Накопительное страхование жизни',
            name: 'inshur',
            value: 'insur_5',
        },
        {
            label: 'Страхование выезжающих зарубеж',
            name: 'inshur',
            value: 'insur_6',
        },
    ],
};



export const  QuizItem_5 = props => {
    const {setData, setApprove, data} = props;
    const fields = fieldsData.values.map(field => {
        const {label, name, value} = field;
        const isChecked = data[name] && !!data[name][value];
        const dispatchCHange = checked => {
            const newData = {
                ...data[name],
                [value]: checked,
            };
            const isApproved = isEmptyObj(newData) ? false : true;

            setApprove(isApproved);
            setData({[name]: newData});
        };
        return (
            <div key={label}>
                <label>
                    <Checkbox
                        checked={isChecked}
                        dispatchChange={dispatchCHange}/>
                    <span>{label}</span>
                </label>
            </div>
        );
    });

    return (
        <div className="tm-answer">
            <div className="uk-margin uk-grid-small uk-child-width-1-2 uk-grid" data-uk-margin>
                <div className="tm-checkbox-list uk-child-width-1-2" data-uk-grid>
                    {fields}
                </div>
            </div>

            <div className="tm-fact">
                <div className="uk-text-muted">Кто ещё застрахован?</div>
            </div>

        </div>
    );
};
