import * as React from 'react';

export const LoadingSpinner = ({inline}) => (
    <div className="loading-spinner" style={{display: inline ? 'inline-block' : 'block'}}>
        <i className='fa fa-spinner fa-spin'/>
    </div>
);
