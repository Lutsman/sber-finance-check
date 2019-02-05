import * as React from 'react';

import './style.scss';

export const LoadingSpinner = ({inline}) => (
    <div className={`loading-spinner ${inline ? 'loading-spinner-inline' : ''}`}>
        <i className='fa fa-spinner fa-spin'/>
    </div>
);
