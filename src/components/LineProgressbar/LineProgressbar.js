import * as React from 'react';
import './LineProgressbar.scss';

export const LineProgressbar = props => {
    const {percentage} = props;

    return (
        <div className="tm-progressbar-line">
            <div className="tm-progressbar-line___outer">
                <div
                    className="tm-progressbar-line__inner"
                style={{
                    width: `${percentage}%`,
                }}/>
            </div>
        </div>
    );
};