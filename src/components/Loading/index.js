import React from 'react';
import './style.css';

const Loading = ({ loading }) => {
    return (
        <div style={{ height: 55, position: 'relative', display: 'flex' }}>
            {loading ? <div className="loader">Loading...</div> : null}
        </div>
    );
};

export default Loading;
