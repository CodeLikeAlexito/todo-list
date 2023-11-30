import React from "react";

const ErrorModal = ({onClose}) => {
    return (
        <div className="error-modal">
            <div className="modal-content">
              <p>Error modal</p>
              <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ErrorModal;