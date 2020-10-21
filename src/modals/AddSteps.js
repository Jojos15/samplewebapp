import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Moment from 'moment';

const AddSteps = ({ visibility, close, submit }) => {

    const [stepsTaken, setStepsTaken] = useState("");
    const [error, setError] = useState(false);
    const [devDate, setDevDate] = useState("");
    const [devError, setDevError] = useState(false);

    useEffect(() => {
        if (isNaN(stepsTaken)) {
            setError(true);
        }
        else if (error) {
            setError(false);
        }
    }, [stepsTaken]);

    useEffect(() => {
        if (devDate != "") {
            if (!Moment(devDate).isValid()) {
                setDevError(true);
            }
            else if (devError) {
                setDevError(false);
            }
        }
    }, [devDate]);

    const submitHandler = () => {
        if (!error && !devError) {
            if (devDate === "") {
                submit(stepsTaken, Moment().format('x'));
            }
            else submit(stepsTaken, Moment(devDate).format('x'));
        }
        else if (!error && devDate === "") {
            submit(stepsTaken, Moment().format('x'));
        }
    }

    return (
        <ReactModal
            isOpen={visibility}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: 'none',
                    background: '#FFFFFF00',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                }
            }}
            onRequestClose={close}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            parentSelector={() => document.querySelector('#element')}
            ariaHideApp={false}>

            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Today's Steps</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">The day is: </label>
                                <div className="col-sm-10">
                                    <input type="text" readOnly className="form-control-plaintext" value={Moment().format('dddd, MMMM Do YYYY')} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Steps you took: </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" onChange={(e) => setStepsTaken(e.target.value)} placeholder="None?" />
                                </div>
                                <div className={`${error ? "" : "errorView"}`}>
                                    <p className="text-danger">Please input only numbers</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-6 col-form-label">(Dev *to be removed from porduction* set specific date, format: (YYYY-MM-DD). Leave blank for current Date.) </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={devDate} onChange={(e) => setDevDate(e.target.value)} />
                                </div>
                                <div className={`${devError ? "" : "errorView"}`}>
                                    <p className="text-danger">Something is wrong with the format</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={submitHandler}>Add</button>
                        <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
}

export default AddSteps;