import React, { useState, useEffect } from 'react';
import Plot from './plot'
import AddSteps from '../modals/AddSteps'
import Moment from 'moment';

const Pedometer = (props) => {
    const [steps, setSteps] = useState([{ data: 0, date: 0 }]);
    const [showModal, setShowModal] = useState(false);
    let currentWeek = [];

    useEffect(() => {
        let temp;
        temp = localStorage.getItem('steps');
        if (temp) {
            setSteps(JSON.parse(temp));
        }
        console.log(Moment().isoWeekday(8));// <- THIIIIIIIIIIISSSSSSS
    }, []);

    const addButtonHandler = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    function compareDates(a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
    }

    const submitAndCloseModal = (data) => {
        let arrayToSort = [...steps, { data: data, date: Moment().format('DDD') }];
        arrayToSort.sort(compareDates);
        localStorage.setItem('steps', JSON.stringify(arrayToSort));
        setSteps(arrayToSort);
        setShowModal(false);
    };

    const conditionalPlot = () => {
        if (steps.length === 1) {
            return (
                <div className="col">
                    <h3 className="text-center">Oops! No data found <span role="img">😥</span></h3>
                    <br />
                    <h4 className="text-muted text-center">Start by adding your steps you took today!</h4>
                </div>
            );
        } else return (<Plot steps={steps} />);

    };

    return (
        <div className="row justify-content-center">
            <AddSteps visibility={showModal} close={closeModal} submit={submitAndCloseModal} />
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="text-center">{props.match.params.name}</h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-3" >
                    {conditionalPlot()}
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 col-md-4">
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={addButtonHandler}>Add Today's Steps</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pedometer;