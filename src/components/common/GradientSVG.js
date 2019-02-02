import * as React from 'react';

export const GradientSVG = props => {
    const { startColor, endColor, id, rotation } = props;
    const gradientTransform = `rotate(${rotation ? rotation : 0})`;
    
    return (
        <svg style={{ height: 0 }}>
            <defs>
                <linearGradient id={id} gradientTransform={gradientTransform}>
                    <stop offset="0%" stopColor={startColor} />
                    <stop offset="100%" stopColor={endColor} />
                </linearGradient>
            </defs>
        </svg>
    );
};
