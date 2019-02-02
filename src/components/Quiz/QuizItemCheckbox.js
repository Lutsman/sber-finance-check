import * as React from 'react';

import {Checkbox} from '../common/Checkbox';
import {isEmptyObj} from "../../utils";

export class QuizItemCheckbox extends React.Component {
    componentDidMount() {
        const {data, fieldsData, setApprove} = this.props;

        for (const {name, value} of fieldsData.values) {
            if (!data[name] || !data[name][value]) continue;

            setApprove(true);
        }
    }

    render() {
        const {setData, setApprove, data, fieldsData} = this.props;
        const fields = fieldsData.values.map(field => {
            const {label, name, value} = field;
            const isChecked = data[name] && !!data[name][value];
            const dispatchChange = checked => {
                const newData = {
                    ...data[name],
                    [value]: checked,
                };
                const isApproved = !isEmptyObj(newData);

                setApprove(isApproved);
                setData({[name]: newData});
            };
            return (
                <div key={label}>
                    <label>
                        <Checkbox
                            checked={isChecked}
                            dispatchChange={dispatchChange}/>
                        <span>{label}</span>
                    </label>
                </div>
            );
        });

        return (
            <div className="tm-checkbox-list uk-margin uk-grid-small uk-child-width-1-1 uk-child-width-1-2@s uk-grid">
                {fields}
            </div>
        );
    }
}
