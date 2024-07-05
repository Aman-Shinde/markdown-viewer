import React from 'react';

function Popup() {
    const styles = {
        position: 'absolute',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '5px 10px',
        backgroundColor: '#4aa3a3',
        color: 'white',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    };

    return (
        <div style={styles}>
          Copied!
        </div>
    );
}

export default Popup;
