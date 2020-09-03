import React from 'react';
import PropTypes from 'prop-types';
import './loading.css';

const LoadingContainer = (props) => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 300,
            }}
        >
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

LoadingContainer.propTypes = {};

export default LoadingContainer;
