import * as React from 'react';

import people from "../../images/people.png";

export class QuizItemRadio extends React.Component {
    componentDidMount() {
        const {data, fieldsData, setApprove} = this.props;

        for (const {name} of fieldsData.values) {
            if (!data[name]) continue;

            setApprove(true);
        }
    }

    render() {
        const {setData, setApprove, data, fieldsData} =this.props;
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
            <div className="tm-answer">
                <div className="uk-margin" data-uk-margin>
                    {fields}
                </div>

                <div className="tm-fact">
                    <div className="uk-text-muted">А вы знали, что:</div>

                    <div className="uk-flex-between uk-grid-large" data-uk-grid>
                        <div className="uk-width-2-5">
                            <div className="tm-font-light uk-text-lead uk-text-primary">46%</div>
                            <div className="tm-text-large">всех клиентов тратят практически всю свою
                                зарплату.
                                Практически каждый второй.
                            </div>
                        </div>

                        <div className="uk-width-3-5">
                            <img src={people} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
