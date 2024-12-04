import React from 'react';
import './First.css'; // CSS file for styling (optional, if you prefer inline styles)

const First = () => {
    return (
        <div
            className="first-container d-flex justify-content-between align-items-center border p-3"
            style={{
                height: '40%',
                width: '100%',
                margin: '0 auto', // Centers the div horizontally
                border: '1px solid #000',
                boxSizing: 'border-box',
                position: 'relative',
            }}
        >
            <p style={{ margin: 0 }}>Customize this page</p>
            <button
                className="btn btn-primary"
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                }}
            >
                Customize this page
            </button>
        </div>
    );
};

export default First;
