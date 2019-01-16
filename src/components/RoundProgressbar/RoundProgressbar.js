import * as React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const RoundProgressbar = props => {
    const {children, ...otherProps} = props;

    return (
        <div className="tm-progressbar">
            <div className="tm-progressbar__indicator">
                <CircularProgressbar {...otherProps} />
            </div>
            <div className="tm-progressbar__inner">
                {children}
            </div>
        </div>
    );
};