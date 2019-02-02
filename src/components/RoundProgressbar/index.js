import * as React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {GradientSVG} from "../common/GradientSVG";
import {randomId} from "../../utils";

import './style.scss';

export const RoundProgressbar = props => {
    const {children, gradient, ...otherProps} = props;
    const id = gradient && randomId();
    const styles = gradient ? {
        path: {
            stroke: `url(#${id})`,
        },
    } : {};


    return (
        <div className="tm-progressbar">
            <div className="tm-progressbar__indicator">
                <CircularProgressbar {...otherProps} styles={styles}/>
            </div>
            <div className="tm-progressbar__inner">
                {children}
            </div>
            {gradient && <GradientSVG {...gradient} id={id}/>}
        </div>
    );
};
