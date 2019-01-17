import * as React from 'react';

import iconMoney from "../../images/money.png";

export class QuizItemVoting extends React.Component {
    componentDidMount() {
        const {data, fieldsData:{name}, setApprove} = this.props;

        if (!data[name]) return;

        setApprove(true);
    }

    render() {
        const {setData, setApprove, data, fieldsData} = this.props;
        const {from, to, name, label} = fieldsData;
        let fields = [];

        for (let i = from; i <= to; i++) {
            const isChecked = data[name] >= i;
            const clickHandler = () => {
                setApprove(true);
                setData({[name]: i});
            };
            fields.push((
                <li key={i}
                    onClick={clickHandler}
                    className={`tm-paginator-button uk-button ${isChecked ? 'uk-active' : ''}`}>
                    {i + (i === to ? '+' : '')}
                </li>
            ));
        }

        return (
                <div className="uk-margin" data-uk-margin>
                    <div>{label}</div>

                    <div>
                        <ul className="uk-pagination">
                            {fields}
                        </ul>
                    </div>
                </div>
        );
    }
}
