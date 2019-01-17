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
            <div className="tm-answer">
                <div className="uk-margin" data-uk-margin>
                    <div>{label}</div>

                    <div>
                        <ul className="uk-pagination">
                            {fields}
                        </ul>
                    </div>


                </div>

                <div className="tm-fact">
                    <div className="uk-text-muted">Сколько хранят другие?</div>

                    <div className="uk-flex-between uk-grid-large" data-uk-grid>
                        <div className="uk-width-2-5">
                            <div className="tm-font-light uk-text-lead uk-text-primary">4</div>
                            <div className="tm-text-large">месячных дохода. Примерно столько держат
                                клиенты в сбережениях на «черный день»
                            </div>
                        </div>

                        <div className="uk-width-3-5">
                            <img src={iconMoney} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
