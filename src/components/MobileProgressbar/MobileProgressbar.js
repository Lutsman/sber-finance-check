import * as React from 'react';
import {connect} from 'react-redux';

import {LineProgressbar} from "../LineProgressbar/LineProgressbar";
import {quizFillingSelector} from "../../selectors/quiz";


export const MobileProdressbarComponent = props => (
    <div className="tm-progressbar-mobile">
        <LineProgressbar percentage={props.percentage}/>
    </div>
);

const mapStateToProps = state => ({
    percentage: quizFillingSelector(state),
});

export const MobileProdressbar = connect(mapStateToProps)(MobileProdressbarComponent);
