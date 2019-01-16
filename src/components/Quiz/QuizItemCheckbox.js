import * as React from 'react';

import {Checkbox} from '../common/Checkbox';
import {isEmptyObj} from "../common/utils";

export const  QuizItemCheckbox = props => {
    const {setData, setApprove, data, fieldsData} = props;
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
                {fields}
            </div>

            <div className="tm-fact">
                <div className="uk-text-muted">Кто ещё застрахован?</div>
            </div>

        </div>
    );
};
