import * as React from 'react';

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