import React, { useState, useEffect } from 'react';

const MessageDialog = (props) => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(props.show);
    }, [props.show]);

    const handleClose = () => {
        setDisplay(false);
        props.setMessage();
        if (props.callback) {
            if (props.callback === 'reload') {
                window.location.reload();
            } else {
                window.location.href = props.callback;
            }
        }
    };

    useEffect(() => {
        document.body.classList.toggle('blur-background', props.show);
        return () => {
            document.body.classList.remove('blur-background');
        };
    }, [props.show]);

    return (
        display && (
            <div className="modal" tabIndex="-1" role="dialog" onClick={handleClose}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.name}</h5>
                            <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{props.message}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default MessageDialog;
