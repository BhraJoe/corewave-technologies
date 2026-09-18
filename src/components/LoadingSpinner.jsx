import React from 'react';
import Logo from './Logo';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="loader">
                <div className="loader-ring"></div>
                <div className="loader-logo">
                    <Logo size={40} showText={false} />
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
