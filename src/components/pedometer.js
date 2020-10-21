import React, { useState, useEffect } from 'react';
import Plot from './plot'
import AddSteps from '../modals/AddSteps'
import Moment from 'moment';

const Pedometer = (props) => {
    const [steps, setSteps] = useState([{ data: 0, date: 0 }]);
    const [showModal, setShowModal] = useState(false);
    const [currentWeek, setCurrentWeek] = useState(Moment().isoWeekday(1).format('x'));

    useEffect(() => {
        let temp;
        temp = localStorage.getItem('steps');
        if (temp) {
            setSteps(JSON.parse(temp));
        }
    }, []);

    const getDatesToSent = () => {
        let selectedDates = [];
        for (let i = 1; i < steps.length; i++) {
            if (steps[i].date >= Moment(currentWeek, 'x').startOf('day').format('x') &&
                steps[i].date <= Moment(currentWeek, 'x').add(6, 'days').endOf('day').format('x')) {
                selectedDates.push(steps[i]);
            }
        }
        let formatedDates = [];
        let j = 0;
        let day = 0;
        while (day < 7) {
            if (j < selectedDates.length && selectedDates[j].date >= Moment(currentWeek, 'x').add(day, 'days').startOf('day').format('x')
                && selectedDates[j].date <= Moment(currentWeek, 'x').add(day, 'days').endOf('day').format('x')) {
                formatedDates.push(selectedDates[j]);
                j++;
            }
            else {
                formatedDates.push({ data: 0, date: 0 });
            }
            day++;
        }
        return formatedDates;
    }

    const switchWeeks = (direction) => {
        if (direction === 'for') {
            setCurrentWeek(Moment(currentWeek, 'x').add(7, 'days').format('x'));
        }
        else {
            setCurrentWeek(Moment(currentWeek, 'x').subtract(7, 'days').format('x'));
        }
    };

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

    const submitAndCloseModal = (data, date) => {
        let arrayToSort = [...steps, { data: data, date: date }];
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
        } else return (<Plot stepsArr={getDatesToSent()} />);

    };

    return (
        <div className="row justify-content-center">
            <AddSteps visibility={showModal} close={closeModal} submit={submitAndCloseModal} />
            <div className="col-12">
                <div className="row justify-content-around p-1 bg-info">
                    <div className="col-3 align-self-center text-md-center text-left">
                        <input className="btn btn-dark" type="button" value="Prev Week" onClick={() => switchWeeks('back')} />
                    </div>
                    <div className="col-5 align-self-center">
                        <h5 className="text-center text-white text-wrap">
                            {`${Moment(currentWeek, 'x').format('MMMM YYYY')} ${Moment(currentWeek, 'x').format('Do')} - ${Moment(currentWeek, 'x').add(6, 'days').format('Do')}`}
                        </h5>
                    </div>
                    <div className="col-3 align-self-center text-md-center text-left">
                        <input className="btn btn-dark" type="button" value="Next Week" onClick={() => switchWeeks('for')} />
                    </div>
                </div>
                <div className="row justify-content-center mt-3 bg-light" >
                    {conditionalPlot()}
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-10 col-md-4">
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={addButtonHandler}>Add Today's Steps</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pedometer;