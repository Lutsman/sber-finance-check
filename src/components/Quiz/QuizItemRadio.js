import * as React from 'react';

export class QuizItemRadio extends React.Component {
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
                <label key={label}>
                    <input className="uk-radio" name={name} type="radio" onChange={changeHandler}
                           checked={isChecked}/>
                    {label}
                </label>)
        });

        return (
            <div className="uk-margin" data-uk-margin>
                {fields}
            </div>
        );
    }
}
