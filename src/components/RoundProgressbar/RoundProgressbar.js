import * as React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const RoundProgressbar = props => {
    const {children, ...otherProps} = props;

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%"
            }}
        >
            <div style={{ position: "absolute" }}>
                <CircularProgressbar {...otherProps} />
            </div>
            <div
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {children}
            </div>
        </div>
    );
};