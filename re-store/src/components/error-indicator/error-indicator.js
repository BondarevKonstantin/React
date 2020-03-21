import React from 'react';

import './error-indicator.css';

import icon from './';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt='error icon' />
            <span className="error-header">Error</span>
            <span>Somethig's not right</span>
        </div>
    );
};

export default ErrorIndicator;
