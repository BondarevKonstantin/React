import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="error-header">Error</span>
            <span>Somethig's not right</span>
        </div>
    );
};

export default ErrorIndicator;
