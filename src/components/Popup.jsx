import React from 'react';
import './Popup.css'; // Make sure to create a corresponding CSS file for styling

const Popup = ({ children, onClose }) => {
    return (
        <div className="popup-backdrop" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}> {/* Prevents click inside the popup from closing it */}
                <button className="popup-close" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
