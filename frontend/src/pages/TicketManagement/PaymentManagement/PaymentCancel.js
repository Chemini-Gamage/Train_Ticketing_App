import React from 'react';

function PaymentCancel({ train }) {
    if (!train || !train.length) {
        return <p>No train data available.</p>;
    }

    return (
        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {train.map((trainItem) => (
                        <div key={trainItem._id}>
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Payment declined</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Re-add a ticket</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PaymentCancel;
