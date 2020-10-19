import React, { useState, useEffect } from 'react';
import Plot from './plot'

const Pedometer = (props) => {
    const [steps, setSteps] = useState();

    useEffect(() => {
        let temp = [];
        temp = localStorage.getItem('steps');
        if (temp) {
            setSteps(temp);
        }
    }, []);

    const conditionalPlot = () => {
        if (!steps) {
            return (
                <div className="col">
                    <h3 className="text-center">Oops! No data found <span role="img">😥</span></h3>
                    <br />
                    <h4 className="text-muted text-center">Start by adding your steps you took today!</h4>
                </div>
            );
        } else {
            return (<Plot steps={steps} />);
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="text-center">{props.match.params.name}</h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-3" >
                    {conditionalPlot()}
                </div>

            </div>
        </div>
    );
}

export default Pedometer;