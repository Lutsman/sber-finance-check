import * as React from 'react';


export class QuizItemDual extends React.Component {
    componentDidMount() {
        const {data, fieldsData, setApprove} = this.props;

        for (const {name} of fieldsData.values) {
            if (!data[name]) continue;

            setApprove(true);
        }
    }

    render() {
        const {setData, setApprove, data, fieldsData} = this.props;
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
            <div className="uk-margin uk-flex" data-uk-margin>
                {fields}
            </div>
        );
    }
}
